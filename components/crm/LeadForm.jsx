'use client'

import { useActionState } from 'react'
import { Loader2 } from 'lucide-react'
import { createLead } from '@/app/crm/actions'
import { SHOP_TYPES } from '@/lib/referral-constants'
import { STAGES } from '@/lib/stages'

const inputCls =
  'w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-brand-blue outline-none'

export default function LeadForm() {
  const [state, formAction, pending] = useActionState(createLead, {})

  return (
    <form action={formAction} className="space-y-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Customer name *
          </label>
          <input name="name" required placeholder="John Smith" className={inputCls} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Phone *
          </label>
          <input name="phone" type="tel" required placeholder="(908) 555-0123" className={inputCls} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Vehicle
          </label>
          <input name="carModel" placeholder="2019 Honda Accord" className={inputCls} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Shop *</label>
          <select name="shopType" required className={inputCls}>
            {SHOP_TYPES.map((s) => (
              <option key={s.key} value={s.key}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Stage</label>
          <select name="stage" defaultValue="new" className={inputCls}>
            {STAGES.map((s) => (
              <option key={s.key} value={s.key}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Estimated value ($)
          </label>
          <input
            name="value"
            type="number"
            min="0"
            step="1"
            inputMode="numeric"
            placeholder="1500"
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Issue</label>
        <textarea
          name="issue"
          rows={3}
          placeholder="Brake noise, check-engine light, rear-end damage…"
          className={inputCls}
        />
      </div>

      {state?.error && <p className="text-sm text-brand-red">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-brand-blue hover:bg-brand-blue-dark transition-colors disabled:opacity-60"
      >
        {pending && <Loader2 className="w-4 h-4 animate-spin" />}
        Add lead
      </button>
    </form>
  )
}
