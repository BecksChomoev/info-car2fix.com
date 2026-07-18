'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { requireCrmAuth, resolveLoginRole, startSession, endSession } from '@/lib/crm-auth'
import { STAGE_KEYS } from '@/lib/stages'
import { toE164 } from '@/lib/phone'

// --- Auth ---

export async function loginAction(prevState, formData) {
  const password = formData.get('password')
  const role = typeof password === 'string' ? resolveLoginRole(password) : null
  if (!role) {
    return { error: 'Incorrect password. Please try again.' }
  }
  await startSession(role)
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

// Manually add a customer to the board — for walk-ins and phone-ins that never
// came through the website form or RingCentral. Mirrors the website form's lead
// shape (including phoneE164 normalization, the join key for future calls) but,
// unlike a web submission, lets staff set the starting stage and estimated
// value up front. Used with useActionState: returns { error } to the form on
// bad input, redirects back to the board on success (staff add these in
// batches, so land them back where they started). No Telegram ping — the
// person entering it is already the one who needs to know.
export async function createLead(prevState, formData) {
  await requireCrmAuth()

  const s = (name) => {
    const v = formData.get(name)
    return typeof v === 'string' ? v.trim() : ''
  }

  const name = s('name')
  const phone = s('phone')
  if (!name) return { error: 'Customer name is required.' }
  if (!phone) return { error: 'Phone number is required.' }

  const stageRaw = s('stage')
  const stage = STAGE_KEYS.includes(stageRaw) ? stageRaw : 'new'

  let value = null
  const rawValue = s('value')
  if (rawValue !== '') {
    const n = Number(rawValue)
    // Upper bound keeps the whole-dollar value inside Postgres INT4 range so a
    // fat-fingered amount returns a friendly error instead of an unhandled
    // Prisma write failure (matches the referral money helper's cap).
    if (!Number.isFinite(n) || n < 0 || n > 100_000_000) {
      return { error: 'Enter a valid estimated value.' }
    }
    value = Math.round(n)
  }

  await prisma.lead.create({
    data: {
      name,
      phone,
      phoneE164: toE164(phone),
      carModel: s('carModel'),
      issue: s('issue'),
      shopType: s('shopType') === 'body' ? 'body' : 'mechanical',
      source: 'manual',
      stage,
      value,
    },
  })
  revalidatePath('/crm')
  redirect('/crm')
}
