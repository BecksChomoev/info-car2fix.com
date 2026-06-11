import MechShopContent from './MechShopContent'

const SITE_URL = 'https://www.car2fix.com'

const TITLE = 'Mechanical Shop in Newark, NJ | Car2Fix Auto Repair'
const DESCRIPTION =
  'ASE-certified mechanical repair in Newark, NJ. Engine, transmission, brakes, oil change, A/C & more. 408 Carnegie Ave. Free estimates. Call (607) 251-1509.'

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: SITE_URL + '/mech-shop' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL + '/mech-shop',
    type: 'website',
    siteName: 'Car2Fix',
    locale: 'en_US',
    images: [
      {
        url: '/og-mech-shop.jpg',
        width: 1200,
        height: 630,
        alt: 'Car2Fix Mechanical Shop in Newark, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-mech-shop.jpg'],
  },
}

const autoRepairLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  '@id': SITE_URL + '/mech-shop#shop',
  name: 'Car2Fix — Mechanical Shop',
  url: SITE_URL + '/mech-shop',
  image: SITE_URL + '/logo.png',
  telephone: '+1-607-251-1509',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '408 Carnegie Ave',
    addressLocality: 'Newark',
    addressRegion: 'NJ',
    postalCode: '07114',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 40.6983, longitude: -74.1877 },
  hasMap:
    'https://www.google.com/maps/place/Car2Fix+Mechanic+Shop/@40.6982681,-74.1902248,648m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89c25315896ec88f:0x350c51bc8912b158!8m2!3d40.6982681!4d-74.1876499!16s%2Fg%2F11z2syywfh',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '14:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Newark' },
    { '@type': 'City', name: 'Linden' },
    { '@type': 'State', name: 'New Jersey' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Mechanical Services',
    itemListElement: [
      'Engine Diagnostics',
      'Engine Repair',
      'Transmission Service',
      'Brake Services',
      'Oil Change',
      'Battery Service',
      'Cooling System Repair',
      'A/C Service',
      'Suspension & Steering',
      'Tire Service',
      'Exhaust Repair',
      'Fuel System Repair',
      'Electrical Repairs',
      'Check Engine Light Diagnostics',
      'Vehicle Inspections',
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
    { '@type': 'ListItem', position: 2, name: 'Mechanical Shop', item: SITE_URL + '/mech-shop' },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(autoRepairLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <MechShopContent />
    </>
  )
}
