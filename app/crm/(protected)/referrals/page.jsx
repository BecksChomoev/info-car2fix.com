import Link from 'next/link'
import { Plus } from 'lucide-react'
import { prisma } from '@/lib/prisma'
import { requireCrmAuth } from '@/lib/crm-auth'
import { formatCurrency, formatRelativeTime } from '@/lib/format'
import { REFERRAL_STATUSES, REFERRAL_STATUS_KEYS, SHOP_LABEL } from '@/lib/referral-constants'
import { getWeekRange } from '@/lib/referral-report'
import ReferralStatusBadge from '@/components/crm/referrals/ReferralStatusBadge'

export const metadata = { title: 'Referrals · CRM' }

export default async function ReferralsPage({ searchParams }) {
  await requireCrmAuth()

  const sp = await searchParams
  const status = REFERRAL_STATUS_KEYS.includes(sp?.status) ? sp.status : null
  const shop = sp?.shop === 'mechanical' || sp?.shop === 'body' ? sp.shop : null
  const thisWeek = getWeekRange(0)

  const [referrals, pendingReview, owed, paidThisWeek] = await Promise.all([
    prisma.referral.findMany({
      where: { ...(status ? { status } : {}), ...(shop ? { shopType: shop } : {}) },
      include: { partner: { select: { name: true } } },
      orderBy: { createdAt: 'desc' },
    }),
    prisma.referral.count({ where: { status: 'invoice_uploaded' } }),
    prisma.referral.aggregate({
      where: { status: 'approved' },
      _sum: { commissionAmount: true },
      _count: true,
    }),
    prisma.referral.aggregate({
      where: { paidAt: { gte: thisWeek.start, lt: thisWeek.end } },
      _sum: { commissionAmount: true },
    }),
  ])

  const filterLink = (nextStatus) => {
    const params = new URLSearchParams()
    if (nextStatus) params.set('status', nextStatus)
    if (shop) params.set('shop', shop)
    const qs = params.toString()
    return qs ? `/crm/referrals?${qs}` : '/crm/referrals'
  }
  const shopLink = (nextShop) => {
    const params = new URLSearchParams()
    if (status) params.set('status', status)
    if (nextShop) params.set('shop', nextShop)
    const qs = params.toString()
    return qs ? `/crm/referrals?${qs}` : '/crm/referrals'
  }

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <h1 className="font-display text-2xl font-bold">Referrals</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {referrals.length} {referrals.length === 1 ? 'referral' : 'referrals'}
            {status ? ` · ${REFERRAL_STATUSES.find((s) => s.key === status)?.label}` : ''}
            {shop ? ` · ${SHOP_LABEL[shop]}` : ''}
          </p>
        </div>
        <Link
          href="/crm/referrals/new"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-brand-blue hover:bg-brand-blue-dark transition-colors"
        >
          <Plus className="w-4 h-4" />
          New referral
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <StatCard
          label="Waiting for review"
          value={pendingReview}
          hint="invoices to check & approve"
          href={filterLink('invoice_uploaded')}
        />
        <StatCard
          label="Owed to partners"
          value={formatCurrency(owed._sum.commissionAmount ?? 0)}
          hint={`${owed._count} approved, unpaid`}
          href={filterLink('approved')}
        />
        <StatCard
          label="Paid out this week"
          value={formatCurrency(paidThisWeek._sum.commissionAmount ?? 0)}
          hint={thisWeek.label}
          href="/crm/referrals/reports"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <FilterChip href={filterLink(null)} active={!status} label="All statuses" />
        {REFERRAL_STATUSES.map((s) => (
          <FilterChip key={s.key} href={filterLink(s.key)} active={status === s.key} label={s.label} />
        ))}
        <span className="mx-1 text-gray-300 dark:text-gray-700">|</span>
        <FilterChip href={shopLink(null)} active={!shop} label="Both shops" />
        <FilterChip href={shopLink('mechanical')} active={shop === 'mechanical'} label="Mechanical" />
        <FilterChip href={shopLink('body')} active={shop === 'body'} label="Body" />
      </div>

      {referrals.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 py-10 text-center">
          No referrals here yet. When a towing company sends a customer, hit “New referral”.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800">
                <th className="px-4 py-3 font-medium">Customer</th>
                <th className="px-4 py-3 font-medium">Partner</th>
                <th className="px-4 py-3 font-medium">Shop</th>
                <th className="px-4 py-3 font-medium text-right">Invoice</th>
                <th className="px-4 py-3 font-medium text-right">Commission</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Received</th>
              </tr>
            </thead>
            <tbody>
              {referrals.map((r) => (
                <tr
                  key={r.id}
                  className="border-b border-gray-50 dark:border-gray-800/60 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/40"
                >
                  <td className="px-4 py-3">
                    <Link href={`/crm/referrals/${r.id}`} className="font-medium text-brand-blue dark:text-brand-blue-light hover:underline">
                      {r.customerName}
                    </Link>
                    {r.vehicle && <div className="text-xs text-gray-500">{r.vehicle}</div>}
                  </td>
                  <td className="px-4 py-3">{r.partner.name}</td>
                  <td className="px-4 py-3">{SHOP_LABEL[r.shopType]}</td>
                  <td className="px-4 py-3 text-right tabular-nums">
                    {formatCurrency(r.invoiceAmount) ?? '—'}
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums">
                    {formatCurrency(r.commissionAmount) ?? '—'}
                  </td>
                  <td className="px-4 py-3">
                    <ReferralStatusBadge status={r.status} />
                  </td>
                  <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                    {formatRelativeTime(r.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

function StatCard({ label, value, hint, href }) {
  return (
    <Link
      href={href}
      className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 hover:border-brand-blue transition-colors"
    >
      <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
      <div className="mt-1 font-display text-2xl font-bold">{value}</div>
      <div className="text-xs text-gray-400 dark:text-gray-500">{hint}</div>
    </Link>
  )
}

function FilterChip({ href, active, label }) {
  return (
    <Link
      href={href}
      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
        active
          ? 'bg-brand-blue text-white'
          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
      }`}
    >
      {label}
    </Link>
  )
}
