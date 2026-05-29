const SITE_URL = 'https://www.car2fix.com'

export default function robots() {
  return {
    rules: [
      // /crm is the internal CRM (customer PII) — keep it out of search indexes.
      { userAgent: '*', allow: '/', disallow: ['/api/', '/crm'] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
