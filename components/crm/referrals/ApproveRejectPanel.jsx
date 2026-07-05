'use client'

import { useActionState } from 'react'
import { Check, Loader2, X } from 'lucide-react'
import { approveReferral, rejectReferral } from '@/app/crm/(protected)/referrals/actions'

const inputCls =
  'w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-brand-blue outline-none'

// Admin-only review controls (the page only renders this for admin sessions;
// the server actions re-check). Approving sets the commission that will be paid
// in cash — prefilled from the partner's terms, editable before confirming.
// invoiceAmount rides along as a hidden field so the approval only lands if the
// invoice is still the one this admin reviewed.
export default function ApproveRejectPanel({
  referralId,
  invoiceAmount,
  suggestedCommission,
  termsDescription,
}) {
  const [approveState, approveAction, approving] = useActionState(
    approveReferral.bind(null, referralId),
    {}
  )
  const [rejectState, rejectAction, rejecting] = useActionState(
    rejectReferral.bind(null, referralId),
    {}
  )

  return (
    <div className="space-y-4">
      <form action={approveAction} className="flex flex-col sm:flex-row sm:items-end gap-3">
        <input type="hidden" name="expectedInvoiceAmount" value={invoiceAmount ?? ''} />
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Commission ($) — partner terms: {termsDescription}
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
            <input
              name="commissionAmount"
              type="number"
              min="0"
              step="1"
              required
              defaultValue={suggestedCommission ?? ''}
              className={`${inputCls} pl-7`}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={approving}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors disabled:opacity-60"
        >
          {approving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
          Approve
        </button>
      </form>
      {approveState?.error && <p className="text-sm text-brand-red">{approveState.error}</p>}

      <details className="group">
        <summary className="cursor-pointer text-sm text-gray-500 hover:text-brand-red">
          Reject this invoice…
        </summary>
        <form action={rejectAction} className="mt-3 flex flex-col sm:flex-row sm:items-end gap-3">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Reason (the shop sees this)
            </label>
            <input
              name="reason"
              required
              placeholder="Amount doesn't match the invoice photo"
              className={inputCls}
            />
          </div>
          <button
            type="submit"
            disabled={rejecting}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-brand-red hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {rejecting ? <Loader2 className="w-4 h-4 animate-spin" /> : <X className="w-4 h-4" />}
            Reject
          </button>
        </form>
        {rejectState?.error && <p className="mt-2 text-sm text-brand-red">{rejectState.error}</p>}
      </details>
    </div>
  )
}
