import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { isRingCentralConfigured, syncCallLog } from '@/lib/ringcentral'
import {
  ingestCallRecord,
  processPendingRecordings,
  processPendingVoicemails,
  ensureWebhookSubscription,
} from '@/lib/call-ingest'

// RingCentral call-log poller — the system of record for the Calls tab.
// Triggered two ways with the same CRON_SECRET bearer token:
//   - Vercel cron, daily (Hobby plan allows only daily schedules) — reconciliation
//   - GitHub Actions, every ~5 minutes (.github/workflows/ringcentral-sync.yml)
// First run does an FSync seeded with 7 days of history; afterwards ISync with
// the stored token returns only changes. Webhooks handle instant alerts; this
// poller is the safety net that backfills anything they miss.

export async function GET(request) {
  const secret = process.env.CRON_SECRET
  if (!secret || request.headers.get('authorization') !== `Bearer ${secret}`) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  if (!isRingCentralConfigured()) {
    // Deployed before the RingCentral JWT exists — report cleanly so the
    // GitHub Actions pinger doesn't show failures while we wait.
    return NextResponse.json({ skipped: 'RingCentral credentials not configured' })
  }

  // Advisory lock: the GH Actions pinger and manual runs may overlap, and two
  // concurrent ISyncs with the same token would double-process. Stale locks
  // (crashed run) expire after 3 minutes.
  await prisma.rcSyncState.upsert({
    where: { id: 'singleton' },
    create: { id: 'singleton' },
    update: {},
  })
  const acquired = await prisma.rcSyncState.updateMany({
    where: {
      id: 'singleton',
      OR: [{ lockedAt: null }, { lockedAt: { lt: new Date(Date.now() - 3 * 60 * 1000) } }],
    },
    data: { lockedAt: new Date() },
  })
  if (acquired.count === 0) {
    return NextResponse.json({ skipped: 'sync already running' })
  }

  try {
    const state = await prisma.rcSyncState.findUnique({ where: { id: 'singleton' } })

    let sync
    try {
      sync = await syncCallLog(state?.syncToken)
    } catch (error) {
      // Expired/invalid sync token or >250 accumulated changes — RingCentral
      // rejects the ISync and we start a fresh frame.
      if (state?.syncToken && error.status === 400) {
        sync = await syncCallLog(null)
      } else {
        throw error
      }
    }

    const records = sync?.records ?? []
    let ingested = 0
    for (const record of records) {
      const call = await ingestCallRecord(record)
      if (call) ingested++
    }

    const recordings = await processPendingRecordings(4)
    const voicemails = await processPendingVoicemails(4)

    // Keep the real-time webhook subscription alive (no-op until the
    // RINGCENTRAL_WEBHOOK_SECRET env var and CallControl scope exist).
    let webhook
    try {
      webhook = await ensureWebhookSubscription()
    } catch (error) {
      webhook = { error: error.message?.slice(0, 200) }
    }

    await prisma.rcSyncState.update({
      where: { id: 'singleton' },
      data: {
        syncToken: sync?.syncInfo?.syncToken ?? state?.syncToken ?? null,
        lastSyncAt: new Date(),
        lastError: null,
        lockedAt: null,
      },
    })

    return NextResponse.json({
      success: true,
      syncType: sync?.syncInfo?.syncType,
      records: records.length,
      ingested,
      recordings,
      voicemails,
      webhook,
    })
  } catch (error) {
    console.error('RingCentral sync failed:', error)
    await prisma.rcSyncState
      .update({
        where: { id: 'singleton' },
        data: { lastError: String(error.message).slice(0, 500), lockedAt: null },
      })
      .catch(() => {})
    return NextResponse.json({ error: 'Sync failed', detail: error.message }, { status: 502 })
  }
}
