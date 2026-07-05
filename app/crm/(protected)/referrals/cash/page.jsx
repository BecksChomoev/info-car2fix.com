import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { requireCrmAuth, isAdminSession } from '@/lib/crm-auth'
import { formatCurrency, formatDateTime } from '@/lib/format'
import { SHOP_TYPES, SHOP_LABEL } from '@/lib/referral-constants'
import CashAdvanceForm from '@/components/crm/referrals/CashAdvanceForm'

export const metadata = { title: 'Referral Cash · CRM' }

// The reconciliation view: cash advanced TO each shop minus commissions the
// shop has paid OUT equals what should physically be in the drawer.
export default async function CashPage() {
  const session = await requireCrmAuth()
  const admin = isAdminSession(session)

  const [advances, paidReferrals] = await Promise.all([
    prisma.cashAdvance.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.referral.findMany({
      where: { status: 'paid' },
      include: { partner: { select: { name: true } } },
      orderBy: { paidAt: 'desc' },
    }),
  ])

  const floats = SHOP_TYPES.map(({ key }) => {
    const advanced = advances
      .filter((a) => a.shopType === key)
      .reduce((sum, a) => sum + a.amount, 0)
    const paidOut = paidReferrals
      .filter((r) => r.shopType === key)
      .reduce((sum, r) => sum + (r.commissionAmount ?? 0), 0)
    return { shopType: key, advanced, paidOut, onHand: advanced - paidOut }
  })

  // One ledger, newest first: advances in, payouts out.
  const ledger = [
    ...advances.map((a) => ({
      id: `adv-${a.id}`,
      date: a.createdAt,
      shopType: a.shopType,
      amount: a.amount,
      label: a.amount >= 0 ? 'Cash to shop' : 'Cash returned',
      detail: a.note,
    })),
    ...paidReferrals.map((r) => ({
      id: `pay-${r.id}`,
      date: r.paidAt ?? r.updatedAt,
      shopType: r.shopType,
      amount: -(r.commissionAmount ?? 0),
      label: `Payout — ${r.partner.name}`,
      detail: `${r.customerName}${r.paidBy ? ` · by ${r.paidBy}` : ''}`,
      href: `/crm/referrals/${r.id}`,
    })),
  ].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <div className="mb-5">
        <h1 className="font-display text-2xl font-bold">Referral cash</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Track the cash floats each shop uses to pay partners, and reconcile what should be in the
          drawer.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 mb-6">
        {floats.map((f) => (
          <div
            key={f.shopType}
            className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4"
          >
            <div className="font-semibold text-gray-900 dark:text-white">{SHOP_LABEL[f.shopType]}</div>
            <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
              <div>
                <div className="text-gray-500 dark:text-gray-400">Advanced</div>
                <div className="font-semibold tabular-nums">{formatCurrency(f.advanced)}</div>
              </div>
              <div>
                <div className="text-gray-500 dark:text-gray-400">Paid out</div>
                <div className="font-semibold tabular-nums">{formatCurrency(f.paidOut)}</div>
              </div>
              <div>
                <div className="text-gray-500 dark:text-gray-400">Should be on hand</div>
                <div
                  className={`font-semibold tabular-nums ${
                    f.onHand < 0 ? 'text-brand-red' : 'text-green-600 dark:text-green-400'
                  }`}
                >
                  {formatCurrency(f.onHand)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {admin ? (
        <div className="mb-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
          <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-4">
            Record cash given to a shop
          </h2>
          <CashAdvanceForm />
        </div>
      ) : (
        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          Only an admin can record cash advances.
        </p>
      )}

      <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-3">Ledger</h2>
      {ledger.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 py-6 text-center">
          No cash movements yet.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800">
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Shop</th>
                <th className="px-4 py-3 font-medium">What</th>
                <th className="px-4 py-3 font-medium text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {ledger.map((e) => (
                <tr
                  key={e.id}
                  className="border-b border-gray-50 dark:border-gray-800/60 last:border-0"
                >
                  <td className="px-4 py-3 whitespace-nowrap text-gray-500">
                    {formatDateTime(e.date)}
                  </td>
                  <td className="px-4 py-3">{SHOP_LABEL[e.shopType]}</td>
                  <td className="px-4 py-3">
                    {e.href ? (
                      <Link href={e.href} className="text-brand-blue dark:text-brand-blue-light hover:underline">
                        {e.label}
                      </Link>
                    ) : (
                      e.label
                    )}
                    {e.detail && <div className="text-xs text-gray-500">{e.detail}</div>}
                  </td>
                  <td
                    className={`px-4 py-3 text-right tabular-nums font-medium ${
                      e.amount < 0 ? 'text-brand-red' : 'text-green-600 dark:text-green-400'
                    }`}
                  >
                    {e.amount < 0 ? '−' : '+'}
                    {formatCurrency(Math.abs(e.amount))}
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
