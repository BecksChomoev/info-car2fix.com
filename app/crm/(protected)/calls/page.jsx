import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { requireCrmAuth } from '@/lib/crm-auth'
import { isRingCentralConfigured } from '@/lib/ringcentral'
import CallList from '@/components/crm/calls/CallList'
import { formatRelativeTime } from '@/lib/format'

// The Calls tab: every RingCentral call across both shops, matched to leads.
// Fed by /api/crm/calls/sync (poller) and /api/rc/webhook (instant alerts).

const PER_PAGE = 50

// Window the metric cards summarise. Matches SEED_DAYS in lib/ringcentral.js —
// the cards should never claim a longer period than the sync actually backfills.
const METRIC_DAYS = 30
const MISSED_RESULTS = ['Missed', 'Busy', 'No Answer', 'Hang Up', 'Rejected']

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'missed', label: 'Missed' },
  { key: 'voicemail', label: 'Voicemail' },
  { key: 'recorded', label: 'Recorded' },
]

const SHOPS = [
  { key: 'all', label: 'Both shops' },
  { key: 'mechanical', label: 'Mechanical' },
  { key: 'body', label: 'Body' },
]

function buildWhere(filter, shop) {
  const where = {}
  if (shop === 'mechanical' || shop === 'body') where.shopType = shop
  if (filter === 'missed') {
    where.direction = 'Inbound'
    where.result = { in: [...MISSED_RESULTS, 'Voicemail'] }
  } else if (filter === 'voicemail') {
    where.OR = [{ result: 'Voicemail' }, { vmMessageUri: { not: null } }]
  } else if (filter === 'recorded') {
    where.OR = [{ recordingBlobUrl: { not: null } }, { recordingContentUri: { not: null } }]
  }
  return where
}

function filterHref({ filter, shop, page }) {
  const search = new URLSearchParams()
  if (filter && filter !== 'all') search.set('filter', filter)
  if (shop && shop !== 'all') search.set('shop', shop)
  if (page && page > 1) search.set('page', String(page))
  const qs = search.toString()
  return qs ? `/crm/calls?${qs}` : '/crm/calls'
}

export default async function CallsPage({ searchParams }) {
  await requireCrmAuth()

  const sp = await searchParams
  const filter = FILTERS.some((f) => f.key === sp.filter) ? sp.filter : 'all'
  const shop = SHOPS.some((s) => s.key === sp.shop) ? sp.shop : 'all'
  const page = Math.max(1, Number.parseInt(sp.page, 10) || 1)

  const where = buildWhere(filter, shop)
  const since = new Date(Date.now() - METRIC_DAYS * 24 * 60 * 60 * 1000)

  const [calls, total, syncState, callsInWindow, missedInWindow, voicemailsInWindow, inbound, answered] =
    await Promise.all([
      prisma.call.findMany({
        where,
        orderBy: { startTime: 'desc' },
        take: PER_PAGE,
        skip: (page - 1) * PER_PAGE,
        include: { lead: { select: { id: true, name: true } } },
      }),
      prisma.call.count({ where }),
      prisma.rcSyncState.findUnique({ where: { id: 'singleton' } }),
      prisma.call.count({ where: { startTime: { gte: since } } }),
      prisma.call.count({
        where: {
          startTime: { gte: since },
          direction: 'Inbound',
          result: { in: [...MISSED_RESULTS, 'Voicemail'] },
        },
      }),
      prisma.call.count({
        where: {
          startTime: { gte: since },
          OR: [{ result: 'Voicemail' }, { vmMessageUri: { not: null } }],
        },
      }),
      prisma.call.count({ where: { startTime: { gte: since }, direction: 'Inbound' } }),
      prisma.call.count({
        where: { startTime: { gte: since }, direction: 'Inbound', result: 'Accepted' },
      }),
    ])

  const answerRate = inbound > 0 ? Math.round((answered / inbound) * 100) : null
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE))
  const configured = isRingCentralConfigured()

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-gray-900 dark:text-white">Calls</h1>
          <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
            {syncState?.lastSyncAt
              ? `Synced from RingCentral ${formatRelativeTime(syncState.lastSyncAt)}`
              : 'Waiting for the first RingCentral sync'}
            {syncState?.lastError && (
              <span className="text-brand-red"> · last sync failed</span>
            )}
          </p>
        </div>
        <div className="flex gap-1">
          {SHOPS.map((s) => (
            <Link
              key={s.key}
              href={filterHref({ filter, shop: s.key })}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                shop === s.key
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                  : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-gray-400'
              }`}
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>

      {!configured && (
        <div className="mt-4 rounded-xl border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 px-4 py-3 text-sm text-amber-800 dark:text-amber-200">
          RingCentral isn&apos;t connected yet — calls will appear here automatically once the
          RINGCENTRAL_JWT credential is added in Vercel. See docs/ringcentral-calls-tab-proposal.md.
        </div>
      )}

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
        <MetricCard label={`Calls (${METRIC_DAYS}d)`} value={callsInWindow} />
        <MetricCard
          label={`Missed (${METRIC_DAYS}d)`}
          value={missedInWindow}
          tone={missedInWindow > 0 ? 'red' : null}
        />
        <MetricCard label={`Voicemails (${METRIC_DAYS}d)`} value={voicemailsInWindow} />
        <MetricCard
          label={`Answer rate (${METRIC_DAYS}d)`}
          value={answerRate == null ? '—' : `${answerRate}%`}
        />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-1.5">
        {FILTERS.map((f) => (
          <Link
            key={f.key}
            href={filterHref({ filter: f.key, shop })}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              filter === f.key
                ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
            }`}
          >
            {f.label}
          </Link>
        ))}
        <span className="ml-auto text-xs text-gray-400">
          {total} call{total === 1 ? '' : 's'}
        </span>
      </div>

      <div className="mt-3 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
        {calls.length === 0 ? (
          <div className="px-5 py-12 text-center text-sm text-gray-500 dark:text-gray-400">
            {configured
              ? 'No calls here yet. New calls land within a few minutes of hanging up.'
              : 'No calls yet — connect RingCentral to start the feed.'}
          </div>
        ) : (
          <CallList calls={calls} showLead />
        )}
      </div>

      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-between text-sm">
          {page > 1 ? (
            <Link
              href={filterHref({ filter, shop, page: page - 1 })}
              className="text-brand-blue dark:text-brand-blue-light hover:underline"
            >
              ← Newer
            </Link>
          ) : (
            <span />
          )}
          <span className="text-xs text-gray-400">
            Page {page} of {totalPages}
          </span>
          {page < totalPages ? (
            <Link
              href={filterHref({ filter, shop, page: page + 1 })}
              className="text-brand-blue dark:text-brand-blue-light hover:underline"
            >
              Older →
            </Link>
          ) : (
            <span />
          )}
        </div>
      )}
    </div>
  )
}

function MetricCard({ label, value, tone }) {
  return (
    <div className="rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-4 py-3">
      <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
      <div
        className={`mt-1 text-2xl font-bold ${
          tone === 'red' ? 'text-brand-red' : 'text-gray-900 dark:text-white'
        }`}
      >
        {value}
      </div>
    </div>
  )
}
