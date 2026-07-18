import Link from 'next/link'
import { Plus } from 'lucide-react'
import { prisma } from '@/lib/prisma'
import { requireCrmAuth } from '@/lib/crm-auth'
import Board from '@/components/crm/Board'
import ShopFilter from '@/components/crm/ShopFilter'

export default async function CrmBoardPage({ searchParams }) {
  await requireCrmAuth()

  const sp = await searchParams
  const shop = sp?.shop === 'mechanical' || sp?.shop === 'body' ? sp.shop : null

  const leads = await prisma.lead.findMany({
    where: shop ? { shopType: shop } : undefined,
    orderBy: { createdAt: 'desc' },
  })

  const shopLabel = shop ? ` · ${shop === 'body' ? 'Body' : 'Mechanical'} shop` : ''

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <h1 className="font-display text-2xl font-bold">Leads</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {leads.length} {leads.length === 1 ? 'lead' : 'leads'}
            {shopLabel}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <ShopFilter active={shop} />
          <Link
            href="/crm/leads/new"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-brand-blue hover:bg-brand-blue-dark transition-colors whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            Add lead
          </Link>
        </div>
      </div>

      <Board leads={leads} />
    </div>
  )
}
