// Color-coded call outcome. Green = we talked to them, red = we didn't (the
// call-back queue), amber = voicemail. Pure display (safe in Server Components).

const MISSED = new Set(['Missed', 'Busy', 'No Answer', 'Hang Up', 'Rejected'])

export default function CallResultBadge({ result }) {
  let classes = 'bg-gray-500/10 text-gray-600 dark:text-gray-400'
  if (result === 'Accepted' || result === 'Call connected') {
    classes = 'bg-green-600/10 text-green-700 dark:text-green-400'
  } else if (result === 'Voicemail') {
    classes = 'bg-amber-500/10 text-amber-700 dark:text-amber-400'
  } else if (MISSED.has(result)) {
    classes = 'bg-brand-red/10 text-brand-red'
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium whitespace-nowrap ${classes}`}
    >
      {result === 'Accepted' ? 'Answered' : result}
    </span>
  )
}
