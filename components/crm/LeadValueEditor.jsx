'use client'

import { useState, useTransition } from 'react'
import { updateLeadValue } from '@/app/crm/actions'

export default function LeadValueEditor({ leadId, value }) {
  const [val, setVal] = useState(value ?? '')
  const [pending, startTransition] = useTransition()
  const [saved, setSaved] = useState(false)

  const save = () => {
    startTransition(async () => {
      await updateLeadValue(leadId, val === '' ? '' : Number(val))
      setSaved(true)
      setTimeout(() => setSaved(false), 1500)
    })
  }

  return (
    <div className="flex items-center gap-2">
      <div className="relative flex-1">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
        <input
          type="number"
          min="0"
          step="1"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="2500"
          className="w-full pl-7 pr-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-brand-blue outline-none"
        />
      </div>
      <button
        type="button"
        onClick={save}
        disabled={pending}
        className="px-3 py-2 rounded-lg text-sm font-medium text-white bg-brand-blue hover:bg-brand-blue-dark transition-colors disabled:opacity-60"
      >
        {pending ? 'Saving…' : saved ? 'Saved ✓' : 'Save'}
      </button>
    </div>
  )
}
