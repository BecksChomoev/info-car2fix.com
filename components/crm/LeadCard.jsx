import Link from 'next/link'
import ShopBadge from './ShopBadge'
import StageMenu from './StageMenu'
import { formatCurrency, formatRelativeTime } from '@/lib/format'

export default function LeadCard({ lead }) {
  return (
    <div className="rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-3 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <Link
          href={`/crm/leads/${lead.id}`}
          className="font-display font-semibold text-gray-900 dark:text-white hover:text-brand-blue dark:hover:text-brand-blue-light"
        >
          {lead.name}
        </Link>
        <ShopBadge shopType={lead.shopType} />
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
        <a href={`tel:${lead.phone}`} className="hover:underline">
          {lead.phone}
        </a>
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 truncate">{lead.carModel || '—'}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{lead.issue || '—'}</p>

      <div className="flex items-center justify-between mt-2">
        {lead.value != null ? (
          <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
            {formatCurrency(lead.value)}
          </span>
        ) : (
          <span />
        )}
        <span className="text-xs text-gray-400">{formatRelativeTime(lead.createdAt)}</span>
      </div>

      <div className="mt-2">
        <StageMenu leadId={lead.id} stage={lead.stage} />
      </div>
    </div>
  )
}
