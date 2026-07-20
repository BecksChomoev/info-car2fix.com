import { notFound } from 'next/navigation'
import {
  servicePages,
  bodyServicePages,
  locationPages,
  getSeoPage,
  isServicePage,
  isBodyServicePage,
} from '@/lib/service-pages'
import JsonLd from '@/components/JsonLd'
import { SITE_URL, PHONE, MECH_SHOP, BODY_SHOP, pageMetadata, breadcrumbLd, faqPageLd } from '@/lib/site'
import ServicePageContent from './ServicePageContent'
import BodyServicePageContent from './BodyServicePageContent'
import LocationPageContent from './LocationPageContent'

// Only the slugs from lib/service-pages.js build; anything else 404s.
export const dynamicParams = false

export function generateStaticParams() {
  return [...servicePages, ...bodyServicePages, ...locationPages].map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const page = getSeoPage(slug)
  if (!page) return {}
  const ogImage = isBodyServicePage(page)
    ? '/og-body-shop.jpg'
    : isServicePage(page)
      ? '/og-mech-shop.jpg'
      : '/og-home.jpg'
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: `/${page.slug}`,
    ogImage,
  })
}

function buildServiceLd(page) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${page.name} in Newark, NJ`,
      serviceType: page.name,
      description: page.description,
      url: `${SITE_URL}/${page.slug}`,
      provider: {
        '@type': 'AutoRepair',
        name: MECH_SHOP.name,
        url: SITE_URL + MECH_SHOP.path,
        telephone: PHONE.e164,
        address: MECH_SHOP.postalAddress,
      },
      areaServed: [
        { '@type': 'City', name: 'Newark' },
        { '@type': 'City', name: 'Elizabeth' },
        { '@type': 'City', name: 'Hillside' },
        { '@type': 'City', name: 'Linden' },
        { '@type': 'City', name: 'Irvington' },
        { '@type': 'City', name: 'Union' },
      ],
    },
    breadcrumbLd([
      ['Home', '/'],
      ['Mechanical Shop', '/mech-shop'],
      [page.name, `/${page.slug}`],
    ]),
    faqPageLd(page.faqs),
  ]
}

function buildBodyServiceLd(page) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${page.name} in Linden, NJ`,
      serviceType: page.name,
      description: page.description,
      url: `${SITE_URL}/${page.slug}`,
      provider: {
        '@type': 'AutoBodyShop',
        name: BODY_SHOP.name,
        url: SITE_URL + BODY_SHOP.path,
        telephone: BODY_SHOP.phone.e164,
        address: BODY_SHOP.postalAddress,
      },
      areaServed: [
        { '@type': 'City', name: 'Linden' },
        { '@type': 'City', name: 'Elizabeth' },
        { '@type': 'City', name: 'Rahway' },
        { '@type': 'City', name: 'Roselle' },
        { '@type': 'City', name: 'Union' },
        { '@type': 'City', name: 'Newark' },
      ],
    },
    breadcrumbLd([
      ['Home', '/'],
      ['Body Shop', '/body-shop'],
      [page.name, `/${page.slug}`],
    ]),
    faqPageLd(page.faqs),
  ]
}

function buildLocationLd(page) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `Auto Repair Serving ${page.city}, NJ`,
      serviceType: 'Auto Repair',
      description: page.description,
      url: `${SITE_URL}/${page.slug}`,
      provider: { '@type': 'Organization', name: 'Car2Fix', url: SITE_URL },
      areaServed: { '@type': 'City', name: page.city },
    },
    breadcrumbLd([
      ['Home', '/'],
      [`Auto Repair in ${page.city}, NJ`, `/${page.slug}`],
    ]),
    faqPageLd(page.faqs),
  ]
}

export default async function Page({ params }) {
  const { slug } = await params
  const page = getSeoPage(slug)
  if (!page) notFound()

  const body = isBodyServicePage(page)
  const service = isServicePage(page)

  // Client components receive plain serializable data; icons resolve by name there.
  // Related links can point within either service set, so resolve against both.
  const serviceLinks = [...servicePages, ...bodyServicePages].map(({ slug, name, icon }) => ({ slug, name, icon }))
  const related = service
    ? page.related.map((slug) => serviceLinks.find((s) => s.slug === slug)).filter(Boolean)
    : []

  // Location pages list only the mechanical services (they're all performed at
  // the Newark shop, per the section copy).
  const mechServiceLinks = servicePages.map(({ slug, name, icon }) => ({ slug, name, icon }))

  let ld
  if (body) ld = buildBodyServiceLd(page)
  else if (service) ld = buildServiceLd(page)
  else ld = buildLocationLd(page)

  return (
    <>
      <JsonLd data={ld} />
      {body ? (
        <BodyServicePageContent page={page} related={related} />
      ) : service ? (
        <ServicePageContent page={page} related={related} />
      ) : (
        <LocationPageContent page={page} services={mechServiceLinks} />
      )}
    </>
  )
}
