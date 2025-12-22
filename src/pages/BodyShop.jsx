import { motion } from 'framer-motion'
import { 
  Car, 
  Paintbrush, 
  Sparkles,
  Hammer,
  Shield,
  Wind,
  Layers,
  ScanLine,
  Glasses,
  Dices,
  Frame,
  CircleDot,
  MapPin,
  Clock,
  Phone
} from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import ContactForm from '../components/ContactForm'

const services = [
  {
    icon: Car,
    title: 'Collision Repair',
    description: 'Complete collision repair services to restore your vehicle to pre-accident condition.',
  },
  {
    icon: Paintbrush,
    title: 'Auto Painting',
    description: 'Professional paint jobs with color matching and high-quality finishes.',
  },
  {
    icon: Hammer,
    title: 'Dent Removal',
    description: 'Paintless dent repair and traditional dent removal for all sizes of damage.',
  },
  {
    icon: Frame,
    title: 'Frame Straightening',
    description: 'Precision frame alignment and straightening using computerized equipment.',
  },
  {
    icon: Sparkles,
    title: 'Scratch Repair',
    description: 'Expert scratch and scuff removal to restore your vehicle\'s finish.',
  },
  {
    icon: Glasses,
    title: 'Glass Replacement',
    description: 'Windshield and auto glass replacement and repair services.',
  },
  {
    icon: Layers,
    title: 'Panel Replacement',
    description: 'Replacement of damaged body panels including fenders, doors, and hoods.',
  },
  {
    icon: Shield,
    title: 'Rust Repair',
    description: 'Rust removal and prevention treatments to protect your vehicle.',
  },
  {
    icon: Wind,
    title: 'Bumper Repair',
    description: 'Front and rear bumper repair, replacement, and refinishing.',
  },
  {
    icon: ScanLine,
    title: 'Color Matching',
    description: 'Computer-aided color matching for seamless paint repairs.',
  },
  {
    icon: Dices,
    title: 'Fiberglass Repair',
    description: 'Repair of fiberglass body parts and components.',
  },
  {
    icon: CircleDot,
    title: 'Headlight Restoration',
    description: 'Restore cloudy, yellowed headlights to like-new clarity.',
  },
]

export default function BodyShop() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red via-brand-red-dark to-gray-900" />
        <div className="absolute inset-0 noise-overlay" />
        
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red-light/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                <Car className="w-4 h-4" />
                <span>Body Shop Services</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6"
            >
              Professional Body
              <br />
              <span className="text-white/80">Work & Collision Repair</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/70 mb-8 max-w-xl"
            >
              From minor dents to major collision damage, we restore your vehicle 
              to its original beauty with precision and care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 text-white/80"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-red-light" />
                <span>1420 E Elizabeth Ave, Linden, NJ 07036</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-red-light" />
                <span>Mon-Fri: 8am-6pm</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl text-gray-900 dark:text-white mb-4">
              Our Body Shop Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Complete auto body repair and restoration services
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.05}
                variant="red"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Info */}
      <section className="py-16 bg-brand-red/5 dark:bg-brand-red/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Shield className="w-12 h-12 text-brand-red mx-auto mb-4" />
            <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-3">
              We Work With All Insurance Companies
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We handle the insurance claims process for you, making your collision repair experience 
              as stress-free as possible. Just bring your vehicle in and we'll take care of the rest.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-bold text-4xl text-gray-900 dark:text-white mb-6">
                Get a Free Estimate
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Whether it's a minor scratch or major collision damage, we'll provide 
                you with an accurate estimate. Contact us today!
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-red/10 dark:bg-brand-red/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                    <a href="tel:6072511509" className="text-brand-red hover:underline text-lg">
                      (607) 251-1509
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-red/10 dark:bg-brand-red/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Address</h4>
                    <a 
                      href="https://maps.google.com/?q=1420+E+Elizabeth+Ave+Linden+NJ+07036"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-brand-red"
                    >
                      1420 E Elizabeth Ave<br />Linden, NJ 07036
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-red/10 dark:bg-brand-red/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Hours</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                <iframe
                  title="Body Shop Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.5!2d-74.24!3d40.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1420+E+Elizabeth+Ave%2C+Linden%2C+NJ+07036!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* Form Side */}
            <div>
              <ContactForm shopType="body" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
