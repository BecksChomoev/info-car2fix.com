import Link from 'next/link'

// Server-rendered filter (no client state): each option is a link that sets the
// ?shop= query param, which the board page reads to filter the Prisma query.
const OPTIONS = [
  { key: null, label: 'All shops', href: '/crm' },
  { key: 'mechanical', label: 'Mechanical', href: '/crm?shop=mechanical' },
  { key: 'body', label: 'Body', href: '/crm?shop=body' },
]

export default function ShopFilter({ active }) {
  return (
    <div className="inline-flex rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-0.5">
      {OPTIONS.map((o) => {
        const isActive = active === o.key
        return (
          <Link
            key={o.label}
            href={o.href}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              isActive
                ? 'bg-brand-blue text-white'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            {o.label}
          </Link>
        )
      })}
    </div>
  )
}
