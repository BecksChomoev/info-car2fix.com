import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, FileText } from 'lucide-react'
import { prisma } from '@/lib/prisma'
import { requireCrmAuth, isAdminSession } from '@/lib/crm-auth'
import { formatCurrency, formatDateTime } from '@/lib/format'
import { SHOP_LABEL, computeCommission, describeCommissionTerms } from '@/lib/referral-constants'
import ReferralStatusBadge from '@/components/crm/referrals/ReferralStatusBadge'
import InvoiceUploadForm from '@/components/crm/referrals/InvoiceUploadForm'
import ApproveRejectPanel from '@/components/crm/referrals/ApproveRejectPanel'
import MarkPaidForm from '@/components/crm/referrals/MarkPaidForm'
import UndoStepButton from '@/components/crm/referrals/UndoStepButton'

export const metadata = { title: 'Referral · CRM' }

export default async function ReferralDetailPage({ params }) {
  const session = await requireCrmAuth()
  const admin = isAdminSession(session)

  const { id } = await params
  const referral = await prisma.referral.findUnique({
    where: { id },
    include: { partner: true },
  })
  if (!referral) notFound()

  const canEditInvoice = ['received', 'invoice_uploaded', 'rejected'].includes(referral.status)

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 space-y-4">
      <Link
        href="/crm/referrals"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-blue dark:hover:text-brand-blue-light"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to referrals
      </Link>

      {/* Who / what */}
      <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <h1 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
            {referral.customerName}
          </h1>
          <ReferralStatusBadge status={referral.status} />
        </div>

        <dl className="mt-5 space-y-3">
          <Field label="Referred by">
            <Link
              href={`/crm/referrals/partners/${referral.partnerId}`}
              className="text-brand-blue dark:text-brand-blue-light hover:underline"
            >
              {referral.partner.name}
            </Link>{' '}
            <span className="text-sm text-gray-500">({describeCommissionTerms(referral.partner)})</span>
          </Field>
          {referral.customerPhone && (
            <Field label="Phone">
              <a href={`tel:${referral.customerPhone}`} className="text-brand-blue dark:text-brand-blue-light hover:underline">
                {referral.customerPhone}
              </a>
            </Field>
          )}
          {referral.vehicle && <Field label="Vehicle">{referral.vehicle}</Field>}
          <Field label="Shop">{SHOP_LABEL[referral.shopType]}</Field>
          {referral.jobDescription && (
            <Field label="Job">
              <span className="whitespace-pre-wrap">{referral.jobDescription}</span>
            </Field>
          )}
          {referral.notes && (
            <Field label="Notes">
              <span className="whitespace-pre-wrap">{referral.notes}</span>
            </Field>
          )}
          <Field label="Received">{formatDateTime(referral.createdAt)}</Field>
        </dl>
      </div>

      {/* Invoice */}
      <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
        <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-1">Invoice</h2>

        {referral.status === 'rejected' && (
          <div className="mb-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 px-4 py-3 text-sm text-red-800 dark:text-red-300">
            Rejected: {referral.rejectedReason} — fix it and submit again below.
          </div>
        )}

        {referral.invoiceNumber ? (
          <dl className="space-y-3 mb-4">
            <Field label="Invoice #">{referral.invoiceNumber}</Field>
            <Field label="Total">{formatCurrency(referral.invoiceAmount)}</Field>
            {referral.invoiceUploadedAt && (
              <Field label="Submitted">{formatDateTime(referral.invoiceUploadedAt)}</Field>
            )}
            <Field label="File">
              {referral.invoiceUrl ? (
                <a
                  href={`/api/crm/referrals/${referral.id}/invoice`}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 text-brand-blue dark:text-brand-blue-light hover:underline"
                >
                  <FileText className="w-4 h-4" />
                  View invoice file
                </a>
              ) : (
                <span className="text-gray-400">no file attached</span>
              )}
            </Field>
          </dl>
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            When the job is finished, the shop submits the final invoice here so the commission can
            be reviewed and approved.
          </p>
        )}

        {canEditInvoice && (
          <div className={referral.invoiceNumber ? 'border-t border-gray-100 dark:border-gray-800 pt-4' : ''}>
            {referral.invoiceNumber && (
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Replace / correct invoice
              </p>
            )}
            <InvoiceUploadForm
              referralId={referral.id}
              existing={{ invoiceNumber: referral.invoiceNumber, invoiceAmount: referral.invoiceAmount }}
            />
          </div>
        )}
      </div>

      {/* Review & payout */}
      {referral.status === 'invoice_uploaded' && (
        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
          <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-4">
            Review &amp; approve
          </h2>
          {admin ? (
            <ApproveRejectPanel
              referralId={referral.id}
              invoiceAmount={referral.invoiceAmount}
              suggestedCommission={computeCommission(referral.partner, referral.invoiceAmount)}
              termsDescription={describeCommissionTerms(referral.partner)}
            />
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Waiting for an admin to check this invoice and approve the commission.
            </p>
          )}
        </div>
      )}

      {referral.status === 'approved' && (
        <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow-sm space-y-4">
          <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white">
            Pay the partner
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Approved {referral.approvedAt ? formatDateTime(referral.approvedAt) : ''} —{' '}
            <span className="font-semibold">{formatCurrency(referral.commissionAmount)}</span> cash
            owed to {referral.partner.name}.
          </p>
          <MarkPaidForm referralId={referral.id} />
          {admin && <UndoStepButton referralId={referral.id} fromStatus="approved" label="Undo approval" />}
        </div>
      )}

      {referral.status === 'paid' && (
        <div className="rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 space-y-2">
          <h2 className="font-display text-lg font-bold text-green-900 dark:text-green-200">
            Paid — all settled
          </h2>
          <p className="text-sm text-green-800 dark:text-green-300">
            {formatCurrency(referral.commissionAmount)} handed to {referral.partner.name}
            {referral.paidBy ? ` by ${referral.paidBy}` : ''}
            {referral.paidAt ? ` on ${formatDateTime(referral.paidAt)}` : ''}.
          </p>
          {admin && <UndoStepButton referralId={referral.id} fromStatus="paid" label="Undo payment" />}
        </div>
      )}
    </div>
  )
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-3">
      <dt className="w-28 shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400">{label}</dt>
      <dd className="text-gray-800 dark:text-gray-200">{children}</dd>
    </div>
  )
}
