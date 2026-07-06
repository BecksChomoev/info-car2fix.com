'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const TABS = [
  { href: '/crm', label: 'Leads' },
  { href: '/crm/calls', label: 'Calls' },
  { href: '/crm/referrals', label: 'Referrals' },
  { href: '/crm/referrals/partners', label: 'Partners' },
  { href: '/crm/referrals/cash', label: 'Cash' },
  { href: '/crm/referrals/reports', label: 'Reports' },
]

export default function CrmNav() {
  const pathname = usePathname()
  // Longest matching prefix wins so /crm/referrals/partners lights up
  // "Partners", not "Referrals". Lead detail pages still count as "Leads".
  const active = TABS.reduce((best, tab) => {
    const matches = pathname === tab.href || pathname.startsWith(`${tab.href}/`)
    if (matches && tab.href.length > (best?.href.length ?? 0)) return tab
    return best
  }, null)

  return (
    <nav className="flex gap-1 px-4 sm:px-6 overflow-x-auto border-t border-gray-100 dark:border-gray-800">
      {TABS.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`whitespace-nowrap px-3 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${
            active?.href === tab.href
              ? 'border-brand-red text-gray-900 dark:text-white'
              : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-gray-200'
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  )
}
