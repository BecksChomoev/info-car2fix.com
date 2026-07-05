import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { requireCrmAuth } from '@/lib/crm-auth'
import { formatCurrency } from '@/lib/format'
import { PARTNER_TYPES, describeCommissionTerms } from '@/lib/referral-constants'
import PartnerForm from '@/components/crm/referrals/PartnerForm'

export const metadata = { title: 'Referral Partners · CRM' }

export default async function PartnersPage() {
  await requireCrmAuth()

  const [partners, statusSums] = await Promise.all([
    prisma.referralPartner.findMany({
      orderBy: [{ active: 'desc' }, { name: 'asc' }],
      include: { _count: { select: { referrals: true } } },
    }),
    prisma.referral.groupBy({
      by: ['partnerId', 'status'],
      _sum: { commissionAmount: true },
      _count: true,
    }),
  ])

  const statFor = (partnerId) => {
    const rows = statusSums.filter((r) => r.partnerId === partnerId)
    const owed = rows.find((r) => r.status === 'approved')?._sum.commissionAmount ?? 0
    const paid = rows.find((r) => r.status === 'paid')?._sum.commissionAmount ?? 0
    return { owed, paid }
  }

  const typeLabel = Object.fromEntries(PARTNER_TYPES.map((t) => [t.key, t.label]))

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <div className="mb-5">
        <h1 className="font-display text-2xl font-bold">Referral partners</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          The towing companies (and others) who send us customers, and what we pay them.
        </p>
      </div>

      <details className="mb-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
        <summary className="cursor-pointer px-6 py-4 font-semibold text-gray-900 dark:text-white">
          + Add a partner
        </summary>
        <div className="px-6 pb-6">
          <PartnerForm />
        </div>
      </details>

      {partners.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 py-10 text-center">
          No partners yet — add the towing companies you work with above.
        </p>
      ) : (
        <div className="grid gap-3">
          {partners.map((p) => {
            const { owed, paid } = statFor(p.id)
            return (
              <Link
                key={p.id}
                href={`/crm/referrals/partners/${p.id}`}
                className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 hover:border-brand-blue transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900 dark:text-white">{p.name}</span>
                    <span className="text-xs text-gray-500 rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-0.5">
                      {typeLabel[p.type] ?? p.type}
                    </span>
                    {!p.active && (
                      <span className="text-xs font-semibold text-gray-500 rounded-full border border-gray-300 dark:border-gray-700 px-2 py-0.5">
                        Inactive
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{describeCommissionTerms(p)}</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <span>
                    {p._count.referrals} {p._count.referrals === 1 ? 'referral' : 'referrals'}
                  </span>
                  <span>
                    Owed: <span className="font-semibold tabular-nums">{formatCurrency(owed)}</span>
                  </span>
                  <span>
                    Paid to date:{' '}
                    <span className="font-semibold tabular-nums">{formatCurrency(paid)}</span>
                  </span>
                  {p.contactName && <span>{p.contactName}</span>}
                  {p.phone && <span>{p.phone}</span>}
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
