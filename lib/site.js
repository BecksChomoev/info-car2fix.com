// Single source of truth for business facts (phone, addresses, hours) and the
// SEO boilerplate every marketing page repeats (metadata shape, JSON-LD
// builders). Safe to import from both server pages and client components.

export const SITE_URL = 'https://www.car2fix.com'
export const SITE_NAME = 'Car2Fix'

export const PHONE = {
  display: '(607) 251-1509',
  href: 'tel:6072511509',
  e164: '+1-607-251-1509',
}

export const MECH_SHOP = {
  name: 'Car2Fix — Mechanical Shop',
  path: '/mech-shop',
  street: '408 Carnegie Ave',
  cityStateZip: 'Newark, NJ 07114',
  address: '408 Carnegie Ave, Newark, NJ 07114',
  hoursShort: 'Mon-Fri: 8am-6pm | Sat: 8am-2pm',
  mapUrl:
    'https://www.google.com/maps/place/Car2Fix+Mechanic+Shop/@40.6982681,-74.1902248,648m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89c25315896ec88f:0x350c51bc8912b158!8m2!3d40.6982681!4d-74.1876499!16s%2Fg%2F11z2syywfh',
  postalAddress: {
    '@type': 'PostalAddress',
    streetAddress: '408 Carnegie Ave',
    addressLocality: 'Newark',
    addressRegion: 'NJ',
    postalCode: '07114',
    addressCountry: 'US',
  },
}

export const BODY_SHOP = {
  name: 'Car2Fix — Body Shop',
  path: '/body-shop',
  street: '1420 E Elizabeth Ave',
  cityStateZip: 'Linden, NJ 07036',
  address: '1420 E Elizabeth Ave, Linden, NJ 07036',
  hoursShort: 'Mon-Fri: 8am-6pm',
  mapUrl: 'https://maps.google.com/?q=1420+E+Elizabeth+Ave+Linden+NJ+07036',
  postalAddress: {
    '@type': 'PostalAddress',
    streetAddress: '1420 E Elizabeth Ave',
    addressLocality: 'Linden',
    addressRegion: 'NJ',
    postalCode: '07036',
    addressCountry: 'US',
  },
}

// Standard metadata for a marketing page. `path` starts with '/' ('/' for home).
export function pageMetadata({ title, description, path, ogImage, ogAlt }) {
  const url = SITE_URL + path
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: SITE_NAME,
      locale: 'en_US',
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogAlt || title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

// items: [['Home', '/'], ['Mechanical Shop', '/mech-shop'], ...]
export function breadcrumbLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: SITE_URL + path,
    })),
  }
}

// faqs: [{ question, answer }, ...]
export function faqPageLd(faqs) {
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
