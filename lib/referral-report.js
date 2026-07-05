// Server-only referral reporting: Eastern-Time week math, the weekly commission
// report builder, and its Telegram text rendering. Weeks run Monday 00:00 ET
// through the following Monday 00:00 ET, since payouts are reconciled weekly in
// shop-local time — never UTC.

import { prisma } from '@/lib/prisma'
import { formatCurrency } from '@/lib/format'
import { SHOP_LABEL } from '@/lib/referral-constants'

const ET = 'America/New_York'

function etCalendarParts(date) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: ET,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
  }).formatToParts(date)
  const get = (type) => parts.find((p) => p.type === type)?.value
  return {
    y: Number(get('year')),
    m: Number(get('month')),
    d: Number(get('day')),
    weekday: get('weekday'), // 'Mon' ... 'Sun'
  }
}

// UTC instant of 00:00 ET on the given ET calendar date. Guess EST (UTC-5),
// then correct by one hour if that instant renders as 1 AM ET (i.e. EDT).
// ET midnight always exists — DST shifts happen at 2 AM — so this is exact.
function etMidnightUTC(y, m, d) {
  const guess = new Date(Date.UTC(y, m - 1, d, 5, 0, 0))
  const hourInET = Number(
    new Intl.DateTimeFormat('en-US', { timeZone: ET, hour: 'numeric', hourCycle: 'h23' })
      .formatToParts(guess)
      .find((p) => p.type === 'hour').value
  )
  if (hourInET === 1) return new Date(guess.getTime() - 60 * 60 * 1000)
  return guess
}

const WEEKDAY_INDEX = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 }

// The ET week containing `now`, shifted by weekOffset (0 = current week,
// -1 = last completed week). Returns UTC boundary instants plus a label.
export function getWeekRange(weekOffset = 0, now = new Date()) {
  const { y, m, d, weekday } = etCalendarParts(now)
  // Calendar arithmetic at UTC-noon so day math can never straddle a date line.
  const base = new Date(Date.UTC(y, m - 1, d, 12))
  base.setUTCDate(base.getUTCDate() - WEEKDAY_INDEX[weekday] + weekOffset * 7)
  const start = etMidnightUTC(base.getUTCFullYear(), base.getUTCMonth() + 1, base.getUTCDate())
  const endBase = new Date(base)
  endBase.setUTCDate(endBase.getUTCDate() + 7)
  const end = etMidnightUTC(endBase.getUTCFullYear(), endBase.getUTCMonth() + 1, endBase.getUTCDate())

  const fmt = (date) =>
    date.toLocaleDateString('en-US', { timeZone: ET, month: 'short', day: 'numeric', year: 'numeric' })
  // One second before the exclusive end is always Sunday 23:59:59 ET. (end
  // minus 24h would land on Saturday during the 23-hour spring-forward week.)
  const lastDay = new Date(end.getTime() - 1000)
  return { start, end, label: `${fmt(start)} – ${fmt(lastDay)}` }
}

function groupByPartner(rows) {
  const byId = new Map()
  for (const r of rows) {
    let g = byId.get(r.partnerId)
    if (!g) {
      g = { partnerId: r.partnerId, partnerName: r.partner.name, count: 0, invoiceTotal: 0, commissionTotal: 0 }
      byId.set(r.partnerId, g)
    }
    g.count += 1
    g.invoiceTotal += r.invoiceAmount ?? 0
    g.commissionTotal += r.commissionAmount ?? 0
  }
  return [...byId.values()].sort((a, b) => b.commissionTotal - a.commissionTotal)
}

