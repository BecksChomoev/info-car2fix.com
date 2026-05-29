'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { requireCrmAuth, verifyPassword, startSession, endSession } from '@/lib/crm-auth'
import { STAGE_KEYS } from '@/lib/stages'

// --- Auth ---

export async function loginAction(prevState, formData) {
  const password = formData.get('password')
  if (typeof password !== 'string' || !verifyPassword(password)) {
    return { error: 'Incorrect password. Please try again.' }
  }
  await startSession()
  redirect('/crm')
}

export async function logoutAction() {
  await endSession()
  redirect('/crm/login')
}

// --- Lead mutations (each re-checks auth — the security boundary) ---

export async function updateLeadStage(leadId, stage) {
  await requireCrmAuth()
  if (!STAGE_KEYS.includes(stage)) throw new Error('Invalid stage')
  await prisma.lead.update({ where: { id: leadId }, data: { stage } })
  revalidatePath('/crm')
  revalidatePath(`/crm/leads/${leadId}`)
}

export async function updateLeadValue(leadId, rawValue) {
  await requireCrmAuth()
  let value = null
  if (rawValue !== '' && rawValue != null) {
    const n = Number(rawValue)
    if (!Number.isFinite(n) || n < 0) throw new Error('Invalid value')
    value = Math.round(n)
  }
  await prisma.lead.update({ where: { id: leadId }, data: { value } })
  revalidatePath('/crm')
  revalidatePath(`/crm/leads/${leadId}`)
}
