// Phone normalization. Leads arrive with free-form numbers from the website
// form while RingCentral reports E.164, so every comparison goes through
// toE164() — it is the single join key between callers and leads.

export function toE164(input) {
  if (!input) return null
  const raw = String(input).trim()
  const digits = raw.replace(/\D/g, '')
  if (digits.length === 10) return `+1${digits}`
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`
  // Already-international numbers (rare for the shops): keep as dialed.
  if (raw.startsWith('+') && digits.length >= 8 && digits.length <= 15) return `+${digits}`
  return null
}

// "(973) 555-0182" for US numbers, the raw value otherwise.
export function formatPhoneDisplay(value) {
  if (!value) return 'Unknown number'
  const e164 = toE164(value)
  if (e164?.startsWith('+1') && e164.length === 12) {
    const d = e164.slice(2)
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`
  }
  return String(value)
}

export function formatDuration(seconds) {
  const s = Math.max(0, Math.round(seconds || 0))
  const min = Math.floor(s / 60)
  const rest = s % 60
  if (min === 0) return `${rest}s`
  return `${min}m ${String(rest).padStart(2, '0')}s`
}
