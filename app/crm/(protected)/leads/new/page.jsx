import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { requireCrmAuth } from '@/lib/crm-auth'
import LeadForm from '@/components/crm/LeadForm'

export const metadata = { title: 'Add Lead · CRM' }

export default async function NewLeadPage() {
  await requireCrmAuth()

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6">
      <Link
        href="/crm"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-blue dark:hover:text-brand-blue-light"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to board
      </Link>

      <div className="mt-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
        <h1 className="font-display text-2xl font-bold text-gray-900 dark:text-white">Add a lead</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 mb-6">
          Log a walk-in or phone-in customer by hand — it lands on the board just like a website
          enquiry.
        </p>

        <LeadForm />
      </div>
    </div>
  )
}
