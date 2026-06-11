import { notFound } from 'next/navigation'
import { servicePages, locationPages, getSeoPage, isServicePage } from '@/lib/service-pages'
import JsonLd from '@/components/JsonLd'
import { SITE_URL, PHONE, MECH_SHOP, pageMetadata, breadcrumbLd, faqPageLd } from '@/lib/site'
import ServicePageContent from './ServicePageContent'
import LocationPageContent from './LocationPageContent'

// Only the slugs from lib/service-pages.js build; anything else 404s.
export const dynamicParams = false

export function generateStaticParams() {
  return [...servicePages, ...locationPages].map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const page = getSeoPage(slug)
  if (!page) return {}
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: `/${page.slug}`,
    ogImage: isServicePage(page) ? '/og-mech-shop.jpg' : '/og-home.jpg',
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

  const service = isServicePage(page)

  // Client components receive plain serializable data; icons resolve by name there.
  const serviceLinks = servicePages.map(({ slug, name, icon }) => ({ slug, name, icon }))
  const related = service
    ? page.related.map((slug) => serviceLinks.find((s) => s.slug === slug)).filter(Boolean)
    : []

  return (
    <>
      <JsonLd data={service ? buildServiceLd(page) : buildLocationLd(page)} />
      {service ? (
        <ServicePageContent page={page} related={related} />
      ) : (
        <LocationPageContent page={page} services={serviceLinks} />
      )}
    </>
  )
}
