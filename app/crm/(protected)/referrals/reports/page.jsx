import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { requireCrmAuth } from '@/lib/crm-auth'
import { formatCurrency } from '@/lib/format'
import { SHOP_LABEL } from '@/lib/referral-constants'
import { getWeekRange, buildWeeklyReport } from '@/lib/referral-report'
import ReportActions from '@/components/crm/referrals/ReportActions'

export const metadata = { title: 'Referral Reports · CRM' }

// The weekly commission report — the same numbers the Monday-morning Telegram
// message carries, browsable for any past week and printable for a paper trail.
export default async function ReportsPage({ searchParams }) {
  await requireCrmAuth()

  const sp = await searchParams
  const parsed = Number(sp?.week)
  // 0 = current week; negative = past weeks. Clamp so nobody can walk to year 3000.
  const weekOffset = Number.isInteger(parsed) && parsed <= 0 && parsed > -520 ? parsed : 0

  const range = getWeekRange(weekOffset)
  const report = await buildWeeklyReport(range)

  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
        <div>
          <h1 className="font-display text-2xl font-bold">Weekly referral report</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Commissions approved, cash paid out, and what's still owed.
          </p>
        </div>
        {/* keyed so a "Sent ✓" from one week doesn't linger after navigating */}
        <ReportActions key={weekOffset} weekOffset={weekOffset} />
      </div>

      <div className="flex items-center gap-2 mb-6 print:hidden">
        <Link
          href={`/crm/referrals/reports?week=${weekOffset - 1}`}
          className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
          aria-label="Previous week"
        >
          <ChevronLeft className="w-4 h-4" />
        </Link>
        <span className="font-medium text-gray-900 dark:text-white">
          {range.label}
          {weekOffset === 0 ? ' (current week)' : ''}
        </span>
        {weekOffset < 0 && (
          <Link
            href={`/crm/referrals/reports?week=${weekOffset + 1}`}
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
            aria-label="Next week"
          >
            <ChevronRight className="w-4 h-4" />
          </Link>
        )}
        {weekOffset !== 0 && (
          <Link href="/crm/referrals/reports" className="text-sm text-brand-blue hover:underline ml-1">
            This week
          </Link>
        )}
      </div>

      <div className="space-y-4">
        <Section title={`New referrals received — ${report.newCounts.total}`}>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Mechanical {report.newCounts.mechanical} · Body {report.newCounts.body}
          </p>
        </Section>

        <Section
          title={`Approved this week — ${formatCurrency(report.approved.commissionTotal)} commission`}
        >
          {report.approved.rows.length === 0 ? (
            <Empty>No invoices approved this week.</Empty>
          ) : (
            <PartnerTable
              rows={report.approved.rows}
              columns={[
                { label: 'Jobs', render: (r) => r.count },
                { label: 'Invoiced', render: (r) => formatCurrency(r.invoiceTotal) },
                { label: 'Commission', render: (r) => formatCurrency(r.commissionTotal) },
              ]}
              footer={[
                report.approved.count,
                formatCurrency(report.approved.invoiceTotal),
                formatCurrency(report.approved.commissionTotal),
              ]}
            />
          )}
        </Section>

        <Section title={`Paid out this week — ${formatCurrency(report.paid.commissionTotal)}`}>
          {report.paid.rows.length === 0 ? (
            <Empty>No cash handed out this week.</Empty>
          ) : (
            <PartnerTable
              rows={report.paid.rows}
              columns={[
                { label: 'Payouts', render: (r) => r.count },
                { label: 'Cash', render: (r) => formatCurrency(r.commissionTotal) },
              ]}
              footer={[report.paid.count, formatCurrency(report.paid.commissionTotal)]}
            />
          )}
        </Section>

        <Section
          title={`Owed to partners right now — ${formatCurrency(report.outstanding.commissionTotal)}`}
        >
          {report.outstanding.rows.length === 0 ? (
            <Empty>All approved commissions are paid — nothing outstanding. 🎉</Empty>
          ) : (
            <PartnerTable
              rows={report.outstanding.rows}
              columns={[
                { label: 'Jobs', render: (r) => r.count },
                { label: 'Owed', render: (r) => formatCurrency(r.commissionTotal) },
              ]}
              footer={[report.outstanding.count, formatCurrency(report.outstanding.commissionTotal)]}
            />
          )}
        </Section>

        <Section title="Cash float check">
          <div className="grid sm:grid-cols-2 gap-3">
            {report.floats.map((f) => (
              <div key={f.shopType} className="rounded-lg bg-gray-50 dark:bg-gray-800/60 p-3 text-sm">
                <div className="font-semibold text-gray-900 dark:text-white mb-1">
                  {SHOP_LABEL[f.shopType]}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Advanced {formatCurrency(f.advanced)} · paid out {formatCurrency(f.paidOut)} ·
                  should be on hand{' '}
                  <span className={`font-semibold ${f.onHand < 0 ? 'text-brand-red' : ''}`}>
                    {formatCurrency(f.onHand)}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-gray-400 dark:text-gray-500 print:hidden">
            Counts the drawer differently? Record corrections on the{' '}
            <Link href="/crm/referrals/cash" className="text-brand-blue hover:underline">
              Cash page
            </Link>
            .
          </p>
        </Section>
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <section className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow-sm print:shadow-none print:border-gray-300">
      <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-3">{title}</h2>
      {children}
    </section>
  )
}

function Empty({ children }) {
  return <p className="text-sm text-gray-500 dark:text-gray-400">{children}</p>
}

function PartnerTable({ rows, columns, footer }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800">
            <th className="py-2 pr-4 font-medium">Partner</th>
            {columns.map((c) => (
              <th key={c.label} className="py-2 pl-4 font-medium text-right">
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.partnerId} className="border-b border-gray-50 dark:border-gray-800/60">
              <td className="py-2 pr-4">{r.partnerName}</td>
              {columns.map((c) => (
                <td key={c.label} className="py-2 pl-4 text-right tabular-nums">
                  {c.render(r)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="font-semibold text-gray-900 dark:text-white">
            <td className="py-2 pr-4">Total</td>
            {footer.map((v, i) => (
              <td key={i} className="py-2 pl-4 text-right tabular-nums">
                {v}
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
