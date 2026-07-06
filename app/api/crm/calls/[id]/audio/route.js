import { NextResponse } from 'next/server'
import { get } from '@vercel/blob'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/crm-auth'
import { isRingCentralConfigured, rcOpenStream } from '@/lib/ringcentral'

// Streams call audio (?type=recording | voicemail) to logged-in CRM users.
// Prefers our private Blob archive; falls back to proxying live from
// RingCentral for calls not yet archived (or when no Blob store exists).
// Mirrors the referral invoice route's private-Blob handling.

export async function GET(request, { params }) {
  const session = await getSession()
  if (!session) return new NextResponse('Unauthorized', { status: 401 })

  const { id } = await params
  const type = new URL(request.url).searchParams.get('type') === 'voicemail'
    ? 'voicemail'
    : 'recording'

  const call = await prisma.call.findUnique({
    where: { id },
    select: {
      recordingBlobUrl: true,
      recordingContentType: true,
      recordingContentUri: true,
      vmAudioBlobUrl: true,
      vmAudioContentType: true,
    },
  })
  if (!call) return new NextResponse('Call not found', { status: 404 })

  const blobUrl = type === 'voicemail' ? call.vmAudioBlobUrl : call.recordingBlobUrl
  const contentType =
    (type === 'voicemail' ? call.vmAudioContentType : call.recordingContentType) || 'audio/mpeg'

  if (blobUrl) {
    // Same defense-in-depth as the invoice route: only ever fetch Blob URLs.
    let parsed
    try {
      parsed = new URL(blobUrl)
    } catch {
      return new NextResponse('Invalid audio URL', { status: 404 })
    }
    if (parsed.protocol !== 'https:' || !parsed.hostname.endsWith('.blob.vercel-storage.com')) {
      return new NextResponse('Invalid audio URL', { status: 404 })
    }
    if (parsed.hostname.endsWith('.public.blob.vercel-storage.com')) {
      return NextResponse.redirect(blobUrl)
    }

    const result = await get(blobUrl, { access: 'private' })
    if (result?.statusCode !== 200) {
      return new NextResponse('Audio not found in storage', { status: 404 })
    }
    return new NextResponse(result.stream, {
      headers: {
        'Content-Type': result.blob.contentType || contentType,
        'Content-Disposition': 'inline',
        'X-Content-Type-Options': 'nosniff',
        // Customer call audio: keep out of shared caches.
        'Cache-Control': 'private, max-age=3600',
      },
    })
  }

  // Not archived yet — proxy straight from RingCentral (recordings only; the
  // voicemail attachment URI isn't stored on the call row).
  if (type === 'recording' && call.recordingContentUri && isRingCentralConfigured()) {
    try {
      const media = await rcOpenStream(call.recordingContentUri)
      return new NextResponse(media.stream, {
        headers: {
          'Content-Type': media.contentType,
          'Content-Disposition': 'inline',
          'X-Content-Type-Options': 'nosniff',
          'Cache-Control': 'private, no-store',
        },
      })
    } catch {
      return new NextResponse('Recording unavailable', { status: 404 })
    }
  }

  return new NextResponse('No audio for this call', { status: 404 })
}
