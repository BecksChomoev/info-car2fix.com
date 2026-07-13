'use client'

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
  LifeBuoy,
  Flame,
  ClipboardCheck,
  MapPin,
  Clock,
  Phone,
  Award,
  BadgeCheck,
  Shield,
  CalendarCheck,
} from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import ContactForm from '@/components/ContactForm'
import GoogleReviews from '@/components/GoogleReviews'
import { PHONE, MECH_SHOP } from '@/lib/site'

const services = [
  { icon: Gauge, title: 'Engine Diagnostics', description: 'Advanced computer diagnostics to identify engine issues accurately and efficiently.', href: '/engine-diagnostics-newark-nj' },
  { icon: Wrench, title: 'Engine Repair', description: 'Complete engine repair and rebuilding services for all makes and models.', href: '/engine-repair-newark-nj' },
  { icon: Cog, title: 'Transmission Service', description: 'Transmission repair, rebuild, and fluid services to keep you shifting smoothly.', href: '/transmission-repair-newark-nj' },
  { icon: Disc, title: 'Brake Services', description: 'Brake pad replacement, rotor resurfacing, and complete brake system repairs.', href: '/brake-repair-newark-nj' },
  { icon: Droplets, title: 'Oil Change', description: 'Full synthetic, synthetic blend, and conventional oil changes with filter replacement.', href: '/oil-change-newark-nj' },
  { icon: Battery, title: 'Battery Service', description: 'Battery testing, replacement, and electrical system diagnostics.', href: '/battery-replacement-newark-nj' },
  { icon: Thermometer, title: 'Cooling System', description: 'Radiator repair, coolant flush, thermostat replacement, and leak repairs.' },
  { icon: Wind, title: 'A/C Service', description: 'Air conditioning diagnostics, recharge, and repair to keep you cool.', href: '/ac-repair-newark-nj' },
  { icon: Settings, title: 'Suspension & Steering', description: 'Shocks, struts, tie rods, and alignment services for a smooth ride.', href: '/suspension-repair-newark-nj' },
  { icon: LifeBuoy, title: 'Tire Service', description: 'New tire mounting and balancing, rotation, flat repair, and TPMS service.', href: '/tire-service-newark-nj' },
  { icon: Flame, title: 'Exhaust Repair', description: 'Muffler, pipe, catalytic converter, and oxygen sensor repair and replacement.', href: '/exhaust-repair-newark-nj' },
  { icon: Fuel, title: 'Fuel System', description: 'Fuel pump, fuel injector, and fuel filter services and repairs.' },
  { icon: Zap, title: 'Electrical Repairs', description: 'Starter, alternator, wiring, and all electrical system diagnostics and repairs.', href: '/auto-electrical-repair-newark-nj' },
  { icon: AlertTriangle, title: 'Check Engine Light', description: 'Diagnostic services to identify and resolve check engine light issues.', href: '/engine-diagnostics-newark-nj' },
  { icon: ClipboardCheck, title: 'Car Inspection', description: 'Pre-purchase and multi-point inspections, plus failed NJ inspection repairs.', href: '/car-inspection-newark-nj' },
]

export default function MechShopContent() {
  return (
    <div>
      <section className="relative overflow-hidden pt-12 pb-8 sm:pt-16 sm:pb-10 lg:py-0 lg:min-h-[80vh] lg:flex lg:items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue-dark to-blue-900" />

        <div className="absolute right-0 bottom-0 w-[55%] h-full hidden lg:flex items-end justify-end">
          <motion.img
            src="/hero-gear.png"
            alt="Mechanical gear"
            className="absolute right-[15%] bottom-[5%] w-[45%] object-contain drop-shadow-2xl"
            initial={{ opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />
          <motion.img
            src="/hero-brake.png"
            alt="Brake disc"
            className="absolute right-[5%] bottom-[10%] w-[40%] object-contain drop-shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-20 w-full">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
              <Wrench className="w-4 h-4" />
              <span>Mechanical Services</span>
            </span>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Mechanical Repair{' '}
              <br />
              <span className="text-white/90">Shop in Newark</span>
            </h1>

            <p className="text-lg text-white/80 mb-8 max-w-md">
              Expert repairs and service — from routine maintenance to complex jobs,
              our certified technicians keep your vehicle running at its best.
            </p>

            <address className="not-italic space-y-3 mb-8">
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="w-5 h-5 text-white" />
                <span>{MECH_SHOP.address}</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-5 h-5 text-white" />
                <span>{MECH_SHOP.hoursShort}</span>
              </div>
            </address>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-brand-blue font-semibold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl hover:shadow-white/25"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>Book Appointment</span>
              </a>
              <a
                href={PHONE.href}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/30"
              >
                <Phone className="w-5 h-5" />
                <span>{PHONE.display}</span>
              </a>
            </div>
          </div>

          <div className="lg:hidden relative w-[92%] max-w-[400px] mx-auto mt-10 aspect-[13/10]">
            <motion.img
              src="/hero-gear.png"
              alt="Mechanical gear"
              className="absolute left-0 bottom-0 w-[62%] object-contain drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            <motion.img
              src="/hero-brake.png"
              alt="Brake disc"
              className="absolute right-0 top-0 w-[58%] object-contain drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 dark:text-white mb-4">
              Full-Service Auto Repair
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive automotive repair and maintenance services in Newark, NJ
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.05}
                variant="blue"
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-4">
              Certified Technicians in New Jersey
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { name: 'ASE Certified', icon: Award },
              { name: 'Factory Trained', icon: BadgeCheck },
              { name: 'EPA Compliant', icon: Shield },
              { name: 'State Licensed', icon: BadgeCheck },
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700"
              >
                <cert.icon className="w-10 h-10 text-brand-blue" />
                <span className="font-semibold text-gray-900 dark:text-white text-center text-sm">{cert.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews
        variant="light"
        shopType="mechanical"
        heading="What Newark Drivers Say About Car2Fix"
      />

      <section id="contact" className="py-14 lg:py-20 bg-gray-50 dark:bg-gray-950 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
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
              </div>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                <iframe
                  title="Mechanical Shop Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3024!2d-74.1876499!3d40.6982681!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25315896ec88f%3A0x350c51bc8912b158!2sCar2Fix%20Mechanic%20Shop!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
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
