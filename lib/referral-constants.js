// Referral program constants + pure helpers. Client-safe (no prisma/server
// imports) — client components import statuses and commission math from here.

export const REFERRAL_STATUSES = [
  { key: 'received', label: 'Received' },
  { key: 'invoice_uploaded', label: 'Invoice Uploaded' },
  { key: 'approved', label: 'Approved' },
  { key: 'rejected', label: 'Rejected' },
  { key: 'paid', label: 'Paid' },
]

export const REFERRAL_STATUS_KEYS = REFERRAL_STATUSES.map((s) => s.key)
export const REFERRAL_STATUS_LABEL = Object.fromEntries(
  REFERRAL_STATUSES.map((s) => [s.key, s.label])
)

export const PARTNER_TYPES = [
  { key: 'towing', label: 'Towing Company' },
  { key: 'insurance', label: 'Insurance' },
  { key: 'rental', label: 'Rental Agency' },
  { key: 'other', label: 'Other' },
]
export const PARTNER_TYPE_KEYS = PARTNER_TYPES.map((t) => t.key)

export const COMMISSION_TYPES = [
  { key: 'percent', label: '% of invoice' },
  { key: 'flat', label: 'Flat $ per referral' },
]
export const COMMISSION_TYPE_KEYS = COMMISSION_TYPES.map((t) => t.key)

export const SHOP_TYPES = [
  { key: 'mechanical', label: 'Mechanical Shop' },
  { key: 'body', label: 'Body Shop' },
]
export const SHOP_LABEL = Object.fromEntries(SHOP_TYPES.map((s) => [s.key, s.label]))

// Suggested commission in whole dollars from the partner's terms. The admin can
// override the amount at approval; this is only the prefilled suggestion.
export function computeCommission(partner, invoiceAmount) {
  if (!partner) return null
  if (partner.commissionType === 'flat') return partner.commissionRate
  if (invoiceAmount == null) return null
  return Math.round((invoiceAmount * partner.commissionRate) / 100)
}

// Human summary of a partner's terms, e.g. "10% of invoice" or "$50 flat".
export function describeCommissionTerms(partner) {
  return partner.commissionType === 'flat'
    ? `$${partner.commissionRate} flat per referral`
    : `${partner.commissionRate}% of invoice`
}
