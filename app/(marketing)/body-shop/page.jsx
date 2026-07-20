import BodyShopContent from './BodyShopContent'
import JsonLd from '@/components/JsonLd'
import { SITE_URL, BODY_SHOP, pageMetadata, breadcrumbLd } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Body Shop in Linden, NJ | Collision Repair | Car2Fix',
  description:
    'I-CAR certified body shop in Linden, NJ. Collision repair, auto painting, dent removal & frame straightening. We handle insurance claims.',
  path: '/body-shop',
  ogImage: '/og-body-shop.jpg',
  ogAlt: 'Car2Fix Body Shop in Linden, NJ',
})

const autoBodyShopLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoBodyShop',
  '@id': SITE_URL + '/body-shop#shop',
  name: BODY_SHOP.name,
  url: SITE_URL + '/body-shop',
  image: SITE_URL + '/logo.png',
  telephone: BODY_SHOP.phone.e164,
  priceRange: '$$',
  address: BODY_SHOP.postalAddress,
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

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          autoBodyShopLd,
          breadcrumbLd([
            ['Home', '/'],
            ['Body Shop', '/body-shop'],
          ]),
        ]}
      />
      <BodyShopContent />
    </>
  )
}
