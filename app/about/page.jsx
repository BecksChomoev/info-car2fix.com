import AboutContent from './AboutContent'

const SITE_URL = 'https://www.car2fix.com'

const TITLE = 'About Car2Fix | Certified Auto Repair in Newark & Linden'
const DESCRIPTION =
  'Car2Fix is a family-owned auto repair business in Newark & Linden, NJ. ASE & I-CAR certified technicians. Honest service, transparent pricing, lifetime warranty.'

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: SITE_URL + '/about' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL + '/about',
    type: 'website',
    siteName: 'Car2Fix',
    locale: 'en_US',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Car2Fix — Certified Auto Repair in Newark & Linden, NJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-about.jpg'],
  },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
    { '@type': 'ListItem', position: 2, name: 'About', item: SITE_URL + '/about' },
  ],
}

const aboutPageLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  url: SITE_URL + '/about',
  name: 'About Car2Fix',
  description:
    'Family-owned auto repair business serving Newark and Linden, NJ since opening. ASE and I-CAR certified technicians.',
  mainEntity: { '@type': 'Organization', name: 'Car2Fix', url: SITE_URL },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <AboutContent />
    </>
  )
}
