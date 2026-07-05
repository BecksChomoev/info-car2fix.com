'use client'

import { useActionState, useEffect, useRef } from 'react'
import { Loader2 } from 'lucide-react'
import { createPartner, updatePartner } from '@/app/crm/(protected)/referrals/actions'
import { PARTNER_TYPES, COMMISSION_TYPES } from '@/lib/referral-constants'

const inputCls =
  'w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-brand-blue outline-none'

// Create AND edit form: pass `partner` to edit, omit it to create.
export default function PartnerForm({ partner }) {
  const action = partner ? updatePartner.bind(null, partner.id) : createPartner
  const [state, formAction, pending] = useActionState(action, {})
  const formRef = useRef(null)

  // After a successful create, clear the fields for the next partner.
  useEffect(() => {
    if (!partner && state?.success) formRef.current?.reset()
  }, [state, partner])

  return (
    <form ref={formRef} action={formAction} className="space-y-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Company name *
          </label>
          <input name="name" required defaultValue={partner?.name} placeholder="Route 1 Towing" className={inputCls} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Contact person
          </label>
          <input name="contactName" defaultValue={partner?.contactName ?? ''} placeholder="Mike" className={inputCls} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
          <input name="phone" type="tel" defaultValue={partner?.phone ?? ''} placeholder="(908) 555-0142" className={inputCls} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Type</label>
          <select name="type" defaultValue={partner?.type ?? 'towing'} className={inputCls}>
            {PARTNER_TYPES.map((t) => (
              <option key={t.key} value={t.key}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Commission type
          </label>
          <select name="commissionType" defaultValue={partner?.commissionType ?? 'percent'} className={inputCls}>
            {COMMISSION_TYPES.map((t) => (
              <option key={t.key} value={t.key}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Rate (% or $) *
          </label>
          <input
            name="commissionRate"
            type="number"
            min="0"
            step="1"
            required
            defaultValue={partner?.commissionRate ?? 10}
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Notes</label>
        <textarea name="notes" rows={2} defaultValue={partner?.notes ?? ''} className={inputCls} />
      </div>

      {partner && (
        <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <input type="checkbox" name="active" defaultChecked={partner.active} className="rounded" />
          Active (send us referrals)
        </label>
      )}

      {state?.error && <p className="text-sm text-brand-red">{state.error}</p>}
      {state?.success && partner && <p className="text-sm text-green-600">Saved ✓</p>}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-brand-blue hover:bg-brand-blue-dark transition-colors disabled:opacity-60"
      >
        {pending && <Loader2 className="w-4 h-4 animate-spin" />}
        {partner ? 'Save changes' : 'Add partner'}
      </button>
    </form>
  )
}
