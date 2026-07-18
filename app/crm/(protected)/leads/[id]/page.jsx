import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { prisma } from '@/lib/prisma'
import { requireCrmAuth } from '@/lib/crm-auth'
import ShopBadge from '@/components/crm/ShopBadge'
import StageMenu from '@/components/crm/StageMenu'
import LeadValueEditor from '@/components/crm/LeadValueEditor'
import CallList from '@/components/crm/calls/CallList'
import { formatDateTime } from '@/lib/format'

export default async function LeadDetailPage({ params }) {
  await requireCrmAuth()

  const { id } = await params
  const lead = await prisma.lead.findUnique({
    where: { id },
    include: { calls: { orderBy: { startTime: 'desc' }, take: 25 } },
  })
  if (!lead) notFound()

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
        <div className="flex items-start justify-between gap-3">
          <h1 className="font-display text-2xl font-bold text-gray-900 dark:text-white">{lead.name}</h1>
          <ShopBadge shopType={lead.shopType} />
        </div>

        <dl className="mt-5 space-y-3">
          <Field label="Phone">
            <a href={`tel:${lead.phone}`} className="text-brand-blue dark:text-brand-blue-light hover:underline">
              {lead.phone}
            </a>
          </Field>
          <Field label="Vehicle">{lead.carModel}</Field>
          <Field label="Issue">
            <span className="whitespace-pre-wrap">{lead.issue || '—'}</span>
          </Field>
          <Field label="Source">{lead.source}</Field>
          <Field label="Received">{formatDateTime(lead.createdAt)}</Field>
        </dl>

        <div className="mt-6 grid sm:grid-cols-2 gap-5 border-t border-gray-100 dark:border-gray-800 pt-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Stage</label>
            <StageMenu leadId={lead.id} stage={lead.stage} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Estimated value
            </label>
            <LeadValueEditor leadId={lead.id} value={lead.value} />
          </div>
        </div>
      </div>

      {lead.calls.length > 0 && (
        <div className="mt-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
          <h2 className="px-4 sm:px-5 pt-4 pb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Call history
          </h2>
          <CallList calls={lead.calls} showLead={false} />
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
