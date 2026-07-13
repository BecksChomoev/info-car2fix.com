'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Target,
  Heart,
  Wrench,
  Car,
  ArrowRight,
  CheckCircle,
  MapPin,
  Phone,
  Clock,
  Shield,
  Award,
  ThumbsUp,
  Calendar,
  BadgeCheck,
  Star,
  FileCheck,
} from 'lucide-react'
import { PHONE, MECH_SHOP, BODY_SHOP } from '@/lib/site'

const stats = [
  { number: '2', label: 'Locations', suffix: '' },
  { number: '15', label: 'Years Experience', suffix: '+' },
  { number: '5000', label: 'Happy Customers', suffix: '+' },
  { number: '100', label: 'Satisfaction Rate', suffix: '%' },
]

const values = [
  {
    icon: Shield,
    title: 'No Hidden Fees',
    description: 'We give you an honest quote upfront. The price we quote is the price you pay—no surprises, no unexpected charges.',
  },
  {
    icon: ThumbsUp,
    title: 'Certified Repair Done Right',
    description: "Our certified technicians fix it properly the first time. We don't cut corners because your safety depends on our work.",
  },
  {
    icon: Heart,
    title: 'We Actually Care',
    description: "Your car isn't just a job to us. We know you need it for work, family, and life. We treat it like it's our own.",
  },
]

const whyChooseUs = [
  { icon: BadgeCheck, title: 'ASE & I-CAR Certified Technicians', description: 'Factory-trained professionals who repair to manufacturer standards' },
  { icon: Award, title: 'Lifetime Warranty on Body Work, 12-Month on Mechanical', description: 'Every repair leaves our shop backed in writing—no fine print' },
  { icon: Clock, title: 'Fast Turnaround', description: 'We respect your time—most repairs done within estimate' },
  { icon: FileCheck, title: 'Works with All Major Insurance Companies', description: 'GEICO, State Farm, Progressive, Allstate & more—we handle the paperwork' },
]

const commitments = [
  'Free, no-obligation estimates',
  'Transparent pricing—no hidden fees',
  'Only repairs you actually need',
  'Quality OEM & aftermarket parts',
  'Clear communication throughout',
  'Clean, professional facilities',
]

