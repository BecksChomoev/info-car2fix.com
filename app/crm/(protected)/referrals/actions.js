'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { requireCrmAuth, isAdminSession } from '@/lib/crm-auth'
import {
  PARTNER_TYPE_KEYS,
  COMMISSION_TYPE_KEYS,
} from '@/lib/referral-constants'
import { getWeekRange, buildWeeklyReport, formatWeeklyReportText } from '@/lib/referral-report'
import { sendTelegramMessage } from '@/lib/telegram'

// Every page reads referral data somewhere in this subtree, so one layout-level
// revalidation after each mutation keeps dashboard, detail, cash, and reports
// consistent without tracking individual paths.
function revalidateReferrals() {
  revalidatePath('/crm/referrals', 'layout')
}

// Admin gate that returns an error string instead of throwing: thrown Error
// messages are redacted by Next.js in production, so the user would only see a
// generic failure. Callers return { error } to their form.
async function adminError() {
  const session = await requireCrmAuth()
  if (!isAdminSession(session)) {
    return 'Admin access required — log in with the admin password.'
  }
  return null
}

function str(formData, name) {
  const v = formData.get(name)
  return typeof v === 'string' ? v.trim() : ''
}

// Whole-dollar amount or null; throws on garbage so bad money input never
// silently becomes 0. Capped well inside Postgres INTEGER range.
const MAX_DOLLARS = 100_000_000

function dollars(formData, name, { required = false, min = 0 } = {}) {
  const raw = str(formData, name)
  if (raw === '') {
    if (required) throw new Error('Amount is required')
    return null
  }
  const n = Number(raw)
  if (!Number.isFinite(n) || n < min || n > MAX_DOLLARS) throw new Error('Invalid amount')
  return Math.round(n)
}

const shopTypeOf = (formData) => (str(formData, 'shopType') === 'body' ? 'body' : 'mechanical')

// Uploads land on *.blob.vercel-storage.com; anything else stored in invoiceUrl
// could later be redirected to or fetched with our Blob credentials, so reject
// it at the door.
function isVercelBlobUrl(raw) {
  try {
    const url = new URL(raw)
    return url.protocol === 'https:' && url.hostname.endsWith('.blob.vercel-storage.com')
  } catch {
    return false
  }
}

// --- Partners ---

function partnerDataFromForm(formData) {
  const type = str(formData, 'type')
  const commissionType = str(formData, 'commissionType')
  return {
    name: str(formData, 'name'),
    contactName: str(formData, 'contactName') || null,
    phone: str(formData, 'phone') || null,
    type: PARTNER_TYPE_KEYS.includes(type) ? type : 'towing',
    commissionType: COMMISSION_TYPE_KEYS.includes(commissionType) ? commissionType : 'percent',
    notes: str(formData, 'notes') || null,
  }
}

function validatePartnerForm(formData) {
  if (!str(formData, 'name')) return { error: 'Partner name is required.' }
  let commissionRate
  try {
    commissionRate = dollars(formData, 'commissionRate', { required: true })
  } catch {
    return { error: 'Enter a valid commission rate.' }
  }
  if (str(formData, 'commissionType') === 'percent' && commissionRate > 100) {
    return { error: 'Percent commission cannot exceed 100.' }
  }
  return { commissionRate }
}

export async function createPartner(prevState, formData) {
  await requireCrmAuth()
  const check = validatePartnerForm(formData)
  if (check.error) return check

  await prisma.referralPartner.create({
    data: { ...partnerDataFromForm(formData), commissionRate: check.commissionRate },
  })
  revalidateReferrals()
  return { success: true }
}

export async function updatePartner(partnerId, prevState, formData) {
  await requireCrmAuth()
  const check = validatePartnerForm(formData)
  if (check.error) return check

  await prisma.referralPartner.update({
    where: { id: partnerId },
    data: {
      ...partnerDataFromForm(formData),
      commissionRate: check.commissionRate,
      active: formData.get('active') === 'on',
    },
  })
  revalidateReferrals()
  return { success: true }
}

