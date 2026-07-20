'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  MapPin,
  Clock,
  Phone,
  Award,
  BadgeCheck,
  Shield,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  DollarSign,
} from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import ServiceHero from '@/components/ServiceHero'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'
import { PHONE, MECH_SHOP } from '@/lib/site'
import { SERVICE_ICONS } from './icons'

const trustPoints = [
  { icon: BadgeCheck, title: 'ASE-Certified Technicians', text: 'Factory-trained professionals working on all makes and models.' },
  { icon: Shield, title: 'All Makes & Models', text: 'Foreign and domestic vehicles serviced by our ASE-certified technicians.' },
  { icon: DollarSign, title: 'Honest Pricing', text: 'Free estimates — the price we quote is the price you pay.' },
  { icon: Clock, title: 'Fast Turnaround', text: 'Most repairs completed within the estimated timeframe.' },
]

export default function ServicePageContent({ page, related }) {
  return (
    <div>
      <ServiceHero page={page} />

      <section className="py-14 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
              {page.includedHeading}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Performed by ASE-certified technicians at our Newark shop
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
              Noticing any of these? Don&apos;t wait — small problems get expensive.
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
              Why Newark Drivers Choose Car2Fix
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
        heading={`${page.name} FAQs — Newark, NJ`}
        subheading="Straight answers from our Newark technicians"
      />

      <section className="py-14 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
              Related Auto Repair Services
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {related.map((service, index) => {
              const Icon = SERVICE_ICONS[service.icon] || SERVICE_ICONS.Wrench
              return (
                <ServiceCard
                  key={service.slug}
                  icon={Icon}
                  title={service.name}
                  description={`${service.name} for all makes and models at our Newark, NJ shop.`}
                  delay={index * 0.05}
                  variant="blue"
                  href={`/${service.slug}`}
                />
              )
            })}
          </div>
          <div className="text-center">
            <Link
              href="/mech-shop"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline"
            >
              <span>View all mechanical services</span>
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
                Get a Free {page.name} Estimate in Newark
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Fill out the form and our team will get back to you with a quote,
                or call us for immediate assistance.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                    <a href={PHONE.href} className="text-brand-blue hover:underline text-lg">
                      {PHONE.display}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Address</h3>
                    <a
                      href={MECH_SHOP.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-brand-blue"
                    >
                      {MECH_SHOP.street}<br />{MECH_SHOP.cityStateZip}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 8:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Free Estimates</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Free written estimates before any work — the price we quote is the price you pay
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm shopType="mechanical" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
