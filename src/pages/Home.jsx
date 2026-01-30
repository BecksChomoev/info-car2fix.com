import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Wrench,
  Car,
  Shield,
  Clock,
  Award,
  Users,
  ArrowRight,
  Phone,
  MapPin,
  CalendarCheck,
  BadgeCheck
} from 'lucide-react'
import GoogleReviews from '../components/GoogleReviews'

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
    icon: Users,
    title: 'Customer First',
    description: 'Transparent pricing and honest assessments. No surprises, ever.',
  },
]


export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] sm:min-h-[90vh] flex items-start sm:items-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-red-dark" />

        {/* Hero Image - Desktop */}
        <div className="absolute right-0 bottom-0 w-[55%] h-full hidden lg:flex items-end justify-center">
          <motion.img
            src="/home.png"
            alt="Home Page Banner"
            className="max-w-full max-h-[85%] object-contain drop-shadow-2xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Hero Image - Mobile/Tablet */}
        <div className="absolute left-0 right-0 bottom-0 h-[35vh] sm:h-[40vh] lg:hidden flex items-end justify-center pointer-events-none">
          <motion.img
            src="/home.png"
            alt="Home Page Banner"
            className="w-auto h-full max-w-[85%] object-contain drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:py-20 w-full">
          <div className="max-w-xl lg:pb-0 pb-[38vh] sm:pb-[42vh]">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
                Newark & Linden, New Jersey
              </span>
            </motion.div>

            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              Quality Repairs
              <br />
              <span className="text-white/90">You Can Trust</span>
            </motion.h1>

            <motion.p
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/80 mb-8 max-w-md"
            >
              Professional automotive mechanical and body shop services.
              From engine repairs to collision work, we've got you covered.
            </motion.p>

            <motion.div
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-6"
            >
              <Link
                to="/mech-shop"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-brand-blue font-semibold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl hover:shadow-white/25"
              >
                <Wrench className="w-5 h-5" />
                <span>Mechanical Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/body-shop"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/30"
              >
                <Car className="w-5 h-5" />
                <span>Body Shop Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Quick Contact */}
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="tel:6072511509"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">(607) 251-1509</span>
              </a>
              <span className="text-white/40">|</span>
              <div className="flex items-center gap-2 text-white/80">
                <BadgeCheck className="w-5 h-5 text-green-400" />
                <span>Free Estimates</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Finder Section */}
      <section className="py-8 bg-gray-900 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-white">
              <MapPin className="w-6 h-6 text-brand-red" />
              <span className="font-semibold text-lg">Find Your Nearest Location</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/mech-shop"
                className="inline-flex items-center gap-3 px-6 py-3 bg-brand-blue hover:bg-brand-blue-dark text-white rounded-full transition-colors"
              >
                <Wrench className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-semibold">Newark - Mechanical</div>
                  <div className="text-sm text-white/70">408 Carnegie Ave</div>
                </div>
              </Link>
              <Link
                to="/body-shop"
                className="inline-flex items-center gap-3 px-6 py-3 bg-brand-red hover:bg-brand-red-dark text-white rounded-full transition-colors"
              >
                <Car className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-semibold">Linden - Body Shop</div>
                  <div className="text-sm text-white/70">1420 E Elizabeth Ave</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two Locations Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">
              Two Locations to Serve You
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Conveniently located in Newark and Linden, NJ
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mechanical Shop Card */}
            <motion.div
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
                <div className="flex items-start gap-2 text-white/80 mb-2">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>408 Carnegie Ave, Newark, NJ 07114</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 mb-6">
                  <Clock className="w-5 h-5 flex-shrink-0" />
                  <span>Mon-Fri: 8am-6pm | Sat: 8am-2pm</span>
                </div>
                <Link
                  to="/mech-shop"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-blue font-semibold rounded-full hover:bg-gray-100 transition-colors"
                >
                  <span>View Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Body Shop Card */}
            <motion.div
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
                <div className="flex items-start gap-2 text-white/80 mb-2">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>1420 E Elizabeth Ave, Linden, NJ 07036</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 mb-6">
                  <Clock className="w-5 h-5 flex-shrink-0" />
                  <span>Mon-Fri: 8am-6pm</span>
                </div>
                <Link
                  to="/body-shop"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-red font-semibold rounded-full hover:bg-gray-100 transition-colors"
                >
                  <span>View Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">
              Why Choose Car2Fix?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We're committed to providing exceptional service and quality repairs
            </p>
          </motion.div>

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

      {/* Customer Reviews */}
      <GoogleReviews variant="light" shopType="both" />

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">
              Ready to Get Your Car Fixed?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Contact us today for a free estimate
            </p>
            <a
              href="tel:6072511509"
              className="inline-flex items-center gap-3 px-10 py-5 bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-lg rounded-full transition-all hover:shadow-xl hover:shadow-brand-red/25"
            >
              <Phone className="w-6 h-6" />
              <span>(607) 251-1509</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
