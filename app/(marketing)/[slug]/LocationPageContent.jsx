'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Wrench,
  Car,
  MapPin,
  Phone,
  BadgeCheck,
  Shield,
  FileCheck,
  DollarSign,
  ArrowRight,
} from 'lucide-react'
import FAQ from '@/components/FAQ'
import { PHONE, MECH_SHOP, BODY_SHOP } from '@/lib/site'
import { SERVICE_ICONS } from './icons'

const trustPoints = [
  { icon: BadgeCheck, title: 'ASE & I-CAR Certified', text: 'Certified technicians at both shops, trained to manufacturer standards.' },
  { icon: Shield, title: 'Two Certified Shops', text: 'ASE-certified mechanical in Newark and an I-CAR-certified body shop in Linden.' },
  { icon: DollarSign, title: 'Honest Pricing', text: 'Free estimates and no surprises — the quote is the price.' },
  { icon: FileCheck, title: 'Insurance Claims Handled', text: 'We manage the entire claims process with all major insurers.' },
]

export default function LocationPageContent({ page, services }) {
  const { city } = page

  return (
    <div>
      <section className="relative py-16 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-brand-blue-dark to-gray-900" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
              <MapPin className="w-4 h-4" />
              <span>Serving {city}, New Jersey</span>
            </span>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              {page.h1}
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl">
              {page.intro}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-brand-blue font-semibold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl hover:shadow-white/25"
              >
                <Phone className="w-5 h-5" />
                <span>Call {PHONE.display}</span>
              </a>
              <Link
                href="/mech-shop#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/30"
              >
                <span>Get a Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
              Auto Repair Services for {city} Drivers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Two specialized shops, both minutes from {city}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue to-brand-blue-dark p-8 text-white"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Wrench className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-3">Mechanical Repairs</h3>
                <p className="text-white/80 mb-4">
                  Engine, transmission, brakes, suspension, oil changes, diagnostics, and
                  everything mechanical, handled by ASE-certified technicians.
                </p>
                <address className="not-italic flex items-start gap-2 text-white/80 mb-6">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{page.proximity.mech}</span>
                </address>
                <Link
                  href="/mech-shop"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-blue font-semibold rounded-full hover:bg-gray-100 transition-colors"
                >
                  <span>Mechanical Shop</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-red to-brand-red-dark p-8 text-white"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Car className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-3">Body &amp; Collision Repair</h3>
                <p className="text-white/80 mb-4">
                  Collision repair, painting, dent removal, and frame straightening —
                  insurance claims handled start to finish.
                </p>
                <address className="not-italic flex items-start gap-2 text-white/80 mb-6">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{page.proximity.body}</span>
                </address>
                <Link
                  href="/body-shop"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-red font-semibold rounded-full hover:bg-gray-100 transition-colors"
                >
                  <span>Body Shop</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
              Popular Services for {city} Drivers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Every service below is performed at our Newark shop, minutes from {city}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => {
              const Icon = SERVICE_ICONS[service.icon] || Wrench
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                >
                  <Link
                    href={`/${service.slug}`}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 hover:border-brand-blue dark:hover:border-brand-blue transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <span className="font-display font-semibold text-gray-900 dark:text-white">
                      {service.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-brand-blue ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
              Why {city} Drivers Choose Car2Fix
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
                <div className="w-12 h-12 mx-auto rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center mb-4">
                  <point.icon className="w-6 h-6 text-brand-blue" />
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

      <FAQ
        items={page.faqs}
        heading={`${city} Driver FAQs`}
        subheading={`What ${city} drivers ask us most`}
      />

      <section className="py-14 lg:py-20 bg-gray-900 dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Get a Free Estimate Today
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Serving {city} from Newark &amp; Linden — no obligation, no pressure
          </p>
          <a
            href={PHONE.href}
            className="inline-flex items-center gap-3 px-10 py-5 bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-lg rounded-full transition-all hover:shadow-xl hover:shadow-brand-red/25 mb-10"
          >
            <Phone className="w-6 h-6" />
            <span>{PHONE.display}</span>
          </a>
          <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            <div className="flex items-start gap-3 text-gray-300">
              <Wrench className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white">Mechanical Shop</p>
                <p className="text-sm text-gray-400">{MECH_SHOP.address}<br />{MECH_SHOP.hoursShort}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-gray-300">
              <Car className="w-5 h-5 text-brand-red flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white">Body Shop</p>
                <p className="text-sm text-gray-400">{BODY_SHOP.address}<br />{BODY_SHOP.hoursShort}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
