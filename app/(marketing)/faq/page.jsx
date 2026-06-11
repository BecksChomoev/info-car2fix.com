import Link from 'next/link'
import FAQ from '@/components/FAQ'
import JsonLd from '@/components/JsonLd'
import { generalFaqs } from '@/lib/faqs'
import { PHONE, pageMetadata, breadcrumbLd, faqPageLd } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Auto Repair FAQ | Car2Fix Newark & Linden, NJ',
  description:
    'Answers to common auto repair questions — free estimates, warranties, insurance claims, turnaround times, and which Car2Fix shop to visit in Newark or Linden, NJ.',
  path: '/faq',
  ogImage: '/og-home.jpg',
  ogAlt: 'Car2Fix — Auto Repair FAQ for Newark & Linden, NJ',
})

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          faqPageLd(generalFaqs),
          breadcrumbLd([
            ['Home', '/'],
            ['FAQ', '/faq'],
          ]),
        ]}
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
            Call {PHONE.display} or visit our mechanical shop in Newark or body shop in Linden
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE.href}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-brand-red/25"
            >
              <span>Call {PHONE.display}</span>
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
