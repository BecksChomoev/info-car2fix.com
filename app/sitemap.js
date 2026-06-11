import { servicePages, locationPages } from '@/lib/service-pages'
import { SITE_URL } from '@/lib/site'

const LAST_MODIFIED = '2026-05-18'
const SEO_PAGES_ADDED = '2026-06-11'

export default function sitemap() {
  return [
    { url: `${SITE_URL}/`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE_URL}/mech-shop`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/body-shop`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE_URL}/faq`, lastModified: SEO_PAGES_ADDED, changeFrequency: 'monthly', priority: 0.6 },
    ...servicePages.map((page) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified: SEO_PAGES_ADDED,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    ...locationPages.map((page) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified: SEO_PAGES_ADDED,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ]
}
