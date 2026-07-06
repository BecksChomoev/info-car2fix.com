// Call ingestion: turns RingCentral call-log records (and webhook telephony
// events) into Call rows, matches or auto-creates Leads by the customer's
// phone number, archives media to the private Blob store, and sends the
// missed-call Telegram alerts. Shared by the sync cron and the webhook route.

import { put } from '@vercel/blob'
import { prisma } from '@/lib/prisma'
import { sendTelegramMessage } from '@/lib/telegram'
import { toE164, formatPhoneDisplay, formatDuration } from '@/lib/phone'
import { rcRequest, rcDownload } from '@/lib/ringcentral'
import { PHONE, BODY_SHOP } from '@/lib/site'
import { formatDateTime } from '@/lib/format'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.car2fix.com'

const MECH_NUMBER = toE164(PHONE.e164)
const BODY_NUMBER = toE164(BODY_SHOP.phone.e164)

// Inbound results that mean "we did not talk to the customer" — these get the
// Telegram call-back alert.
const MISSED_RESULTS = new Set(['Missed', 'Voicemail', 'Busy', 'No Answer', 'Hang Up', 'Rejected'])

// Don't alert (or auto-create leads) for history ingested by a backfill —
// only for calls that just happened.
const ALERT_WINDOW_MS = 2 * 60 * 60 * 1000

export function shopTypeForNumber(phoneNumber) {
  const n = toE164(phoneNumber)
  if (n && n === BODY_NUMBER) return 'body'
  return 'mechanical'
}

function isOwnNumber(e164) {
  return e164 != null && (e164 === MECH_NUMBER || e164 === BODY_NUMBER)
}

export function isMissedResult(result) {
  return MISSED_RESULTS.has(result)
}

// The customer's side of the call: caller for inbound, callee for outbound.
function customerNumberOf({ direction, fromNumber, toNumber }) {
  const e164 = toE164(direction === 'Outbound' ? toNumber : fromNumber)
  return isOwnNumber(e164) ? null : e164
}

// --- Lead matching -----------------------------------------------------------

// Returns { lead, autoCreated }. Only inbound calls create leads — an outbound
// call to an unknown number is usually a supplier, not a customer.
export async function matchOrCreateLead({ customerE164, direction, fromName, shopType, issue }) {
  if (!customerE164) return { lead: null, autoCreated: false }

  const existing = await prisma.lead.findFirst({
    where: { phoneE164: customerE164 },
    orderBy: { createdAt: 'desc' },
  })
  if (existing) return { lead: existing, autoCreated: false }
  if (direction !== 'Inbound') return { lead: null, autoCreated: false }

  const lead = await prisma.lead.create({
    data: {
      name: fromName?.trim() || `Caller ${formatPhoneDisplay(customerE164)}`,
      phone: formatPhoneDisplay(customerE164),
      phoneE164: customerE164,
      carModel: 'Unknown',
      issue: issue || 'Inbound phone call — no details yet.',
      shopType,
      source: 'phone_call',
      stage: 'new',
    },
  })
  return { lead, autoCreated: true }
}

// --- Telegram alerts ----------------------------------------------------------

function shopChatId(shopType) {
  return shopType === 'body'
    ? process.env.TELEGRAM_CHAT_ID_BODYSHOP
    : process.env.TELEGRAM_CHAT_ID_MECHANICAL
}

function shopLabel(shopType) {
  return shopType === 'body' ? 'Body Shop (Linden)' : 'Mechanical Shop (Newark)'
}

// Plain text on purpose (see lib/telegram.js) — caller names can contain
// Markdown-breaking characters.
export async function sendMissedCallAlert(call, lead, { autoCreated } = {}) {
  const chatId = shopChatId(call.shopType)
  if (!chatId) return false

  const kind = call.result === 'Voicemail' || call.vmMessageUri ? 'Voicemail' : 'Missed call'
  const lines = [
    `📞 ${kind} — ${shopLabel(call.shopType)}`,
    `From: ${formatPhoneDisplay(call.fromNumber)}${call.fromName ? ` — ${call.fromName}` : ''}`,
    `Time: ${formatDateTime(call.startTime)}`,
  ]
  if (call.vmTranscript) lines.push(`Voicemail: "${call.vmTranscript}"`)
  if (lead) {
    lines.push(
      autoCreated
        ? `New lead created: ${SITE_URL}/crm/leads/${lead.id}`
        : `Existing lead (${lead.name}): ${SITE_URL}/crm/leads/${lead.id}`
    )
  }
  lines.push(`All calls: ${SITE_URL}/crm/calls`)
  return sendTelegramMessage(chatId, lines.join('\n'))
}

