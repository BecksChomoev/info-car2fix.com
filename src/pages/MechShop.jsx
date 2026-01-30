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
  Phone,
  Award,
  BadgeCheck,
  Shield,
  CalendarCheck
} from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import ContactForm from '../components/ContactForm'
import GoogleReviews from '../components/GoogleReviews'

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
      <section className="relative min-h-[100svh] sm:min-h-[80vh] flex items-start sm:items-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue-dark to-blue-900" />

        {/* Hero Images - Desktop */}
        <div className="absolute right-0 bottom-0 w-[55%] h-full hidden lg:flex items-end justify-end">
          {/* Gear - Back */}
          <motion.img
            src="/hero-gear.png"
            alt="Gear"
            className="absolute right-[15%] bottom-[5%] w-[45%] object-contain drop-shadow-2xl"
            initial={{ opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />
          {/* Brake - Front */}
          <motion.img
            src="/hero-brake.png"
            alt="Brake Disc"
            className="absolute right-[5%] bottom-[10%] w-[40%] object-contain drop-shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        {/* Hero Images - Mobile/Tablet */}
        <div className="absolute left-0 right-0 bottom-0 h-[30vh] sm:h-[35vh] lg:hidden flex items-end justify-center pointer-events-none">
          <motion.img
            src="/hero-gear.png"
            alt="Gear"
            className="absolute left-[2%] bottom-0 h-[90%] w-auto object-contain drop-shadow-2xl opacity-90"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.9, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.img
            src="/hero-brake.png"
            alt="Brake Disc"
            className="absolute right-[2%] bottom-[5%] h-[85%] w-auto object-contain drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:py-20 w-full">
          <div className="max-w-xl lg:pb-0 pb-[32vh] sm:pb-[38vh]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
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
              <span className="text-white/90">Repairs & Service</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/80 mb-8 max-w-md"
            >
              From routine maintenance to complex repairs, our certified technicians
              have the expertise to keep your vehicle running at its best.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-3 mb-8"
            >
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="w-5 h-5 text-white" />
                <span>408 Carnegie Ave, Newark, NJ 07114</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-5 h-5 text-white" />
                <span>Mon-Fri: 8am-6pm | Sat: 8am-2pm</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-brand-blue font-semibold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl hover:shadow-white/25"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>Book Appointment</span>
              </a>
              <a
                href="tel:6072511509"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/30"
              >
                <Phone className="w-5 h-5" />
                <span>(607) 251-1509</span>
              </a>
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

      {/* Certifications & Warranty */}
      <section className="py-16 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-6">
                Certified Professionals
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'ASE Certified', icon: Award },
                  { name: 'Factory Trained', icon: BadgeCheck },
                  { name: 'EPA Compliant', icon: Shield },
                  { name: 'State Licensed', icon: BadgeCheck },
                ].map((cert, index) => (
                  <div
                    key={cert.name}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800"
                  >
                    <cert.icon className="w-6 h-6 text-brand-blue flex-shrink-0" />
                    <span className="font-medium text-gray-900 dark:text-white text-sm">{cert.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Warranty Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-brand-blue/5 dark:bg-brand-blue/10"
            >
              <div className="w-16 h-16 rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-2">
                12-Month / 12,000-Mile Warranty
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                All our mechanical repairs are backed by our comprehensive warranty for your peace of mind.
              </p>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue text-white font-semibold rounded-full text-sm">
                <BadgeCheck className="w-4 h-4" />
                Guaranteed
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <GoogleReviews variant="light" shopType="mechanical" />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950 scroll-mt-24">
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
                      href="https://maps.app.goo.gl/ijzToSvEj6ask7e17"
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
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3024!2d-74.1877054!3d40.6983032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c252e676fe7d6b%3A0x252634390a5adf5f!2sDrivo%20Rent%20A%20Car!5e0!3m2!1sen!2sus!4v1"
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
