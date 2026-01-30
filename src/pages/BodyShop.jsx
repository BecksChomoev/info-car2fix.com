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
  Phone,
  Award,
  BadgeCheck,
  CalendarCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { useState } from 'react'
import ServiceCard from '../components/ServiceCard'
import ContactForm from '../components/ContactForm'
import GoogleReviews from '../components/GoogleReviews'

// Before & After Gallery Component
function BeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Placeholder gallery items - replace with actual before/after images
  const galleryItems = [
    {
      id: 1,
      title: 'Collision Repair',
      description: 'Major front-end collision damage fully restored',
      before: '/gallery/before-1.jpg',
      after: '/gallery/after-1.jpg',
    },
    {
      id: 2,
      title: 'Paint Restoration',
      description: 'Complete paint job with factory color match',
      before: '/gallery/before-2.jpg',
      after: '/gallery/after-2.jpg',
    },
    {
      id: 3,
      title: 'Dent Removal',
      description: 'Paintless dent repair on side panel',
      before: '/gallery/before-3.jpg',
      after: '/gallery/after-3.jpg',
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-4xl text-gray-900 dark:text-white mb-4">
            Before & After Gallery
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See the quality of our work with real examples from our shop
          </p>
        </motion.div>

        {/* Gallery Slider */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {/* Before Image */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] bg-gray-200 dark:bg-gray-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4 sm:p-8">
                    <Car className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
                    <p className="text-gray-500 dark:text-gray-400 font-medium text-sm sm:text-base">Before Image</p>
                    <p className="text-gray-400 dark:text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2 hidden sm:block">
                      Add your before photos to /public/gallery/
                    </p>
                  </div>
                </div>
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 bg-gray-900/80 text-white text-xs sm:text-sm font-medium rounded-full">
                  Before
                </div>
              </div>

              {/* After Image */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] bg-gray-200 dark:bg-gray-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4 sm:p-8">
                    <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 text-brand-red mx-auto mb-3 sm:mb-4" />
                    <p className="text-gray-500 dark:text-gray-400 font-medium text-sm sm:text-base">After Image</p>
                    <p className="text-gray-400 dark:text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2 hidden sm:block">
                      Add your after photos to /public/gallery/
                    </p>
                  </div>
                </div>
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 bg-brand-red text-white text-xs sm:text-sm font-medium rounded-full">
                  After
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="p-4 sm:p-6 text-center">
              <h3 className="font-display font-semibold text-lg sm:text-xl text-gray-900 dark:text-white mb-1 sm:mb-2">
                {galleryItems[currentIndex].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                {galleryItems[currentIndex].description}
              </p>
            </div>
          </motion.div>

          {/* Navigation Arrows - Hidden on small mobile, visible on larger screens */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-brand-red'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

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
      <section className="relative min-h-[100svh] sm:min-h-[80vh] flex items-start sm:items-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red via-brand-red-dark to-red-900" />

        {/* Hero Image - Desktop */}
        <div className="absolute right-0 bottom-0 w-[55%] h-full hidden lg:flex items-end justify-center">
          <motion.img
            src="/BodyShop.png"
            alt="Body Shop"
            className="max-w-full max-h-[85%] object-contain drop-shadow-2xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Hero Image - Mobile/Tablet */}
        <div className="absolute left-0 right-0 bottom-0 h-[35vh] sm:h-[40vh] lg:hidden flex items-end justify-center pointer-events-none">
          <motion.img
            src="/BodyShop.png"
            alt="Body Shop"
            className="w-auto h-full max-w-[90%] object-contain drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:py-20 w-full">
          <div className="max-w-xl lg:pb-0 pb-[38vh] sm:pb-[42vh]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
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
              <span className="text-white/90">Work & Collision Repair</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/80 mb-8 max-w-md"
            >
              From minor dents to major collision damage, we restore your vehicle
              to its original beauty with precision and care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-3 mb-8"
            >
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="w-5 h-5 text-white" />
                <span>1420 E Elizabeth Ave, Linden, NJ 07036</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-5 h-5 text-white" />
                <span>Mon-Fri: 8am-6pm</span>
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
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-brand-red font-semibold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl hover:shadow-white/25"
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

      {/* Certifications & Insurance Section */}
      <section className="py-16 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl text-gray-900 dark:text-white mb-4">
              Certified & Trusted
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our technicians are certified professionals committed to the highest standards of quality
            </p>
          </motion.div>

          {/* Certifications */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'I-CAR Certified', icon: Award },
              { name: 'ASE Certified', icon: BadgeCheck },
              { name: 'OEM Certified', icon: Shield },
              { name: 'EPA Compliant', icon: BadgeCheck },
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700"
              >
                <cert.icon className="w-10 h-10 text-brand-red mb-3" />
                <span className="font-semibold text-gray-900 dark:text-white text-center">{cert.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Insurance Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-6">
              Insurance Partners We Work With
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {['GEICO', 'State Farm', 'Progressive', 'Allstate', 'Liberty Mutual', 'USAA'].map((insurance) => (
                <span key={insurance} className="text-lg font-semibold text-gray-500 dark:text-gray-400">
                  {insurance}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Warranty Guarantee */}
      <section className="py-16 bg-brand-red/5 dark:bg-brand-red/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left"
          >
            <div className="w-20 h-20 rounded-full bg-brand-red/10 dark:bg-brand-red/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-10 h-10 text-brand-red" />
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-2">
                Lifetime Warranty on All Repairs
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-xl">
                We stand behind our work with a lifetime warranty on all collision repairs.
                Your satisfaction and safety are our top priorities.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white font-bold rounded-full">
                <BadgeCheck className="w-5 h-5" />
                Guaranteed
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <BeforeAfterGallery />

      {/* Insurance Claims Info */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Shield className="w-12 h-12 text-brand-red mx-auto mb-4" />
            <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-3">
              We Handle Your Insurance Claims
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We handle the insurance claims process for you, making your collision repair experience
              as stress-free as possible. Just bring your vehicle in and we'll take care of the rest.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Customer Reviews */}
      <GoogleReviews variant="default" shopType="body" />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900 scroll-mt-24">
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