export default function AboutContent() {
  return (
    <div>
      <section className="relative py-16 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-brand-blue-dark to-gray-900" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              Started by Car People, for Car People
            </span>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              About Car2Fix{' '}
              <br />
              <span className="text-white/80">Certified Auto Repair in Newark &amp; Linden</span>
            </h1>

            <p className="text-xl text-white/70 mb-8 max-w-2xl">
              We fix cars. We don&apos;t fix prices. Tired of shops that overcharge,
              oversell, or overpromise? That&apos;s exactly why we started Car2Fix—to
              be the honest shop we wished existed.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={PHONE.href}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call {PHONE.display}</span>
              </a>
              <Link
                href="/mech-shop"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/20"
              >
                <span>Get Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800" aria-label="Key statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display font-bold text-4xl sm:text-5xl text-brand-blue mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-brand-blue font-semibold mb-4">
                <Heart className="w-5 h-5" />
                Our Story
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-6">
                Family-Owned Auto Repair Since Day One
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg">
                <p>
                  <strong className="text-gray-900 dark:text-white">Here&apos;s the truth:</strong> we started Car2Fix because we were
                  frustrated. Frustrated with shops that charged for work that wasn&apos;t needed.
                  Frustrated with &quot;mechanics&quot; who couldn&apos;t explain what was wrong. Frustrated
                  with waiting weeks for simple repairs.
                </p>
                <p>We knew there had to be a better way. So we built it.</p>
                <p>
                  Starting with our mechanical shop in Newark, we focused on one thing:
                  <strong className="text-gray-900 dark:text-white"> earning trust</strong>. No upselling.
                  No scare tactics. Just honest diagnostics, fair prices, and quality work.
                  Word spread. Customers came back. They brought friends and family.
                </p>
                <p>
                  That trust allowed us to open our body shop in Linden. Today, we serve
                  thousands of customers across New Jersey—and we still treat every car
                  like it belongs to family.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-brand-blue to-brand-red p-1">
                <div className="w-full h-full rounded-3xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img
                    src="/logo.png"
                    alt="Car2Fix"
                    className="w-1/2 h-auto"
                  />
                </div>
              </div>
              <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-2 sm:-left-6 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">Mechanical Shop</p>
                    <p className="text-sm text-gray-500">Newark, NJ</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -top-6 -right-2 sm:-right-6 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center">
                    <Car className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">Body Shop</p>
                    <p className="text-sm text-gray-500">Linden, NJ</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-brand-blue font-semibold mb-4">
              <Target className="w-5 h-5" />
              What Makes Us Different
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
              The Car2Fix Promise — Honest Repairs in New Jersey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We don&apos;t just fix cars—we fix the auto repair experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-red flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-brand-red font-semibold mb-4">
                <Star className="w-5 h-5" />
                Why Choose Us
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-6">
                The Best Choice to Repair Your Car at Car2Fix
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                We&apos;ve built our reputation on doing right by our customers.
                Here&apos;s what you get when you choose Car2Fix:
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={item.title}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 lg:p-10">
              <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-6">
                Our Commitment to You
              </h3>
              <div className="space-y-4">
                {commitments.map((commitment) => (
                  <div key={commitment} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{commitment}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400 italic">
                  &quot;We don&apos;t succeed unless you&apos;re completely satisfied with your repair.
                  That&apos;s not marketing—that&apos;s how we run our business.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-brand-blue font-semibold mb-4">
              <MapPin className="w-5 h-5" />
              Our Locations
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
              Two Auto Repair Shops Serving New Jersey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Two shops, one standard of excellence — serving Newark, Linden, and surrounding communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <div className="h-3 bg-gradient-to-r from-brand-blue to-brand-blue-dark" />
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue flex items-center justify-center">
                    <Wrench className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white">
                      Mechanical Shop
                    </h3>
                    <p className="text-brand-blue font-medium">Newark, NJ</p>
                  </div>
                </div>

                <address className="not-italic space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{MECH_SHOP.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <Clock className="w-5 h-5 flex-shrink-0" />
                    <span>{MECH_SHOP.hoursShort}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <a href={PHONE.href} className="hover:text-brand-blue">{PHONE.display}</a>
                  </div>
                </address>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Full-service mechanical repairs: engines, transmissions, brakes,
                  diagnostics, oil changes, and more.
                </p>

                <Link
                  href="/mech-shop"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold rounded-full transition-colors"
                >
                  <span>View Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>

            <article className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <div className="h-3 bg-gradient-to-r from-brand-red to-brand-red-dark" />
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-red flex items-center justify-center">
                    <Car className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white">
                      Body Shop
                    </h3>
                    <p className="text-brand-red font-medium">Linden, NJ</p>
                  </div>
                </div>

                <address className="not-italic space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{BODY_SHOP.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <Clock className="w-5 h-5 flex-shrink-0" />
                    <span>{BODY_SHOP.hoursShort}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <a href={BODY_SHOP.phone.href} className="hover:text-brand-red">{BODY_SHOP.phone.display}</a>
                  </div>
                </address>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Collision repair, auto painting, dent removal, frame straightening,
                  and complete body restoration.
                </p>

                <Link
                  href="/body-shop"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-full transition-colors"
                >
                  <span>View Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-gray-900 dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Ready to Experience Honest Auto Repair?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            No pressure. No upselling. Just a free estimate and straight talk about what your car actually needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE.href}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-brand-red/25"
            >
              <Phone className="w-5 h-5" />
              <span>Call {PHONE.display}</span>
            </a>
            <Link
              href="/mech-shop#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/20"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
