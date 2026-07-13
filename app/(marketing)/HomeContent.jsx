'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Wrench,
  Car,
  Shield,
  Clock,
  Award,
  DollarSign,
  ArrowRight,
  Phone,
  MapPin,
  BadgeCheck,
} from 'lucide-react'
import GoogleReviews from '@/components/GoogleReviews'
import { PHONE, MECH_SHOP, BODY_SHOP } from '@/lib/site'

const features = [
  {
    icon: Shield,
    title: 'Lifetime Warranty',
    description: 'Body shop repairs backed by lifetime warranty. Mechanical work covered 12 months/12k miles.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'We value your time. Most repairs completed within the estimated timeframe.',
  },
  {
    icon: Award,
    title: 'Certified Technicians',
    description: 'ASE & I-CAR certified professionals with factory training.',
  },
  {
    icon: DollarSign,
    title: 'Honest Pricing',
    description: 'Transparent pricing and honest assessments. No surprises, ever.',
  },
]

export default function HomeContent() {
  return (
    <div className="overflow-hidden">
      <section className="relative overflow-hidden pt-12 pb-8 sm:pt-16 sm:pb-10 lg:py-0 lg:min-h-[90vh] lg:flex lg:items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-red-dark" />

        <div className="absolute right-0 bottom-0 w-[55%] h-full hidden lg:flex items-end justify-center">
          <motion.img
            src="/home.png"
            alt="Car2Fix automotive repair services in Newark and Linden, New Jersey"
            className="max-w-full max-h-[85%] object-contain drop-shadow-2xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-20 w-full">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
              Newark &amp; Linden, New Jersey
            </span>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Auto Repair Shop{' '}
              <br />
              <span className="text-white/90">in Newark &amp; Linden</span>
            </h1>

            <p className="text-lg text-white/80 mb-8 max-w-md">
              Quality repairs you can trust — professional mechanical and body
              shop services. From engine repairs to collision work, we&apos;ve got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                href="/mech-shop"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-brand-blue font-semibold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl hover:shadow-white/25"
              >
                <Wrench className="w-5 h-5" />
                <span>Mechanical Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/body-shop"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/30"
              >
                <Car className="w-5 h-5" />
                <span>Body Shop Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={PHONE.href}
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{PHONE.display}</span>
              </a>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-2 text-white/80">
                <BadgeCheck className="w-5 h-5 text-green-400" />
                <span>Free Estimates</span>
              </div>
            </div>
          </div>

          <div className="lg:hidden mt-10 -mx-4 sm:mx-0 -mb-8 sm:-mb-10 flex justify-center">
            <motion.img
              src="/home-hero-mobile.webp"
              alt="Car2Fix automotive repair services in Newark and Linden, New Jersey"
              className="w-[112%] max-w-[520px] sm:w-full object-contain drop-shadow-2xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            />
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-900 dark:bg-black" aria-label="Find a location">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-white">
              <MapPin className="w-6 h-6 text-brand-red" />
              <span className="font-semibold text-lg">Find Your Nearest Location</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/mech-shop"
                className="inline-flex items-center gap-3 px-6 py-3 bg-brand-blue hover:bg-brand-blue-dark text-white rounded-full transition-colors"
              >
                <Wrench className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-semibold">Newark - Mechanical</div>
                  <div className="text-sm text-white/70">{MECH_SHOP.street}</div>
                </div>
              </Link>
              <Link
                href="/body-shop"
                className="inline-flex items-center gap-3 px-6 py-3 bg-brand-red hover:bg-brand-red-dark text-white rounded-full transition-colors"
              >
                <Car className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-semibold">Linden - Body Shop</div>
                  <div className="text-sm text-white/70">{BODY_SHOP.street}</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">
              Mechanical &amp; Body Shop to Serve You
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Conveniently located in Newark and Linden, NJ
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.article
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue to-brand-blue-dark p-8 text-white"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Wrench className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-3">Mechanical Shop</h3>
                <address className="not-italic">
                  <div className="flex items-start gap-2 text-white/80 mb-2">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{MECH_SHOP.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80 mb-6">
                    <Clock className="w-5 h-5 flex-shrink-0" />
                    <span>{MECH_SHOP.hoursShort}</span>
                  </div>
                </address>
                <Link
                  href="/mech-shop"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-blue font-semibold rounded-full hover:bg-gray-100 transition-colors"
                >
                  <span>View Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>

            <motion.article
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-red to-brand-red-dark p-8 text-white"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Car className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-3">Body Shop</h3>
                <address className="not-italic">
                  <div className="flex items-start gap-2 text-white/80 mb-2">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{BODY_SHOP.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80 mb-6">
                    <Clock className="w-5 h-5 flex-shrink-0" />
                    <span>{BODY_SHOP.hoursShort}</span>
                  </div>
                </address>
                <Link
                  href="/body-shop"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-red font-semibold rounded-full hover:bg-gray-100 transition-colors"
                >
                  <span>View Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">
              Why Drivers Choose Car2Fix
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We&apos;re committed to providing exceptional service and quality repairs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 hover:border-brand-blue dark:hover:border-brand-blue transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews variant="light" shopType="both" />

      <section className="py-14 lg:py-20 bg-gray-900 dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">
            Get a Free Estimate at Our Mechanical &amp; Body Shop
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Two locations serving Newark &amp; Linden, NJ — call today
          </p>
          <a
            href={PHONE.href}
            className="inline-flex items-center gap-3 px-10 py-5 bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-lg rounded-full transition-all hover:shadow-xl hover:shadow-brand-red/25"
          >
            <Phone className="w-6 h-6" />
            <span>{PHONE.display}</span>
          </a>
        </div>
      </section>
    </div>
  )
}