async function sendTranscriptFollowUp(call) {
  const chatId = shopChatId(call.shopType)
  if (!chatId || !call.vmTranscript) return false
  const lines = [
    `📝 Voicemail transcript — ${shopLabel(call.shopType)}`,
    `From: ${formatPhoneDisplay(call.fromNumber)}${call.fromName ? ` — ${call.fromName}` : ''}`,
    `"${call.vmTranscript}"`,
  ]
  if (call.leadId) lines.push(`Lead: ${SITE_URL}/crm/leads/${call.leadId}`)
  return sendTelegramMessage(chatId, lines.join('\n'))
}

// --- Ingestion from the call-log sync feed ------------------------------------

// Upserts one call-log record. Returns the Call row or null when skipped.
export async function ingestCallRecord(record) {
  if (record.type && record.type !== 'Voice') return null // faxes etc.
  if (!record.id || !record.startTime) return null

  const direction = record.direction === 'Outbound' ? 'Outbound' : 'Inbound'
  const fromNumber = record.from?.phoneNumber || record.from?.extensionNumber || null
  const toNumber = record.to?.phoneNumber || record.to?.extensionNumber || null
  const shopType = shopTypeForNumber(direction === 'Inbound' ? toNumber : fromNumber)

  const data = {
    rcCallId: record.id,
    sessionId: record.sessionId ?? null,
    telephonySessionId: record.telephonySessionId ?? null,
    direction,
    fromNumber,
    fromName: record.from?.name ?? null,
    fromLocation: record.from?.location ?? null,
    toNumber,
    shopType,
    result: record.result || 'Unknown',
    action: record.action ?? null,
    transport: record.transport ?? null,
    startTime: new Date(record.startTime),
    durationSec: record.duration ?? 0,
    recordingRcId: record.recording?.id ?? null,
    recordingContentUri: record.recording?.contentUri ?? null,
    vmMessageUri: record.message?.uri ?? null,
    rcRaw: record,
  }

  // A webhook may have already created a stub for this call under
  // 'tsess:{telephonySessionId}' — merge into it so alert dedupe carries over.
  const stubId = record.telephonySessionId ? `tsess:${record.telephonySessionId}` : null
  const existing = await prisma.call.findFirst({
    where: { OR: [{ rcCallId: record.id }, ...(stubId ? [{ rcCallId: stubId }] : [])] },
    // Prefer the real record over the stub when both exist.
    orderBy: { rcCallId: 'asc' },
  })

  let call
  if (existing) {
    const isStub = existing.rcCallId !== record.id
    if (isStub) {
      // Guard against the rare double-row case (stub + real from a racing sync).
      const real = await prisma.call.findUnique({ where: { rcCallId: record.id } })
      if (real) {
        await prisma.call.delete({ where: { id: existing.id } }).catch(() => {})
        call = await prisma.call.update({ where: { id: real.id }, data })
      } else {
        call = await prisma.call.update({ where: { id: existing.id }, data })
      }
    } else {
      call = await prisma.call.update({ where: { id: existing.id }, data })
    }
  } else {
    call = await prisma.call.create({ data })
  }

  // Lead matching. Recent inbound calls may auto-create a lead; backfilled
  // history only links to leads that already exist.
  const isRecent = Date.now() - call.startTime.getTime() < ALERT_WINDOW_MS
  if (!call.leadId) {
    const customerE164 = customerNumberOf(call)
    const { lead, autoCreated } = await matchOrCreateLead({
      customerE164,
      direction: isRecent ? call.direction : 'HistoricalInbound',
      fromName: sanitizeCallerName(call.fromName),
      shopType: call.shopType,
      issue: buildLeadIssue(call),
    })
    if (lead) {
      call = await prisma.call.update({
        where: { id: call.id },
        data: { leadId: lead.id, leadAutoCreated: autoCreated },
      })
      call.lead = lead
      call.leadWasAutoCreated = autoCreated
    }
  }

  // Missed-call alert (once per call, recent calls only).
  if (
    isRecent &&
    call.direction === 'Inbound' &&
    isMissedResult(call.result) &&
    !call.alertedAt
  ) {
    const lead = call.lead ?? (call.leadId ? await prisma.lead.findUnique({ where: { id: call.leadId } }) : null)
    const sent = await sendMissedCallAlert(call, lead, { autoCreated: call.leadWasAutoCreated })
    if (sent) {
      call = await prisma.call.update({
        where: { id: call.id },
        data: { alertedAt: new Date() },
      })
    }
  }

  return call
}

