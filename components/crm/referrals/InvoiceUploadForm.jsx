'use client'

import { useState, useTransition } from 'react'
import { upload } from '@vercel/blob/client'
import { Loader2, Upload } from 'lucide-react'
import { attachInvoice } from '@/app/crm/(protected)/referrals/actions'

const inputCls =
  'w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-brand-blue outline-none'

// Two-step submit: the file goes browser -> Vercel Blob (private store, token
// from /api/crm/invoice-upload), then the metadata + blob URL go through the
// attachInvoice server action. The file is optional so the workflow still works
// before Blob storage is configured — number + amount are what reconciliation
// actually needs.
export default function InvoiceUploadForm({ referralId, existing }) {
  const [error, setError] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [saved, setSaved] = useState(false)
  const [pending, startTransition] = useTransition()
  const busy = uploading || pending

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    setError(null)
    setSaved(false)

    const formData = new FormData(form)
    const file = formData.get('file')
    formData.delete('file')

    if (file && file.size > 0) {
      setUploading(true)
      try {
        const blob = await upload(`invoices/${referralId}/${file.name}`, file, {
          access: 'private',
          handleUploadUrl: '/api/crm/invoice-upload',
        })
        formData.set('invoiceUrl', blob.url)
      } catch (err) {
        setUploading(false)
        setError(
          `File upload failed: ${err.message}. Save without the file for now, ` +
            'or check that the Blob store is set up in Vercel (Storage → Blob, access: Private).'
        )
        return
      }
      setUploading(false)
    }

    startTransition(async () => {
      const result = await attachInvoice(referralId, null, formData)
      if (result?.error) {
        setError(result.error)
      } else {
        setSaved(true)
        form.reset()
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Invoice # *
          </label>
          <input
            name="invoiceNumber"
            required
            defaultValue={existing?.invoiceNumber ?? ''}
            placeholder="INV-1042"
            className={inputCls}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Invoice total ($) *
          </label>
          <input
            name="invoiceAmount"
            type="number"
            min="0"
            step="1"
            required
            defaultValue={existing?.invoiceAmount ?? ''}
            placeholder="1850"
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Invoice file (photo or PDF)
        </label>
        <input
          name="file"
          type="file"
          accept="image/jpeg,image/png,image/webp,image/heic,image/heif,application/pdf"
          className="block w-full text-sm text-gray-600 dark:text-gray-300 file:mr-3 file:px-3 file:py-2 file:rounded-lg file:border-0 file:bg-gray-100 dark:file:bg-gray-800 file:text-gray-700 dark:file:text-gray-200 file:font-medium hover:file:bg-gray-200"
        />
      </div>

      {error && <p className="text-sm text-brand-red">{error}</p>}
      {saved && <p className="text-sm text-green-600">Invoice saved — awaiting review ✓</p>}

      <button
        type="submit"
        disabled={busy}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-brand-blue hover:bg-brand-blue-dark transition-colors disabled:opacity-60"
      >
        {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
        {uploading ? 'Uploading file…' : pending ? 'Saving…' : 'Submit invoice'}
      </button>
    </form>
  )
}
