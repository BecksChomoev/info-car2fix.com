'use client'

import { useState, useTransition } from 'react'
import { Undo2 } from 'lucide-react'
import { undoReferralStep } from '@/app/crm/(protected)/referrals/actions'

// Admin-only: steps a referral back exactly one status. `fromStatus` pins the
// transition to what the label promised, so a stale tab can't undo a different
// step than the user thinks they're undoing.
export default function UndoStepButton({ referralId, fromStatus, label }) {
  const [pending, startTransition] = useTransition()
  const [error, setError] = useState(null)

  return (
    <div>
      <button
        type="button"
        disabled={pending}
        onClick={() => {
          if (!window.confirm(`${label}?`)) return
          setError(null)
          startTransition(async () => {
            const result = await undoReferralStep(referralId, fromStatus)
            if (result?.error) setError(result.error)
          })
        }}
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-red transition-colors disabled:opacity-60"
      >
        <Undo2 className="w-4 h-4" />
        {label}
      </button>
      {error && <p className="mt-1 text-sm text-brand-red">{error}</p>}
    </div>
  )
}
