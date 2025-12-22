import { motion } from 'framer-motion'
import { 
  Wrench, 
  Gauge, 
  Battery, 
  Thermometer,
  Disc,
  Cog,
  Fuel,
  Wind,
  Zap,
  Droplets,
  Settings,
  AlertTriangle,
  MapPin,
  Clock,
  Phone
} from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import ContactForm from '../components/ContactForm'

const services = [
  {
    icon: Gauge,
    title: 'Engine Diagnostics',
    description: 'Advanced computer diagnostics to identify engine issues accurately and efficiently.',
  },
  {
    icon: Wrench,
    title: 'Engine Repair',
    description: 'Complete engine repair and rebuilding services for all makes and models.',
  },
  {
    icon: Cog,
    title: 'Transmission Service',
    description: 'Transmission repair, rebuild, and fluid services to keep you shifting smoothly.',
  },
  {
    icon: Disc,
    title: 'Brake Services',
    description: 'Brake pad replacement, rotor resurfacing, and complete brake system repairs.',
  },
  {
    icon: Droplets,
    title: 'Oil Change',
    description: 'Full synthetic, synthetic blend, and conventional oil changes with filter replacement.',
  },
  {
    icon: Battery,
    title: 'Battery Service',
    description: 'Battery testing, replacement, and electrical system diagnostics.',
  },
  {
    icon: Thermometer,
    title: 'Cooling System',
    description: 'Radiator repair, coolant flush, thermostat replacement, and leak repairs.',
  },
  {
    icon: Wind,
    title: 'A/C Service',
    description: 'Air conditioning diagnostics, recharge, and repair to keep you cool.',
  },
  {
    icon: Settings,
    title: 'Suspension & Steering',
    description: 'Shocks, struts, tie rods, and alignment services for a smooth ride.',
  },
  {
    icon: Fuel,
    title: 'Fuel System',
    description: 'Fuel pump, fuel injector, and fuel filter services and repairs.',
  },
  {
    icon: Zap,
    title: 'Electrical Repairs',
    description: 'Starter, alternator, wiring, and all electrical system diagnostics and repairs.',
  },
  {
    icon: AlertTriangle,
    title: 'Check Engine Light',
    description: 'Diagnostic services to identify and resolve check engine light issues.',
  },
]

export default function MechShop() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue-dark to-gray-900" />
        <div className="absolute inset-0 noise-overlay" />
        
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue-light/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                <Wrench className="w-4 h-4" />
                <span>Mechanical Services</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6"
            >
              Expert Mechanical
              <br />
              <span className="text-white/80">Repairs & Service</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/70 mb-8 max-w-xl"
            >
              From routine maintenance to complex repairs, our certified technicians 
              have the expertise to keep your vehicle running at its best.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 text-white/80"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-blue-light" />
                <span>408 Carnegie Ave, Newark, NJ 07114</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-blue-light" />
                <span>Mon-Fri: 8am-6pm | Sat: 8am-2pm</span>
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
              Our Mechanical Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive automotive repair and maintenance services
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
                variant="blue"
              />
            ))}
          </div>
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
                Fill out the form and our team will get back to you with a quote. 
                You can also give us a call for immediate assistance.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                    <a href="tel:6072511509" className="text-brand-blue hover:underline text-lg">
                      (607) 251-1509
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Address</h4>
                    <a 
                      href="https://maps.google.com/?q=408+Carnegie+Ave+Newark+NJ+07114"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-brand-blue"
                    >
                      408 Carnegie Ave<br />Newark, NJ 07114
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Hours</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 8:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                <iframe
                  title="Mechanical Shop Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.5!2d-74.17!3d40.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s408+Carnegie+Ave%2C+Newark%2C+NJ+07114!5e0!3m2!1sen!2sus!4v1"
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
              <ContactForm shopType="mechanical" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
