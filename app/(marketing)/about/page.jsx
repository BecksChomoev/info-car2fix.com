import AboutContent from './AboutContent'
import JsonLd from '@/components/JsonLd'
import { SITE_URL, pageMetadata, breadcrumbLd } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'About Car2Fix | Certified Auto Repair in Newark & Linden',
  description:
    'Car2Fix is a family-owned auto repair business in Newark & Linden, NJ. ASE & I-CAR certified technicians. Honest service, transparent pricing.',
  path: '/about',
  ogImage: '/og-about.jpg',
  ogAlt: 'About Car2Fix — Certified Auto Repair in Newark & Linden, NJ',
})

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
      <JsonLd
        data={[
          aboutPageLd,
          breadcrumbLd([
            ['Home', '/'],
            ['About', '/about'],
          ]),
        ]}
      />
      <AboutContent />
    </>
  )
}
