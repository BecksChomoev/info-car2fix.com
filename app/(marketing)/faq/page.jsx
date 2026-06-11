import Link from 'next/link'
import FAQ from '@/components/FAQ'
import { generalFaqs } from '@/lib/faqs'

const SITE_URL = 'https://www.car2fix.com'

const TITLE = 'Auto Repair FAQ | Car2Fix Newark & Linden, NJ'
const DESCRIPTION =
  'Answers to common auto repair questions — free estimates, warranties, insurance claims, turnaround times, and which Car2Fix shop to visit in Newark or Linden, NJ.'

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: SITE_URL + '/faq' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL + '/faq',
    type: 'website',
    siteName: 'Car2Fix',
    locale: 'en_US',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Car2Fix — Auto Repair FAQ for Newark & Linden, NJ',
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

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: generalFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: SITE_URL + '/faq' },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-brand-blue-dark to-gray-900" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4 leading-tight">
            Auto Repair FAQs for Newark &amp; Linden Drivers
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Estimates, warranties, insurance claims, turnaround times — straight
            answers from the Car2Fix team.
          </p>
        </div>
      </section>

      <FAQ
        items={generalFaqs}
        heading="Common Questions, Honest Answers"
        subheading="Don't see your question? Call us — a real person picks up."
      />

      <section className="py-16 bg-gray-900 dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Call (607) 251-1509 or visit our mechanical shop in Newark or body shop in Linden
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6072511509"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-brand-red/25"
            >
              <span>Call (607) 251-1509</span>
            </a>
            <Link
              href="/mech-shop"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/20"
            >
              <span>Mechanical Shop</span>
            </Link>
            <Link
              href="/body-shop"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/20"
            >
              <span>Body Shop</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
