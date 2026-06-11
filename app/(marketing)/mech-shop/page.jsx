import MechShopContent from './MechShopContent'
import JsonLd from '@/components/JsonLd'
import { SITE_URL, PHONE, MECH_SHOP, pageMetadata, breadcrumbLd } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Mechanical Shop in Newark, NJ | Car2Fix Auto Repair',
  description:
    'ASE-certified mechanical repair in Newark, NJ. Engine, transmission, brakes, oil change, A/C & more. 408 Carnegie Ave. Free estimates. Call (607) 251-1509.',
  path: '/mech-shop',
  ogImage: '/og-mech-shop.jpg',
  ogAlt: 'Car2Fix Mechanical Shop in Newark, NJ',
})

const autoRepairLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  '@id': SITE_URL + '/mech-shop#shop',
  name: MECH_SHOP.name,
  url: SITE_URL + '/mech-shop',
  image: SITE_URL + '/logo.png',
  telephone: PHONE.e164,
  priceRange: '$$',
  address: MECH_SHOP.postalAddress,
  geo: { '@type': 'GeoCoordinates', latitude: 40.6983, longitude: -74.1877 },
  hasMap: MECH_SHOP.mapUrl,
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

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          autoRepairLd,
          breadcrumbLd([
            ['Home', '/'],
            ['Mechanical Shop', '/mech-shop'],
          ]),
        ]}
      />
      <MechShopContent />
    </>
  )
}
