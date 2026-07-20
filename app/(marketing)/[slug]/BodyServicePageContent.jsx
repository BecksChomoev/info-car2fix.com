'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  BadgeCheck,
  FileCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import BodyServiceHero from '@/components/BodyServiceHero'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'
import { BODY_SHOP } from '@/lib/site'
import { SERVICE_ICONS } from './icons'

const INSURERS = ['GEICO', 'State Farm', 'Progressive', 'Allstate', 'Liberty Mutual', 'USAA']

const trustPoints = [
  { icon: BadgeCheck, title: 'I-CAR & OEM Certified', text: 'Factory-trained collision and refinish technicians on every repair.' },
  { icon: ShieldCheck, title: 'OEM-Grade Repairs', text: 'OEM parts and factory-match refinishing on every repair.' },
  { icon: FileCheck, title: 'Insurance Claims Handled', text: 'We manage the entire claims process with all major insurers for you.' },
  { icon: DollarSign, title: 'Free Written Estimates', text: 'Honest estimates with no pressure — the price we quote is the price you pay.' },
]

export default function BodyServicePageContent({ page, related }) {
  return (
    <div>
      <BodyServiceHero page={page} />

      <section className="py-14 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
              {page.includedHeading}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Performed by I-CAR certified technicians at our Linden shop
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.included.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700"
              >
                <CheckCircle className="w-7 h-7 text-green-500 mb-4" />
                <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
              {page.signsHeading}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Sound familiar? Bring it in for a free estimate — no obligation.
            </p>
          </div>

          <div className="space-y-4">
            {page.signs.map((sign, index) => (
              <motion.div
                key={sign}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700"
              >
                <AlertTriangle className="w-6 h-6 text-brand-red flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-medium">{sign}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
              Why Linden Drivers Choose Car2Fix
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-brand-red/10 dark:bg-brand-red/20 flex items-center justify-center mb-4">
                  <point.icon className="w-6 h-6 text-brand-red" />
                </div>
                <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50 dark:bg-gray-950 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-xl bg-brand-red/10 dark:bg-brand-red/20 flex items-center justify-center mb-4">
              <FileCheck className="w-6 h-6 text-brand-red" />
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-3">
              We Handle Your Insurance Claim
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Bring your vehicle in and we&apos;ll take it from there — documenting the damage,
              working directly with your adjuster, and getting your car back to pre-accident
              condition. We work with all major insurance companies.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 opacity-70">
              {INSURERS.map((insurance) => (
                <span key={insurance} className="text-lg font-semibold text-gray-500 dark:text-gray-400">
                  {insurance}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ
        items={page.faqs}
        heading={`${page.name} FAQs — Linden, NJ`}
        subheading="Straight answers from our Linden body shop team"
        variant="red"
      />

      <section className="py-14 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
              Related Body Shop Services
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {related.map((service, index) => {
              const Icon = SERVICE_ICONS[service.icon] || SERVICE_ICONS.Car
              return (
                <ServiceCard
                  key={service.slug}
                  icon={Icon}
                  title={service.name}
                  description={`${service.name} for all makes and models at our Linden, NJ body shop.`}
                  delay={index * 0.05}
                  variant="red"
                  href={`/${service.slug}`}
                />
              )
            })}
          </div>
          <div className="text-center">
            <Link
              href="/body-shop"
              className="inline-flex items-center gap-2 text-brand-red font-semibold hover:underline"
            >
              <span>View all body shop services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-14 lg:py-20 bg-gray-50 dark:bg-gray-950 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="font-display font-bold text-4xl text-gray-900 dark:text-white mb-6">
                Get a Free {page.name} Estimate in Linden
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Fill out the form and our team will get back to you with a quote,
                or call the body shop for immediate assistance.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-red/10 dark:bg-brand-red/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                    <a href={BODY_SHOP.phone.href} className="text-brand-red hover:underline text-lg">
                      {BODY_SHOP.phone.display}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-red/10 dark:bg-brand-red/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Address</h3>
                    <a
                      href={BODY_SHOP.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-brand-red"
                    >
                      {BODY_SHOP.street}<br />{BODY_SHOP.cityStateZip}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-red/10 dark:bg-brand-red/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-red/10 dark:bg-brand-red/20 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Free Estimates</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Free written estimates on all body &amp; paint work — no pressure, no surprises
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm shopType="body" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
