import { SITE_URL } from '@/lib/site'

export default function robots() {
  return {
    rules: [
      // /crm is the internal CRM (customer PII) — keep it out of search indexes.
      { userAgent: '*', allow: '/', disallow: ['/api/', '/crm'] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