// RingCentral's from.name is often 'WIRELESS CALLER' or a 'CITY ST' string —
// useless as a lead name. Keep it only when it looks like an actual name.
function sanitizeCallerName(name) {
  if (!name) return null
  const trimmed = name.trim()
  if (!trimmed || trimmed === trimmed.toUpperCase()) return null
  return trimmed
}

function buildLeadIssue(call) {
  if (call.vmTranscript) return `Voicemail: "${call.vmTranscript}"`
  if (call.result === 'Voicemail' || call.vmMessageUri) {
    return 'Left a voicemail — transcript pending.'
  }
  if (isMissedResult(call.result)) return 'Missed inbound call — needs a call back.'
  return 'Inbound phone call — no details yet.'
}

// --- Media archival ------------------------------------------------------------

// Copies call recordings into the private Blob store before RingCentral's
// 90-day purge. Budgeted per run: every download is a "Heavy" API hit.
export async function processPendingRecordings(limit = 4) {
  const pending = await prisma.call.findMany({
    where: { recordingContentUri: { not: null }, recordingBlobUrl: null, recordingError: null },
    orderBy: { startTime: 'desc' },
    take: limit,
  })
  if (pending.length === 0) return { archived: 0, pending: 0 }
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return { archived: 0, pending: pending.length, skipped: 'no Blob store configured' }
  }

  let archived = 0
  for (const call of pending) {
    try {
      const media = await rcDownload(call.recordingContentUri)
      const ext = media.contentType.includes('wav') ? 'wav' : 'mp3'
      const blob = await put(`calls/${call.id}/recording.${ext}`, media.buffer, {
        access: 'private',
        contentType: media.contentType,
        addRandomSuffix: true,
      })
      await prisma.call.update({
        where: { id: call.id },
        data: { recordingBlobUrl: blob.url, recordingContentType: media.contentType },
      })
      archived++
    } catch (error) {
      // 404/410 = purged or gone on RingCentral's side: stop retrying forever.
      if (error.status === 404 || error.status === 410) {
        await prisma.call.update({
          where: { id: call.id },
          data: { recordingError: `download failed (${error.status})` },
        })
      } else {
        console.error(`Recording archival failed for call ${call.id}:`, error.message)
      }
    }
  }
  return { archived, pending: pending.length - archived }
}

