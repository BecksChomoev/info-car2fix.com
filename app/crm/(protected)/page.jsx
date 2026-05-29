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
        <ShopFilter active={shop} />
      </div>

      <Board leads={leads} />
    </div>
  )
}
