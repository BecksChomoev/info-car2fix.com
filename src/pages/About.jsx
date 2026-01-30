import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Target,
  Heart,
  Lightbulb,
  Wrench,
  Car,
  ArrowRight,
  CheckCircle,
  MapPin,
  Phone,
  Clock,
  Shield,
  Award,
  Users,
  ThumbsUp,
  Calendar,
  BadgeCheck,
  Star,
  FileCheck
} from 'lucide-react'

const stats = [
  { number: '2', label: 'Locations', suffix: '' },
  { number: '15', label: 'Years Experience', suffix: '+' },
  { number: '5000', label: 'Happy Customers', suffix: '+' },
  { number: '100', label: 'Satisfaction Rate', suffix: '%' },
]

const values = [
  {
    icon: Shield,
    title: 'No Surprises',
    description: 'We give you an honest quote upfront. The price we quote is the price you pay—no hidden fees, no unexpected charges.',
  },
  {
    icon: ThumbsUp,
    title: 'Done Right, First Time',
    description: 'Our certified technicians fix it properly the first time. We don\'t cut corners because your safety depends on our work.',
  },
  {
    icon: Heart,
    title: 'We Actually Care',
    description: 'Your car isn\'t just a job to us. We know you need it for work, family, and life. We treat it like it\'s our own.',
  },
]

const whyChooseUs = [
  {
    icon: BadgeCheck,
    title: 'Certified Technicians',
    description: 'ASE & I-CAR certified professionals with factory training',
  },
  {
    icon: Award,
    title: 'Warranty Protection',
    description: 'Lifetime warranty on body work, 12-month/12k miles on mechanical',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'We respect your time—most repairs done within estimate',
  },
  {
    icon: FileCheck,
    title: 'Insurance Assistance',
    description: 'We handle the paperwork and work with all insurance companies',
  },
]

const commitments = [
  'Free, no-obligation estimates',
  'Transparent pricing—no hidden fees',
  'Only repairs you actually need',
  'Quality OEM & aftermarket parts',
  'Clear communication throughout',
  'Clean, professional facilities',
]

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-brand-blue-dark to-gray-900" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                Family-Owned Since Day One
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            >
              We Fix Cars.
              <br />
              <span className="text-white/80">We Don't Fix Prices.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/70 mb-8 max-w-2xl"
            >
              Tired of shops that overcharge, oversell, or overpromise? We get it.
              That's exactly why we started Car2Fix—to be the honest shop we wished existed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="tel:6072511509"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call (607) 251-1509</span>
              </a>
              <Link
                to="/mech-shop"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/20"
              >
                <span>Get Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
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

      {/* Our Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 text-brand-blue font-semibold mb-4">
                <Heart className="w-5 h-5" />
                Our Story
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-6">
                Started by Car People, for Car People
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg">
                <p>
                  <strong className="text-gray-900 dark:text-white">Here's the truth:</strong> we started Car2Fix because we were
                  frustrated. Frustrated with shops that charged for work that wasn't needed.
                  Frustrated with "mechanics" who couldn't explain what was wrong. Frustrated
                  with waiting weeks for simple repairs.
                </p>
                <p>
                  We knew there had to be a better way. So we built it.
                </p>
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-brand-blue to-brand-red p-1">
                <div className="w-full h-full rounded-3xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img
                    src="/logo.png"
                    alt="Car2Fix"
                    className="w-1/2 h-auto"
                  />
                </div>
              </div>
              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-6 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
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
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -top-6 -right-6 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-brand-blue font-semibold mb-4">
              <Target className="w-5 h-5" />
              What Makes Us Different
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
              The Car2Fix Promise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We don't just fix cars—we fix the auto repair experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-brand-red font-semibold mb-4">
                <Star className="w-5 h-5" />
                Why Choose Us
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-6">
                Your Car Deserves Better
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                We've built our reputation on doing right by our customers.
                Here's what you get when you choose Car2Fix:
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Our Commitment */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 lg:p-10"
            >
              <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-6">
                Our Commitment to You
              </h3>
              <div className="space-y-4">
                {commitments.map((commitment, index) => (
                  <motion.div
                    key={commitment}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{commitment}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400 italic">
                  "We don't succeed unless you're completely satisfied with your repair.
                  That's not marketing—that's how we run our business."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-brand-blue font-semibold mb-4">
              <MapPin className="w-5 h-5" />
              Our Locations
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
              Two Shops, One Standard of Excellence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Conveniently located to serve Newark, Linden, and surrounding communities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mechanical Shop Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
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

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>408 Carnegie Ave, Newark, NJ 07114</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <Clock className="w-5 h-5 flex-shrink-0" />
                    <span>Mon-Fri: 8am-6pm | Sat: 8am-2pm</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <a href="tel:6072511509" className="hover:text-brand-blue">(607) 251-1509</a>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Full-service mechanical repairs: engines, transmissions, brakes,
                  diagnostics, oil changes, and more.
                </p>

                <Link
                  to="/mech-shop"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold rounded-full transition-colors"
                >
                  <span>View Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Body Shop Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
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

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>1420 E Elizabeth Ave, Linden, NJ 07036</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <Clock className="w-5 h-5 flex-shrink-0" />
                    <span>Mon-Fri: 8am-6pm</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <a href="tel:6072511509" className="hover:text-brand-red">(607) 251-1509</a>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Collision repair, auto painting, dent removal, frame straightening,
                  and complete body restoration.
                </p>

                <Link
                  to="/body-shop"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-full transition-colors"
                >
                  <span>View Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Ready to Experience Honest Auto Repair?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              No pressure. No upselling. Just a free estimate and straight talk about what your car actually needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:6072511509"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-brand-red/25"
              >
                <Phone className="w-5 h-5" />
                <span>Call (607) 251-1509</span>
              </a>
              <Link
                to="/mech-shop#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/20"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
