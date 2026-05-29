import { redirect } from 'next/navigation'
import { getSession } from '@/lib/crm-auth'
import LoginForm from '@/components/crm/LoginForm'

export const metadata = {
  title: 'CRM Login',
  robots: { index: false, follow: false },
}

export default async function CrmLoginPage() {
  // Already signed in → go straight to the board.
  if (await getSession()) redirect('/crm')

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 p-4">
      <LoginForm />
    </div>
  )
}
