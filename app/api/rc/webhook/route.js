import { NextResponse } from 'next/server'
import { after } from 'next/server'
import { prisma } from '@/lib/prisma'
import {
  shopTypeForNumber,
  matchOrCreateLead,
  sendMissedCallAlert,
} from '@/lib/call-ingest'
import { toE164 } from '@/lib/phone'

// RingCentral telephony-sessions webhook. Two contracts to honor
// (developers.ringcentral.com/guide/notifications/webhooks):
//  1. Creation handshake: RingCentral POSTs an empty body with a random
//     Validation-Token header and requires a 200 echoing that header within
//     3 seconds, response body <= 1024 bytes, Content-Type application/json.
//  2. Deliveries: every event carries OUR deliveryMode.validationToken in the
//     same header — anything else is rejected. Event handling runs in after()
//     so the 200 goes out immediately; a slow handler here risks RingCentral
//     permanently blacklisting the subscription.
// The call-log sync cron remains the source of truth — this route only powers
// the instant missed-call alert. Anything it misses, the poller backfills.

export async function POST(request) {
  const validationToken = request.headers.get('validation-token')
  const echoHeaders = {
    'Content-Type': 'application/json',
    ...(validationToken ? { 'Validation-Token': validationToken } : {}),
  }

  let payload = null
  try {
    const text = await request.text()
    payload = text ? JSON.parse(text) : null
  } catch {
    payload = null
  }

  // Empty body = the creation handshake (or a keep-alive probe).
  if (!payload) {
    return new NextResponse('{}', { status: 200, headers: echoHeaders })
  }

  const secret = process.env.RINGCENTRAL_WEBHOOK_SECRET
  if (!secret || !timingSafeEquals(validationToken, secret)) {
    return new NextResponse('{}', { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  after(async () => {
    try {
      await handleTelephonyEvent(payload)
    } catch (error) {
      console.error('RingCentral webhook handling failed:', error)
    }
  })

  return new NextResponse('{}', { status: 200, headers: echoHeaders })
}

// Same timing-safe comparison pattern as lib/crm-auth.js passwordsMatch().
function timingSafeEquals(input, expected) {
  if (typeof input !== 'string' || typeof expected !== 'string') return false
  if (input.length !== expected.length) return false
  let mismatch = 0
  for (let i = 0; i < expected.length; i++) {
    mismatch |= input.charCodeAt(i) ^ expected.charCodeAt(i)
  }
  return mismatch === 0
}

// Missed inbound call → stub Call row + instant Telegram alert. The stub's
// rcCallId is 'tsess:{telephonySessionId}'; the next sync run merges the full
// call-log record into it (see ingestCallRecord) so nothing double-alerts.
async function handleTelephonyEvent(payload) {
  const body = payload?.body
  if (!body?.telephonySessionId || !Array.isArray(body.parties)) return

  const missedParty = body.parties.find(
    (p) =>
      p?.direction === 'Inbound' &&
      p?.status?.code === 'Disconnected' &&
      p?.missedCall === true &&
      p?.from?.phoneNumber
  )
  if (!missedParty) return

  const fromNumber = missedParty.from.phoneNumber
  const toNumber = missedParty.to?.phoneNumber ?? null
  const shopType = shopTypeForNumber(toNumber)
  const stubId = `tsess:${body.telephonySessionId}`

  // One stub per session no matter how many parties/events fire.
  const existing = await prisma.call.findFirst({
    where: {
      OR: [{ rcCallId: stubId }, { telephonySessionId: body.telephonySessionId }],
    },
  })
  if (existing) return

  const goneToVoicemail = missedParty.status?.reason === 'Voicemail'
  let call
  try {
    call = await prisma.call.create({
      data: {
        rcCallId: stubId,
        telephonySessionId: body.telephonySessionId,
        direction: 'Inbound',
        fromNumber,
        fromName: missedParty.from.name ?? null,
        toNumber,
        shopType,
        result: goneToVoicemail ? 'Voicemail' : 'Missed',
        startTime: body.eventTime ? new Date(body.eventTime) : new Date(),
        rcRaw: payload,
      },
    })
  } catch {
    return // unique-violation race with a concurrent event delivery
  }

  const { lead, autoCreated } = await matchOrCreateLead({
    customerE164: toE164(fromNumber),
    direction: 'Inbound',
    fromName: null, // webhook names are raw caller ID — let the lead default to the number
    shopType,
    issue: goneToVoicemail
      ? 'Left a voicemail — transcript pending.'
      : 'Missed inbound call — needs a call back.',
  })

  const data = { alertedAt: null }
  if (lead) {
    data.leadId = lead.id
    data.leadAutoCreated = autoCreated
  }

  const sent = await sendMissedCallAlert(call, lead, { autoCreated })
  if (sent) data.alertedAt = new Date()
  await prisma.call.update({ where: { id: call.id }, data })
}
