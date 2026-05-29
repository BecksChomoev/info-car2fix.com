// Display helpers. Used server-side (in Server Components) so relative-time
// formatting never causes a client/server hydration mismatch.

export function formatCurrency(value) {
  if (value == null) return null
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatRelativeTime(date) {
  const d = date instanceof Date ? date : new Date(date)
  const diffMs = Date.now() - d.getTime()
  const min = Math.round(diffMs / 60000)
  const hr = Math.round(min / 60)
  const day = Math.round(hr / 24)
  if (min < 1) return 'just now'
  if (min < 60) return `${min}m ago`
  if (hr < 24) return `${hr}h ago`
  if (day < 30) return `${day}d ago`
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export function formatDateTime(date) {
  const d = date instanceof Date ? date : new Date(date)
  return d.toLocaleString('en-US', {
    timeZone: 'America/New_York',
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}