// --- Referral lifecycle ---
// received -> invoice_uploaded -> approved -> paid, with rejected as a detour.
// Two people often work the same referral (shop attaches the invoice, admin
// approves), so every transition is a CONDITIONAL write: the expected status
// (and, for approval, the invoice amount the admin saw) is part of the
// updateMany WHERE clause. count === 0 means someone else moved it first — we
// re-read and explain instead of silently double-advancing or reverting state.

export async function createReferral(prevState, formData) {
  await requireCrmAuth()
  const partnerId = str(formData, 'partnerId')
  const customerName = str(formData, 'customerName')
  if (!partnerId) return { error: 'Pick the referral partner.' }
  if (!customerName) return { error: 'Customer name is required.' }

  const partner = await prisma.referralPartner.findUnique({ where: { id: partnerId } })
  if (!partner) return { error: 'Unknown partner.' }

  const referral = await prisma.referral.create({
    data: {
      partnerId,
      customerName,
      customerPhone: str(formData, 'customerPhone') || null,
      vehicle: str(formData, 'vehicle') || null,
      jobDescription: str(formData, 'jobDescription') || null,
      shopType: shopTypeOf(formData),
      notes: str(formData, 'notes') || null,
    },
  })
  revalidateReferrals()
  redirect(`/crm/referrals/${referral.id}`)
}

// Attach the final invoice. The file itself goes browser -> Vercel Blob (see
// InvoiceUploadForm); this only records metadata + the private blob URL. Works
// without a file too, so the workflow still runs before Blob storage is set up.
export async function attachInvoice(referralId, prevState, formData) {
  await requireCrmAuth()

  const invoiceNumber = str(formData, 'invoiceNumber')
  if (!invoiceNumber) return { error: 'Invoice number is required.' }
  let invoiceAmount
  try {
    invoiceAmount = dollars(formData, 'invoiceAmount', { required: true })
  } catch {
    return { error: 'Enter the invoice total in dollars.' }
  }
  const invoiceUrl = str(formData, 'invoiceUrl')
  if (invoiceUrl && !isVercelBlobUrl(invoiceUrl)) {
    return { error: 'Invalid invoice file URL — upload the file through this form.' }
  }

  const { count } = await prisma.referral.updateMany({
    where: { id: referralId, status: { in: ['received', 'invoice_uploaded', 'rejected'] } },
    data: {
      invoiceNumber,
      invoiceAmount,
      // A re-upload after rejection replaces the file; otherwise keep the old one.
      ...(invoiceUrl ? { invoiceUrl } : {}),
      invoiceUploadedAt: new Date(),
      status: 'invoice_uploaded',
      rejectedReason: null,
    },
  })
  if (count === 0) {
    return { error: 'This referral was just approved or paid — the invoice is locked.' }
  }
  revalidateReferrals()
  return { success: true }
}

export async function approveReferral(referralId, prevState, formData) {
  const denied = await adminError()
  if (denied) return { error: denied }

  let commissionAmount
  try {
    commissionAmount = dollars(formData, 'commissionAmount', { required: true })
  } catch {
    return { error: 'Enter the commission amount in dollars.' }
  }
  // The invoice total this admin was looking at when they clicked Approve. If
  // the shop corrected the invoice in the meantime, the write must not land.
  let expectedInvoiceAmount = null
  try {
    expectedInvoiceAmount = dollars(formData, 'expectedInvoiceAmount')
  } catch {
    expectedInvoiceAmount = null
  }

  const { count } = await prisma.referral.updateMany({
    where: {
      id: referralId,
      status: 'invoice_uploaded',
      ...(expectedInvoiceAmount != null ? { invoiceAmount: expectedInvoiceAmount } : {}),
    },
    data: { status: 'approved', commissionAmount, approvedAt: new Date() },
  })
  if (count === 0) {
    const current = await prisma.referral.findUnique({ where: { id: referralId } })
    if (!current) return { error: 'Referral not found.' }
    if (current.status !== 'invoice_uploaded') {
      return { error: 'Only referrals with an uploaded invoice can be approved.' }
    }
    return { error: 'The invoice was just corrected — refresh and review the new amount.' }
  }
  revalidateReferrals()
  return { success: true }
}

