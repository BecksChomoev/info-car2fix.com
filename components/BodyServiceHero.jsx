'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, CalendarCheck, ShieldCheck } from 'lucide-react'
import { BODY_SHOP } from '@/lib/site'
import { SERVICE_ICONS } from '@/app/(marketing)/[slug]/icons'

// Body-shop service detail hero. Unlike the mechanical ServiceHero (which
// composes per-slug Figma banner renders), the body pages have no bespoke art,
// so the hero carries a large icon medallion on a red Linden-branded gradient
// that mirrors the /body-shop page hero. Keeps the H1 split on " in " so the
// Figma copy pattern ("<Service>" / "in Linden, NJ") renders on two lines.
export default function BodyServiceHero({ page }) {
  const HeroIcon = SERVICE_ICONS[page.icon] || SERVICE_ICONS.Car

  const splitIndex = page.h1.indexOf(' in ')
  const h1Line1 = splitIndex === -1 ? page.h1 : page.h1.slice(0, splitIndex)
  const h1Line2 = splitIndex === -1 ? null : page.h1.slice(splitIndex + 1)

  return (
    <section className="relative overflow-hidden bg-brand-red-dark pt-12 pb-8 sm:pt-14 sm:pb-10 lg:py-16 xl:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red via-brand-red-dark to-red-900" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 140% at 18% 0%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 45%), radial-gradient(130% 130% at 100% 100%, rgba(90,10,25,0.6) 0%, rgba(90,10,25,0) 55%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:max-w-[36rem]"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/95 text-sm font-medium mb-6 border border-white/20">
              <HeroIcon className="w-4 h-4" />
              <span>Body Shop Services · Linden, NJ</span>
            </span>

            <h1 className="font-display font-bold text-[2.125rem] sm:text-4xl lg:text-[2.75rem] text-white mb-6 leading-tight">
              {h1Line2 ? (
                <>
                  {h1Line1}
                  <br />
                  {h1Line2}
                </>
              ) : (
                page.h1
              )}
            </h1>

            <p className="text-white/80 text-base sm:text-lg lg:text-base mb-8 max-w-[34rem]">
              {page.intro}
            </p>

            <address className="not-italic space-y-3 mb-8 text-sm">
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="w-4 h-4 flex-shrink-0 text-white" />
                <span>{BODY_SHOP.address}</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-4 h-4 flex-shrink-0 text-white" />
                <span>{BODY_SHOP.hoursShort}</span>
              </div>
            </address>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-white text-brand-red font-semibold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl hover:shadow-white/25"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>Get a free estimate</span>
              </a>
              <a
                href={BODY_SHOP.phone.href}
                className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/25"
              >
                <Phone className="w-5 h-5" />
                <span>{BODY_SHOP.phone.display}</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-2 lg:mt-0 flex justify-center lg:justify-end lg:flex-1"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
              <div className="absolute inset-0 rounded-full bg-white/5 border border-white/10" aria-hidden="true" />
              <div className="absolute inset-6 rounded-full bg-white/5 border border-white/10" aria-hidden="true" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white/95 shadow-2xl shadow-black/25">
                  <HeroIcon className="w-14 h-14 sm:w-16 sm:h-16 text-brand-red" strokeWidth={1.75} />
                </div>
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-brand-red text-xs font-semibold shadow-lg whitespace-nowrap">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>I-CAR Certified</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
