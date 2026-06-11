import BodyShopContent from './BodyShopContent'

const SITE_URL = 'https://www.car2fix.com'

const TITLE = 'Body Shop in Linden, NJ | Collision Repair | Car2Fix'
const DESCRIPTION =
  'I-CAR certified body shop in Linden, NJ. Collision repair, auto painting, dent removal & frame straightening. We handle insurance claims. Lifetime warranty.'

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: SITE_URL + '/body-shop' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL + '/body-shop',
    type: 'website',
    siteName: 'Car2Fix',
    locale: 'en_US',
    images: [
      {
        url: '/og-body-shop.jpg',
        width: 1200,
        height: 630,
        alt: 'Car2Fix Body Shop in Linden, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-body-shop.jpg'],
  },
}

const autoBodyShopLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoBodyShop',
  '@id': SITE_URL + '/body-shop#shop',
  name: 'Car2Fix — Body Shop',
  url: SITE_URL + '/body-shop',
  image: SITE_URL + '/logo.png',
  telephone: '+1-607-251-1509',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1420 E Elizabeth Ave',
    addressLocality: 'Linden',
    addressRegion: 'NJ',
    postalCode: '07036',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 40.6303, longitude: -74.2407 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Linden' },
    { '@type': 'City', name: 'Newark' },
    { '@type': 'State', name: 'New Jersey' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Body Shop Services',
    itemListElement: [
      'Collision Repair',
      'Auto Painting',
      'Dent Removal',
      'Frame Straightening',
      'Scratch Repair',
      'Windshield Replacement',
      'Body Panel Replacement',
      'Bumper Repair',
      'Color Matching',
      'Fiberglass Repair',
      'Headlight Restoration',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
    { '@type': 'ListItem', position: 2, name: 'Body Shop', item: SITE_URL + '/body-shop' },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(autoBodyShopLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <BodyShopContent />
    </>
  )
}
