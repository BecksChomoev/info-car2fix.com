import Link from 'next/link'
import { PhoneIncoming, PhoneOutgoing, PhoneMissed, Voicemail } from 'lucide-react'
import ShopBadge from '@/components/crm/ShopBadge'
import CallResultBadge from '@/components/crm/calls/CallResultBadge'
import { formatPhoneDisplay, formatDuration } from '@/lib/phone'
import { formatRelativeTime, formatDateTime } from '@/lib/format'

// Server-rendered call feed rows. Used by /crm/calls (showLead) and the
// lead detail page (showLead=false). Audio streams through the session-gated
// /api/crm/calls/[id]/audio proxy — Blob URLs never reach the browser.

const MISSED = new Set(['Missed', 'Busy', 'No Answer', 'Hang Up', 'Rejected'])

function CallIcon({ call }) {
  if (call.result === 'Voicemail' || call.vmMessageUri) {
    return <Voicemail className="w-4 h-4 text-amber-600 dark:text-amber-400" />
  }
  if (call.direction === 'Outbound') {
    return <PhoneOutgoing className="w-4 h-4 text-gray-400" />
  }
  if (MISSED.has(call.result)) {
    return <PhoneMissed className="w-4 h-4 text-brand-red" />
  }
  return <PhoneIncoming className="w-4 h-4 text-green-600 dark:text-green-400" />
}

export default function CallList({ calls, showLead = true }) {
  if (calls.length === 0) return null

  return (
    <ul className="divide-y divide-gray-100 dark:divide-gray-800">
      {calls.map((call) => {
        const hasRecording = Boolean(call.recordingBlobUrl || call.recordingContentUri)
        const hasVmAudio = Boolean(call.vmAudioBlobUrl)
        const customerNumber = call.direction === 'Outbound' ? call.toNumber : call.fromNumber

        return (
          <li key={call.id} className="py-3 px-4 sm:px-5">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <CallIcon call={call} />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {formatPhoneDisplay(customerNumber)}
                  </span>
                  {call.fromName && call.direction === 'Inbound' && (
                    <span className="text-sm text-gray-500 dark:text-gray-400 truncate">
                      {call.fromName}
                    </span>
                  )}
                </div>
                <div className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                  <span title={formatDateTime(call.startTime)}>
                    {formatRelativeTime(call.startTime)}
                  </span>
                  {call.durationSec > 0 && <> · {formatDuration(call.durationSec)}</>}
                  {call.direction === 'Outbound' && <> · outbound</>}
                </div>
              </div>
              <ShopBadge shopType={call.shopType} />
              <CallResultBadge result={call.result} />
              {showLead &&
                (call.lead ? (
                  <Link
                    href={`/crm/leads/${call.lead.id}`}
                    className="text-sm font-medium text-brand-blue dark:text-brand-blue-light hover:underline whitespace-nowrap"
                  >
                    {call.leadAutoCreated ? 'New lead' : call.lead.name} →
                  </Link>
                ) : (
                  <span className="text-xs text-gray-400 whitespace-nowrap">No lead</span>
                ))}
            </div>

            {call.vmTranscript && (
              <blockquote className="mt-2 ml-7 border-l-2 border-amber-300 dark:border-amber-700 pl-3 text-sm text-gray-600 dark:text-gray-300">
                “{call.vmTranscript}”
              </blockquote>
            )}
            {!call.vmTranscript && call.vmMessageUri && call.vmStatus !== 'NotAvailable' && (
              <p className="mt-2 ml-7 text-xs text-gray-400">Voicemail transcript pending…</p>
            )}

            {(hasRecording || hasVmAudio) && (
              <div className="mt-2 ml-7 flex flex-wrap items-center gap-3">
                {hasRecording && (
                  <audio
                    controls
                    preload="none"
                    className="h-8 max-w-full"
                    src={`/api/crm/calls/${call.id}/audio?type=recording`}
                  />
                )}
                {hasVmAudio && (
                  <audio
                    controls
                    preload="none"
                    className="h-8 max-w-full"
                    src={`/api/crm/calls/${call.id}/audio?type=voicemail`}
                  />
                )}
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}
