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
  MapPin
} from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'We never compromise on the quality of our work. Every repair is done right the first time.',
  },
  {
    icon: Heart,
    title: 'Customer Care',
    description: 'We treat every customer like family. Your satisfaction is our top priority.',
  },
  {
    icon: Lightbulb,
    title: 'Honest Service',
    description: 'Transparent pricing and honest assessments. We only recommend what you truly need.',
  },
]

const commitments = [
  'Free estimates on all services',
  'Certified and experienced technicians',
  'Quality parts and materials',
  'Competitive and transparent pricing',
  'Fast turnaround times',
  'Customer satisfaction guaranteed',
  'Insurance claims assistance',
  'Convenient locations in Newark and Linden',
]

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-brand-blue-dark to-gray-900" />
        <div className="absolute inset-0 noise-overlay" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-brand-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              About Us
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6"
          >
            Quality Repairs
            <br />
            <span className="text-gradient bg-gradient-to-r from-brand-blue-light to-brand-red-light">You Can Trust</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Your trusted automotive partner in Newark and Linden, New Jersey
          </motion.p>
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
              <span className="text-brand-blue font-semibold mb-4 block">Our Story</span>
              <h2 className="font-display font-bold text-4xl text-gray-900 dark:text-white mb-6">
                Building Trust, One Repair at a Time
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Car2Fix was founded with a simple mission: to provide honest, high-quality 
                  automotive repair services at fair prices. We saw too many people getting 
                  overcharged or receiving subpar work, and we knew there had to be a better way.
                </p>
                <p>
                  Starting with a small mechanical shop in Newark, we quickly earned a reputation 
                  for reliability and excellence. Our customers kept coming back, and they started 
                  bringing their friends and family. That trust allowed us to expand and open our 
                  body shop in Linden.
                </p>
                <p>
                  Today, Car2Fix serves the greater Newark and Linden communities with comprehensive 
                  automotive services. Whether you need a simple oil change or major collision repair, 
                  our team of certified technicians is ready to help. We treat every vehicle as if it 
                  were our own, because we know how important your car is to your daily life.
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
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-blue to-brand-red p-1">
                <div className="w-full h-full rounded-3xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <img 
                    src="/logo.png" 
                    alt="Car2Fix" 
                    className="w-2/3 h-auto"
                  />
                </div>
              </div>
              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-6 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">Mech Shop</p>
                    <p className="text-sm text-gray-500">Newark, NJ</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -top-6 -right-6 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center">
                    <Car className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">Body Shop</p>
                    <p className="text-sm text-gray-500">Linden, NJ</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand-blue font-semibold mb-4 block">Our Values</span>
            <h2 className="font-display font-bold text-4xl text-gray-900 dark:text-white mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These core values guide everything we do at Car2Fix
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
                className="p-8 rounded-3xl bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-red flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-red font-semibold mb-4 block">Our Commitment</span>
              <h2 className="font-display font-bold text-4xl text-gray-900 dark:text-white mb-6">
                What You Can Expect From Us
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                When you choose Car2Fix, you're choosing a partner who genuinely cares about 
                your vehicle and your experience. Here's what we promise to deliver:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Location Cards */}
              <div className="p-6 rounded-2xl bg-brand-blue/5 dark:bg-brand-blue/10 border-2 border-brand-blue/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-1">
                      Mechanical Shop
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      408 Carnegie Ave, Newark, NJ 07114
                    </p>
                    <Link
                      to="/mech-shop"
                      className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all"
                    >
                      <span>View Services</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-brand-red/5 dark:bg-brand-red/10 border-2 border-brand-red/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-red flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-1">
                      Body Shop
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      1420 E Elizabeth Ave, Linden, NJ 07036
                    </p>
                    <Link
                      to="/body-shop"
                      className="inline-flex items-center gap-2 text-brand-red font-semibold hover:gap-3 transition-all"
                    >
                      <span>View Services</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl text-white mb-6">
              Ready to Experience the Car2Fix Difference?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Visit one of our locations or give us a call today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/mech-shop"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-blue font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                <Wrench className="w-5 h-5" />
                <span>Mechanical Services</span>
              </Link>
              <Link
                to="/body-shop"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/20"
              >
                <Car className="w-5 h-5" />
                <span>Body Shop Services</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
