import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { prisma } from '@/lib/prisma'
import { requireCrmAuth } from '@/lib/crm-auth'
import { formatCurrency, formatRelativeTime } from '@/lib/format'
import { SHOP_LABEL } from '@/lib/referral-constants'
import PartnerForm from '@/components/crm/referrals/PartnerForm'
import ReferralStatusBadge from '@/components/crm/referrals/ReferralStatusBadge'

export const metadata = { title: 'Partner · CRM' }

export default async function PartnerDetailPage({ params }) {
  await requireCrmAuth()

  const { id } = await params
  const partner = await prisma.referralPartner.findUnique({
    where: { id },
    include: { referrals: { orderBy: { createdAt: 'desc' } } },
  })
  if (!partner) notFound()

  const totals = partner.referrals.reduce(
    (acc, r) => {
      acc.count += 1
      // Revenue counts only verified invoices — a rejected or not-yet-reviewed
      // amount must not inflate the partner's numbers.
      if (r.status === 'approved' || r.status === 'paid') acc.revenue += r.invoiceAmount ?? 0
      if (r.status === 'approved') acc.owed += r.commissionAmount ?? 0
      if (r.status === 'paid') acc.paid += r.commissionAmount ?? 0
      return acc
    },
    { count: 0, revenue: 0, owed: 0, paid: 0 }
  )

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 space-y-4">
      <Link
        href="/crm/referrals/partners"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-blue dark:hover:text-brand-blue-light"
      >
        <ArrowLeft className="w-4 h-4" />
        All partners
      </Link>

      <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
        <h1 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {partner.name}
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <Stat label="Referrals" value={totals.count} />
          <Stat label="Revenue brought in" value={formatCurrency(totals.revenue)} />
          <Stat label="Owed now" value={formatCurrency(totals.owed)} />
          <Stat label="Paid to date" value={formatCurrency(totals.paid)} />
        </div>

        <PartnerForm partner={partner} />
      </div>

      <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
        <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-4">
          Referral history
        </h2>
        {partner.referrals.length === 0 ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">Nothing referred yet.</p>
        ) : (
          <ul className="divide-y divide-gray-100 dark:divide-gray-800">
            {partner.referrals.map((r) => (
              <li key={r.id} className="py-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <Link
                    href={`/crm/referrals/${r.id}`}
                    className="font-medium text-brand-blue dark:text-brand-blue-light hover:underline"
                  >
                    {r.customerName}
                  </Link>
                  <div className="text-xs text-gray-500">
                    {SHOP_LABEL[r.shopType]} · {formatRelativeTime(r.createdAt)}
                    {r.vehicle ? ` · ${r.vehicle}` : ''}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm tabular-nums text-gray-600 dark:text-gray-300">
                    {r.commissionAmount != null
                      ? formatCurrency(r.commissionAmount)
                      : formatCurrency(r.invoiceAmount) ?? ''}
                  </span>
                  <ReferralStatusBadge status={r.status} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg bg-gray-50 dark:bg-gray-800/60 p-3">
      <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
      <div className="font-display text-lg font-bold text-gray-900 dark:text-white">{value}</div>
    </div>
  )
}
