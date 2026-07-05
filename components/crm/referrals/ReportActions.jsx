'use client'

import { useState, useTransition } from 'react'
import { Loader2, Printer, Send } from 'lucide-react'
import { sendWeeklyReportNow } from '@/app/crm/(protected)/referrals/actions'

// "Send to Telegram" pushes this week's report to the owners' chat immediately
// (same message the Monday cron sends); Print gives a PDF via the browser.
export default function ReportActions({ weekOffset }) {
  const [result, setResult] = useState(null)
  const [pending, startTransition] = useTransition()

  return (
    <div className="flex flex-wrap items-center gap-3 print:hidden">
      <button
        type="button"
        disabled={pending}
        onClick={() =>
          startTransition(async () => {
            setResult(await sendWeeklyReportNow(weekOffset))
          })
        }
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-brand-blue hover:bg-brand-blue-dark transition-colors disabled:opacity-60"
      >
        {pending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        Send to Telegram
      </button>
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <Printer className="w-4 h-4" />
        Print / PDF
      </button>
      {result?.success && <span className="text-sm text-green-600">Sent ✓</span>}
      {result?.error && <span className="text-sm text-brand-red">{result.error}</span>}
    </div>
  )
}
