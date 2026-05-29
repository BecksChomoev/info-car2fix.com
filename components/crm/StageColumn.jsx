import LeadCard from './LeadCard'
import { formatCurrency } from '@/lib/format'

// Per-stage accent (full class strings so Tailwind keeps them in the build).
const STAGE_ACCENT = {
  new: 'border-t-blue-500',
  contacted: 'border-t-cyan-500',
  estimate_sent: 'border-t-amber-500',
  scheduled: 'border-t-violet-500',
  in_service: 'border-t-orange-500',
  completed: 'border-t-green-500',
  lost: 'border-t-gray-400',
}

export default function StageColumn({ stage, leads }) {
  const total = leads.reduce((sum, l) => sum + (l.value || 0), 0)

  return (
    <div className="w-72 shrink-0">
      <div
        className={`rounded-t-xl border-t-4 ${
          STAGE_ACCENT[stage.key] || 'border-t-gray-400'
        } bg-white dark:bg-gray-900 border-x border-b border-gray-200 dark:border-gray-800 px-3 py-2`}
      >
        <div className="flex items-center justify-between">
          <span className="font-display font-semibold text-gray-900 dark:text-white">
            {stage.label}
          </span>
          <span className="text-xs font-medium text-gray-500 bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5">
            {leads.length}
          </span>
        </div>
        {total > 0 && (
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{formatCurrency(total)}</div>
        )}
      </div>

      <div className="space-y-3 mt-3">
        {leads.map((lead) => (
          <LeadCard key={lead.id} lead={lead} />
        ))}
        {leads.length === 0 && (
          <p className="text-sm text-gray-400 px-1 py-6 text-center">No leads</p>
        )}
      </div>
    </div>
  )
}
