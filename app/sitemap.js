const SITE_URL = 'https://www.car2fix.com'
const LAST_MODIFIED = '2026-05-18'

export default function sitemap() {
  return [
    { url: `${SITE_URL}/`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE_URL}/mech-shop`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/body-shop`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.5 },
  ]
}
