import { notFound } from 'next/navigation'
import { servicePages, locationPages, getSeoPage, isServicePage } from '@/lib/service-pages'
import ServicePageContent from './ServicePageContent'
import LocationPageContent from './LocationPageContent'

const SITE_URL = 'https://www.car2fix.com'

// Only the slugs from lib/service-pages.js build; anything else 404s.
export const dynamicParams = false

export function generateStaticParams() {
  return [...servicePages, ...locationPages].map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const page = getSeoPage(slug)
  if (!page) return {}
  const url = `${SITE_URL}/${page.slug}`
  const ogImage = isServicePage(page) ? '/og-mech-shop.jpg' : '/og-home.jpg'
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: 'website',
      siteName: 'Car2Fix',
      locale: 'en_US',
      images: [{ url: ogImage, width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [ogImage],
    },
  }
}

const MECH_SHOP_PROVIDER = {
  '@type': 'AutoRepair',
  name: 'Car2Fix — Mechanical Shop',
  url: `${SITE_URL}/mech-shop`,
  telephone: '+1-607-251-1509',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '408 Carnegie Ave',
    addressLocality: 'Newark',
    addressRegion: 'NJ',
    postalCode: '07114',
    addressCountry: 'US',
  },
}

function faqLd(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

function buildServiceLd(page) {
  const url = `${SITE_URL}/${page.slug}`
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${page.name} in Newark, NJ`,
      serviceType: page.name,
      description: page.description,
      url,
      provider: MECH_SHOP_PROVIDER,
      areaServed: [
        { '@type': 'City', name: 'Newark' },
        { '@type': 'City', name: 'Elizabeth' },
        { '@type': 'City', name: 'Hillside' },
        { '@type': 'City', name: 'Linden' },
        { '@type': 'City', name: 'Irvington' },
        { '@type': 'City', name: 'Union' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Mechanical Shop', item: `${SITE_URL}/mech-shop` },
        { '@type': 'ListItem', position: 3, name: page.name, item: url },
      ],
    },
    faqLd(page.faqs),
  ]
}

function buildLocationLd(page) {
  const url = `${SITE_URL}/${page.slug}`
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `Auto Repair Serving ${page.city}, NJ`,
      serviceType: 'Auto Repair',
      description: page.description,
      url,
      provider: { '@type': 'Organization', name: 'Car2Fix', url: SITE_URL },
      areaServed: { '@type': 'City', name: page.city },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: `Auto Repair in ${page.city}, NJ`, item: url },
      ],
    },
    faqLd(page.faqs),
  ]
}

export default async function Page({ params }) {
  const { slug } = await params
  const page = getSeoPage(slug)
  if (!page) notFound()

  const service = isServicePage(page)
  const ldBlocks = service ? buildServiceLd(page) : buildLocationLd(page)

  // Client components receive plain serializable data; icons resolve by name there.
  const serviceLinks = servicePages.map(({ slug, name, icon }) => ({ slug, name, icon }))
  const related = service
    ? page.related.map((slug) => serviceLinks.find((s) => s.slug === slug)).filter(Boolean)
    : []

  return (
    <>
      {ldBlocks.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}
      {service ? (
        <ServicePageContent page={page} related={related} />
      ) : (
        <LocationPageContent page={page} services={serviceLinks} />
      )}
    </>
  )
}
