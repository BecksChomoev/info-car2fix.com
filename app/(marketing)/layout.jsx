import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { SITE_URL, PHONE, MECH_SHOP, BODY_SHOP } from '@/lib/site'

// Organization structured data is marketing-only SEO, so it lives here rather
// than in the root layout (which is now shared with the noindex /crm section).
const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Car2Fix',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  telephone: PHONE.e164,
  sameAs: [],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: PHONE.e164,
      contactType: 'customer service',
      areaServed: 'US-NJ',
      availableLanguage: ['English'],
    },
  ],
  subOrganization: [
    {
      '@type': 'AutoRepair',
      name: MECH_SHOP.name,
      telephone: PHONE.e164,
      url: SITE_URL + MECH_SHOP.path,
      address: MECH_SHOP.postalAddress,
    },
    {
      '@type': 'AutoBodyShop',
      name: BODY_SHOP.name,
      telephone: PHONE.e164,
      url: SITE_URL + BODY_SHOP.path,
      address: BODY_SHOP.postalAddress,
    },
  ],
}

export default function MarketingLayout({ children }) {
  return (
    <>
      <JsonLd data={organizationLd} />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  )
}
