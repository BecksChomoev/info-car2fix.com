import { NextResponse } from 'next/server'
import { get } from '@vercel/blob'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/crm-auth'

// Streams a referral's invoice file to logged-in CRM users. Invoices live in a
// PRIVATE Blob store (they carry customer names and dollar amounts), so the
// browser can never fetch them directly — auth happens here, right next to the
// get() call, per Vercel's private-storage guidance.

export async function GET(request, { params }) {
  const session = await getSession()
  if (!session) return new NextResponse('Unauthorized', { status: 401 })

  const { id } = await params
  const referral = await prisma.referral.findUnique({
    where: { id },
    select: { invoiceUrl: true },
  })
  if (!referral?.invoiceUrl) return new NextResponse('No invoice on file', { status: 404 })

  // Never redirect to or fetch anything that isn't a Vercel Blob URL —
  // attachInvoice validates on write, this re-checks on read (defense in depth
  // against open redirects / fetching with our Blob credentials).
  let blobUrl
  try {
    blobUrl = new URL(referral.invoiceUrl)
  } catch {
    return new NextResponse('Invalid invoice file URL', { status: 404 })
  }
  if (blobUrl.protocol !== 'https:' || !blobUrl.hostname.endsWith('.blob.vercel-storage.com')) {
    return new NextResponse('Invalid invoice file URL', { status: 404 })
  }

  // Fallback for a misconfigured PUBLIC store: the URL is directly fetchable.
  if (blobUrl.hostname.endsWith('.public.blob.vercel-storage.com')) {
    return NextResponse.redirect(referral.invoiceUrl)
  }

  const result = await get(referral.invoiceUrl, { access: 'private' })
  if (result?.statusCode !== 200) {
    return new NextResponse('Invoice file not found in storage', { status: 404 })
  }

  return new NextResponse(result.stream, {
    headers: {
      'Content-Type': result.blob.contentType,
      'Content-Disposition': 'inline',
      'X-Content-Type-Options': 'nosniff',
      // Financial docs with PII: never written to disk caches.
      'Cache-Control': 'private, no-store',
    },
  })
}
