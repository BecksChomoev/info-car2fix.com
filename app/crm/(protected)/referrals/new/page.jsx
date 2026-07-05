import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { prisma } from '@/lib/prisma'
import { requireCrmAuth } from '@/lib/crm-auth'
import ReferralForm from '@/components/crm/referrals/ReferralForm'

export const metadata = { title: 'New Referral · CRM' }

export default async function NewReferralPage() {
  await requireCrmAuth()

  const partners = await prisma.referralPartner.findMany({
    where: { active: true },
    orderBy: { name: 'asc' },
  })

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6">
      <Link
        href="/crm/referrals"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-blue dark:hover:text-brand-blue-light"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to referrals
      </Link>

      <div className="mt-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
        <h1 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
          Record a referral
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 mb-6">
          Log it the moment the tow truck drops the car — the invoice gets attached later, when the
          job is done.
        </p>

        {partners.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">
            No active partners yet.{' '}
            <Link href="/crm/referrals/partners" className="text-brand-blue hover:underline">
              Add your first towing company
            </Link>{' '}
            first, then come back here.
          </p>
        ) : (
          <ReferralForm partners={partners} />
        )}
      </div>
    </div>
  )
}
