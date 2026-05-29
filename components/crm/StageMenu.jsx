'use client'

import { useTransition } from 'react'
import { STAGES } from '@/lib/stages'
import { updateLeadStage } from '@/app/crm/actions'

// Inline stage changer. v1 moves leads via this dropdown; drag-and-drop is a
// planned v1.1 enhancement. On change it calls the server action, which updates
// the DB and revalidates the board.
export default function StageMenu({ leadId, stage }) {
  const [pending, startTransition] = useTransition()

  return (
    <select
      aria-label="Lead stage"
      value={stage}
      disabled={pending}
      onChange={(e) => {
        const next = e.target.value
        startTransition(() => updateLeadStage(leadId, next))
      }}
      className="w-full text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-2 py-1.5 focus:border-brand-blue focus:outline-none disabled:opacity-60"
    >
      {STAGES.map((s) => (
        <option key={s.key} value={s.key}>
          {s.label}
        </option>
      ))}
    </select>
  )
}
