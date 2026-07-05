import Link from 'next/link'
import { LogOut } from 'lucide-react'
import { requireCrmAuth } from '@/lib/crm-auth'
import { logoutAction } from '@/app/crm/actions'
import CrmNav from '@/components/crm/CrmNav'

export const metadata = {
  title: 'CRM',
  // Keep the whole internal CRM out of search indexes (it holds customer PII).
  robots: { index: false, follow: false },
}

export default async function CrmProtectedLayout({ children }) {
  // Authorization boundary — enforced here AND in every page/action, not just proxy.js.
  await requireCrmAuth()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between px-4 sm:px-6 h-14">
          <Link href="/crm" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="text-gray-900 dark:text-white">Car2Fix</span>
            <span className="rounded-md bg-brand-red px-1.5 py-0.5 text-xs font-semibold text-white">
              CRM
            </span>
          </Link>
          <form action={logoutAction}>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-red transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Log out
            </button>
          </form>
        </div>
        <CrmNav />
      </header>
      {children}
    </div>
  )
}
