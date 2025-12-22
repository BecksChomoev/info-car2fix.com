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
  Star
} from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'All our repairs come with a satisfaction guarantee. We stand behind our work.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'We value your time. Most repairs completed within the estimated timeframe.',
  },
  {
    icon: Award,
    title: 'Certified Technicians',
    description: 'Our team consists of experienced, certified automotive professionals.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Transparent pricing and honest assessments. No surprises, ever.',
  },
]

const testimonials = [
  {
    name: 'Michael R.',
    text: 'Best auto shop in Newark! They fixed my transmission issue quickly and at a fair price.',
    rating: 5,
  },
  {
    name: 'Sarah K.',
    text: 'The body work on my car looks perfect. You can\'t even tell it was in an accident.',
    rating: 5,
  },
  {
    name: 'James T.',
    text: 'Honest, professional, and skilled. I won\'t take my car anywhere else.',
    rating: 5,
  },
]

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background */}
        <div className="absolute inset-0 hero-gradient opacity-95" />
        <div className="absolute inset-0 noise-overlay" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                Newark & Linden, New Jersey
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6"
            >
              Quality Repairs
              <br />
              <span className="text-white/80">You Can Trust</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/80 mb-10 max-w-xl"
            >
              Professional automotive mechanical and body shop services. 
              From engine repairs to collision work, we've got you covered.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/mech-shop"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-blue font-semibold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl"
              >
                <Wrench className="w-5 h-5" />
                <span>Mechanical Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/body-shop"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20"
              >
                <Car className="w-5 h-5" />
                <span>Body Shop Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-3 bg-white/80 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Two Locations Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
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
              initial={{ opacity: 0, x: -30 }}
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
              initial={{ opacity: 0, x: 30 }}
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
            initial={{ opacity: 0, y: 20 }}
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
                initial={{ opacity: 0, y: 20 }}
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

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">
              What Our Customers Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  — {testimonial.name}
                </p>
              </motion.div>
            ))}
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