// Fetches voicemail transcripts (and archives the audio) for calls whose
// voicemail is still pending. Transcription completes asynchronously on
// RingCentral's side, so this polls until Completed/NotAvailable.
export async function processPendingVoicemails(limit = 4) {
  const pending = await prisma.call.findMany({
    where: {
      vmMessageUri: { not: null },
      OR: [{ vmStatus: null }, { vmStatus: 'InProgress' }],
    },
    orderBy: { startTime: 'desc' },
    take: limit,
  })
  if (pending.length === 0) return { processed: 0 }

  let processed = 0
  for (const call of pending) {
    try {
      const message = await rcRequest('GET', call.vmMessageUri)
      const status = message?.vmTranscriptionStatus ?? 'NotAvailable'
      const attachments = message?.attachments ?? []

      const update = {}

      const audio = attachments.find((a) => a.type === 'AudioRecording')
      if (audio?.uri && !call.vmAudioBlobUrl && process.env.BLOB_READ_WRITE_TOKEN) {
        try {
          const media = await rcDownload(audio.uri)
          const ext = media.contentType.includes('wav') ? 'wav' : 'mp3'
          const blob = await put(`calls/${call.id}/voicemail.${ext}`, media.buffer, {
            access: 'private',
            contentType: media.contentType,
            addRandomSuffix: true,
          })
          update.vmAudioBlobUrl = blob.url
          update.vmAudioContentType = media.contentType
        } catch (error) {
          console.error(`Voicemail audio archival failed for call ${call.id}:`, error.message)
        }
      }

      if (status === 'Completed') {
        const transcriptAttachment = attachments.find((a) => a.type === 'AudioTranscription')
        if (transcriptAttachment?.uri) {
          const text = await rcDownload(transcriptAttachment.uri)
          update.vmTranscript = text.buffer.toString('utf8').trim().slice(0, 4000)
        }
        update.vmStatus = 'Completed'
      } else if (status === 'InProgress') {
        // Give transcription a day, then stop polling this voicemail.
        const dayOld = Date.now() - call.startTime.getTime() > 24 * 60 * 60 * 1000
        update.vmStatus = dayOld ? 'TimedOut' : 'InProgress'
      } else {
        update.vmStatus = status // NotAvailable — voicemail-to-text off on the account
      }

      let updated = await prisma.call.update({ where: { id: call.id }, data: update })
      processed++

      // Enrich an auto-created lead's issue with the transcript, and send the
      // follow-up alert (the missed-call ping usually beats transcription).
      if (update.vmTranscript) {
        if (updated.leadAutoCreated && updated.leadId) {
          await prisma.lead
            .updateMany({
              where: { id: updated.leadId, issue: { contains: 'transcript pending' } },
              data: { issue: `Voicemail: "${update.vmTranscript}"` },
            })
            .catch(() => {})
        }
        if (updated.alertedAt && !updated.vmAlertedAt) {
          const sent = await sendTranscriptFollowUp(updated)
          if (sent) {
            await prisma.call.update({
              where: { id: call.id },
              data: { vmAlertedAt: new Date() },
            })
          }
        }
      }
    } catch (error) {
      if (error.status === 404 || error.status === 410) {
        await prisma.call.update({
          where: { id: call.id },
          data: { vmStatus: 'Unavailable' },
        })
      } else {
        console.error(`Voicemail processing failed for call ${call.id}:`, error.message)
      }
    }
  }
  return { processed }
}

// --- Webhook subscription upkeep ------------------------------------------------

// Idempotently keeps one account-wide telephony-sessions webhook alive. Called
// from the sync cron: creates the subscription when missing, recreates it when
// blacklisted (RingCentral suspends misbehaving webhooks permanently and does
// not retry deliveries).
export async function ensureWebhookSubscription() {
  const secret = process.env.RINGCENTRAL_WEBHOOK_SECRET
  if (!secret) return { skipped: 'RINGCENTRAL_WEBHOOK_SECRET not set' }

  const address = `${SITE_URL}/api/rc/webhook`
  const list = await rcRequest('GET', '/restapi/v1.0/subscription')
  const existing = (list?.records ?? []).find((s) => s.deliveryMode?.address === address)

  if (existing) {
    const healthy =
      existing.status === 'Active' &&
      new Date(existing.expirationTime).getTime() - Date.now() > 30 * 24 * 60 * 60 * 1000
    if (healthy) return { ok: true, subscriptionId: existing.id }
    await rcRequest('DELETE', `/restapi/v1.0/subscription/${existing.id}`).catch(() => {})
  }

  const created = await rcRequest('POST', '/restapi/v1.0/subscription', {
    body: {
      eventFilters: ['/restapi/v1.0/account/~/telephony/sessions'],
      deliveryMode: { transportType: 'WebHook', address, validationToken: secret },
      expiresIn: 315360000, // 10 years — effectively never expires
    },
  })
  return { ok: true, created: true, subscriptionId: created?.id }
}
