'use client'

import { useActionState } from 'react'
import { Loader2 } from 'lucide-react'
import { createReferral } from '@/app/crm/(protected)/referrals/actions'
import { SHOP_TYPES, describeCommissionTerms } from '@/lib/referral-constants'

const inputCls =
  'w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-brand-blue outline-none'

export default function ReferralForm({ partners }) {
  const [state, formAction, pending] = useActionState(createReferral, {})

  return (
    <form action={formAction} className="space-y-3">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Referred by *
        </label>
        <select name="partnerId" required defaultValue="" className={inputCls}>
          <option value="" disabled>
            Pick the towing company / partner…
          </option>
          {partners.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} — {describeCommissionTerms(p)}
            </option>
          ))}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Customer name *
          </label>
          <input name="customerName" required placeholder="John Smith" className={inputCls} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Customer phone
          </label>
          <input name="customerPhone" type="tel" placeholder="(908) 555-0123" className={inputCls} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Vehicle</label>
          <input name="vehicle" placeholder="2019 Honda Accord" className={inputCls} />
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
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Job description
        </label>
        <textarea
          name="jobDescription"
          rows={2}
          placeholder="Rear-end collision, bumper + trunk"
          className={inputCls}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Notes</label>
        <textarea name="notes" rows={2} className={inputCls} />
      </div>

      {state?.error && <p className="text-sm text-brand-red">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-brand-blue hover:bg-brand-blue-dark transition-colors disabled:opacity-60"
      >
        {pending && <Loader2 className="w-4 h-4 animate-spin" />}
        Record referral
      </button>
    </form>
  )
}