export async function rejectReferral(referralId, prevState, formData) {
  const denied = await adminError()
  if (denied) return { error: denied }

  const reason = str(formData, 'reason')
  if (!reason) return { error: 'Give the shop a reason so they can fix it.' }

  const { count } = await prisma.referral.updateMany({
    where: { id: referralId, status: 'invoice_uploaded' },
    data: { status: 'rejected', rejectedReason: reason },
  })
  if (count === 0) return { error: 'Only referrals awaiting review can be rejected.' }
  revalidateReferrals()
  return { success: true }
}

export async function markReferralPaid(referralId, prevState, formData) {
  await requireCrmAuth()

  const paidBy = str(formData, 'paidBy')
  if (!paidBy) return { error: 'Enter who handed over the cash.' }

  const { count } = await prisma.referral.updateMany({
    where: { id: referralId, status: 'approved' },
    data: { status: 'paid', paidAt: new Date(), paidBy },
  })
  if (count === 0) return { error: 'Only approved referrals can be marked paid.' }
  revalidateReferrals()
  return { success: true }
}

// Admin escape hatch for fat-fingered approvals/payments: steps back exactly
// the transition the button named (paid -> approved, approved ->
// invoice_uploaded). `fromStatus` guards against a stale tab undoing a
// different step than the label promised.
export async function undoReferralStep(referralId, fromStatus) {
  const denied = await adminError()
  if (denied) return { error: denied }

  let result
  if (fromStatus === 'paid') {
    result = await prisma.referral.updateMany({
      where: { id: referralId, status: 'paid' },
      data: { status: 'approved', paidAt: null, paidBy: null },
    })
  } else if (fromStatus === 'approved') {
    result = await prisma.referral.updateMany({
      where: { id: referralId, status: 'approved' },
      data: { status: 'invoice_uploaded', approvedAt: null, commissionAmount: null },
    })
  } else {
    return { error: 'Nothing to undo for this status.' }
  }
  if (result.count === 0) {
    return { error: 'The status changed since you loaded this page — refresh and try again.' }
  }
  revalidateReferrals()
  return { success: true }
}

export async function updateReferralNotes(referralId, rawNotes) {
  await requireCrmAuth()
  const notes = typeof rawNotes === 'string' && rawNotes.trim() ? rawNotes.trim() : null
  await prisma.referral.update({ where: { id: referralId }, data: { notes } })
  revalidateReferrals()
}

// --- Cash float ---

export async function addCashAdvance(prevState, formData) {
  const denied = await adminError()
  if (denied) return { error: denied }

  const raw = str(formData, 'amount')
  const n = Number(raw)
  // Negative entries record cash returned by a shop; zero is meaningless.
  if (raw === '' || !Number.isFinite(n) || Math.round(n) === 0 || Math.abs(n) > MAX_DOLLARS) {
    return { error: 'Enter a non-zero dollar amount (negative = cash returned).' }
  }

  await prisma.cashAdvance.create({
    data: {
      shopType: shopTypeOf(formData),
      amount: Math.round(n),
      note: str(formData, 'note') || null,
    },
  })
  revalidateReferrals()
  return { success: true }
}

// --- Reports ---

// Manual "send now" from the reports page — same builder the Monday cron uses.
export async function sendWeeklyReportNow(weekOffset) {
  await requireCrmAuth()

  const chatId = process.env.TELEGRAM_CHAT_ID_REFERRALS
  if (!chatId) {
    return { error: 'TELEGRAM_CHAT_ID_REFERRALS is not configured in Vercel env vars.' }
  }

  const offset =
    Number.isInteger(weekOffset) && weekOffset <= 0 && weekOffset >= -520 ? weekOffset : 0
  const report = await buildWeeklyReport(getWeekRange(offset))
  const ok = await sendTelegramMessage(chatId, formatWeeklyReportText(report))
  return ok ? { success: true } : { error: 'Telegram rejected the message — check the bot token and chat id.' }
}
