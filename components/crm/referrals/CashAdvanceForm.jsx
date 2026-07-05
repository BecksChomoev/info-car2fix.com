'use client'

import { useActionState, useEffect, useRef } from 'react'
import { Loader2 } from 'lucide-react'
import { addCashAdvance } from '@/app/crm/(protected)/referrals/actions'
import { SHOP_TYPES } from '@/lib/referral-constants'

const inputCls =
  'w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-brand-blue outline-none'

export default function CashAdvanceForm() {
  const [state, formAction, pending] = useActionState(addCashAdvance, {})
  const formRef = useRef(null)

  useEffect(() => {
    if (state?.success) formRef.current?.reset()
  }, [state])

  return (
    <form ref={formRef} action={formAction} className="flex flex-col sm:flex-row sm:items-end gap-3">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Shop</label>
        <select name="shopType" className={inputCls}>
          {SHOP_TYPES.map((s) => (
            <option key={s.key} value={s.key}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Amount ($, negative = returned)
        </label>
        <input name="amount" type="number" step="1" required placeholder="500" className={inputCls} />
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Note</label>
        <input name="note" placeholder="Weekly float top-up" className={inputCls} />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-brand-blue hover:bg-brand-blue-dark transition-colors disabled:opacity-60"
      >
        {pending && <Loader2 className="w-4 h-4 animate-spin" />}
        Record cash
      </button>
      {state?.error && <p className="text-sm text-brand-red sm:self-center">{state.error}</p>}
    </form>
  )
}
