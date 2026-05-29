import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const SITE_URL = 'https://www.car2fix.com'

// Organization structured data is marketing-only SEO, so it lives here rather
// than in the root layout (which is now shared with the noindex /crm section).
const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Car2Fix',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  telephone: '+1-607-251-1509',
  sameAs: [],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-607-251-1509',
      contactType: 'customer service',
      areaServed: 'US-NJ',
      availableLanguage: ['English'],
    },
  ],
  subOrganization: [
    {
      '@type': 'AutoRepair',
      name: 'Car2Fix — Mechanical Shop',
      telephone: '+1-607-251-1509',
      url: `${SITE_URL}/mech-shop`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '408 Carnegie Ave',
        addressLocality: 'Newark',
        addressRegion: 'NJ',
        postalCode: '07114',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'AutoBodyShop',
      name: 'Car2Fix — Body Shop',
      telephone: '+1-607-251-1509',
      url: `${SITE_URL}/body-shop`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1420 E Elizabeth Ave',
        addressLocality: 'Linden',
        addressRegion: 'NJ',
        postalCode: '07036',
        addressCountry: 'US',
      },
    },
  ],
}

export default function MarketingLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  )
}
