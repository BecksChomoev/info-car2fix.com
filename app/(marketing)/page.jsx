import HomeContent from './HomeContent'

const SITE_URL = 'https://www.car2fix.com'

const TITLE = 'Car2Fix | Auto Repair Shop in Newark & Linden, NJ'
const DESCRIPTION =
  'Family-owned auto repair in Newark & Linden, NJ. ASE & I-CAR certified. Mechanical repairs, collision work, free estimates. Lifetime warranty on body work.'

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: SITE_URL + '/' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL + '/',
    type: 'website',
    siteName: 'Car2Fix',
    locale: 'en_US',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Car2Fix — Auto Repair Shop in Newark & Linden, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-home.jpg'],
  },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <HomeContent />
    </>
  )
}
