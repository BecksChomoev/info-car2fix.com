'use client'

import { useActionState } from 'react'
import { HandCoins, Loader2 } from 'lucide-react'
import { markReferralPaid } from '@/app/crm/(protected)/referrals/actions'

// Records the cash handoff to the partner. Whoever physically hands over the
// money puts their own name here — that's the audit trail reconciliation uses.
export default function MarkPaidForm({ referralId }) {
  const [state, formAction, pending] = useActionState(markReferralPaid.bind(null, referralId), {})

  return (
    <form action={formAction} className="flex flex-col sm:flex-row sm:items-end gap-3">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Cash handed over by (your name)
        </label>
        <input
          name="paidBy"
          required
          placeholder="Ricardo"
          className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-brand-blue outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-brand-blue hover:bg-brand-blue-dark transition-colors disabled:opacity-60"
      >
        {pending ? <Loader2 className="w-4 h-4 animate-spin" /> : <HandCoins className="w-4 h-4" />}
        Mark paid in cash
      </button>
      {state?.error && <p className="text-sm text-brand-red sm:self-center">{state.error}</p>}
    </form>
  )
}
