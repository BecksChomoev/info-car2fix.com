import { REFERRAL_STATUS_LABEL } from '@/lib/referral-constants'

const STYLES = {
  received: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  invoice_uploaded: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
  approved: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
  rejected: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
  paid: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
}

export default function ReferralStatusBadge({ status }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap ${
        STYLES[status] ?? STYLES.received
      }`}
    >
      {REFERRAL_STATUS_LABEL[status] ?? status}
    </span>
  )
}