// Everything the weekly commission report needs, in one shape shared by the
// /crm/referrals/reports page and the Telegram sender.
export async function buildWeeklyReport(range) {
  const { start, end } = range
  const [newRows, approvedRows, paidRows, outstandingRows, advanceSums, paidSums] = await Promise.all([
    prisma.referral.findMany({ where: { createdAt: { gte: start, lt: end } }, select: { shopType: true } }),
    prisma.referral.findMany({
      where: { approvedAt: { gte: start, lt: end } },
      include: { partner: { select: { name: true } } },
    }),
    prisma.referral.findMany({
      where: { paidAt: { gte: start, lt: end } },
      include: { partner: { select: { name: true } } },
    }),
    prisma.referral.findMany({
      where: { status: 'approved' },
      include: { partner: { select: { name: true } } },
    }),
    prisma.cashAdvance.groupBy({ by: ['shopType'], _sum: { amount: true } }),
    prisma.referral.groupBy({
      by: ['shopType'],
      where: { status: 'paid' },
      _sum: { commissionAmount: true },
    }),
  ])

  const newCounts = { mechanical: 0, body: 0 }
  for (const r of newRows) newCounts[r.shopType] = (newCounts[r.shopType] ?? 0) + 1

  const approved = groupByPartner(approvedRows)
  const paid = groupByPartner(paidRows)
  const outstanding = groupByPartner(outstandingRows)
  const sum = (rows, field) => rows.reduce((acc, r) => acc + r[field], 0)

  const floats = ['mechanical', 'body'].map((shopType) => {
    const advanced = advanceSums.find((a) => a.shopType === shopType)?._sum.amount ?? 0
    const paidOut = paidSums.find((p) => p.shopType === shopType)?._sum.commissionAmount ?? 0
    return { shopType, advanced, paidOut, onHand: advanced - paidOut }
  })

  return {
    range,
    newCounts: { ...newCounts, total: newRows.length },
    approved: {
      rows: approved,
      count: sum(approved, 'count'),
      invoiceTotal: sum(approved, 'invoiceTotal'),
      commissionTotal: sum(approved, 'commissionTotal'),
    },
    paid: { rows: paid, count: sum(paid, 'count'), commissionTotal: sum(paid, 'commissionTotal') },
    outstanding: {
      rows: outstanding,
      count: sum(outstanding, 'count'),
      commissionTotal: sum(outstanding, 'commissionTotal'),
    },
    floats,
  }
}

// Plain-text rendering for Telegram (no parse_mode — partner names must never
// break delivery). Kept skimmable on a phone.
export function formatWeeklyReportText(report) {
  const $ = (n) => formatCurrency(n) ?? '$0'
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.car2fix.com'
  const lines = []

  lines.push('🧾 CAR2FIX — WEEKLY REFERRAL REPORT')
  lines.push(`Week: ${report.range.label}`)
  lines.push('━━━━━━━━━━━━━━━━━━━━━')
  lines.push(
    `📥 New referrals: ${report.newCounts.total} (Mechanical ${report.newCounts.mechanical} · Body ${report.newCounts.body})`
  )

  lines.push('')
  if (report.approved.rows.length === 0) {
    lines.push('✅ Approved this week: none')
  } else {
    lines.push(
      `✅ Approved this week: ${report.approved.count} — ${$(report.approved.commissionTotal)} commission on ${$(report.approved.invoiceTotal)} invoiced`
    )
    for (const r of report.approved.rows) {
      lines.push(`• ${r.partnerName}: ${r.count} — ${$(r.commissionTotal)} on ${$(r.invoiceTotal)}`)
    }
  }

  lines.push('')
  if (report.paid.rows.length === 0) {
    lines.push('💵 Paid out this week: none')
  } else {
    lines.push(`💵 Paid out this week: ${$(report.paid.commissionTotal)} (${report.paid.count})`)
    for (const r of report.paid.rows) {
      lines.push(`• ${r.partnerName}: ${$(r.commissionTotal)} (${r.count})`)
    }
  }

  lines.push('')
  if (report.outstanding.rows.length === 0) {
    lines.push('⏳ Owed to partners: $0 — all settled')
  } else {
    lines.push(
      `⏳ Owed to partners (approved, unpaid): ${$(report.outstanding.commissionTotal)} (${report.outstanding.count})`
    )
    for (const r of report.outstanding.rows) {
      lines.push(`• ${r.partnerName}: ${$(r.commissionTotal)} (${r.count})`)
    }
  }

  lines.push('')
  lines.push('🏦 Cash float')
  for (const f of report.floats) {
    lines.push(
      `• ${SHOP_LABEL[f.shopType]}: advanced ${$(f.advanced)} · paid out ${$(f.paidOut)} · on hand ${$(f.onHand)}`
    )
  }

  lines.push('')
  lines.push(`Full report: ${siteUrl}/crm/referrals/reports`)
  return lines.join('\n')
}
