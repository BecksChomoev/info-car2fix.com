import { handleUpload } from '@vercel/blob/client'
import { NextResponse } from 'next/server'
import { getSession } from '@/lib/crm-auth'

// Token exchange for browser -> Vercel Blob invoice uploads (files skip our
// server entirely, so phone photos aren't squeezed by the 4.5 MB function body
// limit). The CRM session check in onBeforeGenerateToken is the security
// boundary: no session, no upload token.
//
// The DB row is updated by the attachInvoice server action afterwards, NOT in
// onUploadCompleted — that callback can't reach localhost and the shop still
// has to type the invoice number/amount in the same form anyway.

export async function POST(request) {
  const body = await request.json()

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => {
        const session = await getSession()
        if (!session) throw new Error('Not authenticated')

        return {
          allowedContentTypes: [
            'image/jpeg',
            'image/png',
            'image/webp',
            'image/heic',
            'image/heif',
            'application/pdf',
          ],
          maximumSizeInBytes: 25 * 1024 * 1024,
          addRandomSuffix: true,
        }
      },
      onUploadCompleted: async () => {
        // Intentionally empty — see note above.
      },
    })

    return NextResponse.json(jsonResponse)
  } catch (error) {
    console.error('Invoice upload token exchange failed:', error)
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}
