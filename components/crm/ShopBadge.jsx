// Color-coded shop label. Mechanical = brand blue, Body = brand red — matching
// the public site's per-shop accent colors. Pure display (safe in Server Components).
export default function ShopBadge({ shopType }) {
  const isBody = shopType === 'body'
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium whitespace-nowrap ${
        isBody ? 'bg-brand-red/10 text-brand-red' : 'bg-brand-blue/10 text-brand-blue'
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${isBody ? 'bg-brand-red' : 'bg-brand-blue'}`} />
      {isBody ? 'Body' : 'Mechanical'}
    </span>
  )
}
