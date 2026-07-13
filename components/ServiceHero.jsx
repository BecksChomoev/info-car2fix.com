'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, CalendarCheck, Droplet } from 'lucide-react'
import { PHONE, MECH_SHOP } from '@/lib/site'
import { SERVICE_ICONS } from '@/app/(marketing)/[slug]/icons'

// Per-slug hero art: main banner image + optional accent prop (composed on
// top/behind the main art) or a CSS-drawn droplet badge for oil-change.
// `mobile` overrides the art wrapper width below lg — the source renders have
// very different aspect ratios, so a single width would make tall/narrow arts
// (like the suspension coilover) tower over the layout on phones. Widths are
// chosen so every art lands at roughly 250–380px tall at a 375px viewport,
// matching the art zone of the tall Figma banner.
const ART = {
  'engine-diagnostics-newark-nj': {
    img: 'hero-engine-diagnostics',
  },
  'engine-repair-newark-nj': {
    img: 'hero-engine-repair',
    accent: { src: 'accent-warning', className: 'w-[34%] -bottom-2 -right-3 sm:-bottom-3 sm:-right-4' },
  },
  'transmission-repair-newark-nj': {
    img: 'hero-transmission-repair',
    mobile: 'w-[78%] max-w-[350px]',
  },
  'brake-repair-newark-nj': {
    img: 'hero-brake-repair',
    mobile: 'w-[76%] max-w-[340px]',
    accent: { src: 'accent-warning', className: 'w-[36%] -bottom-2 -right-4 sm:-bottom-3 sm:-right-5' },
  },
  'oil-change-newark-nj': {
    img: 'hero-oil-change',
    mobile: 'w-[64%] max-w-[280px]',
    droplet: true,
  },
  'battery-replacement-newark-nj': {
    img: 'hero-battery-replacement',
    mobile: 'w-[72%] max-w-[320px]',
    // Behind the battery: z-0 vs. the main art's z-10.
    accent: { src: 'accent-arrows', className: 'w-[45%] top-1/2 -translate-y-1/2 -right-[10%] z-0' },
  },
  'ac-repair-newark-nj': {
    img: 'hero-ac-repair',
  },
  'suspension-repair-newark-nj': {
    img: 'hero-suspension-repair',
    mobile: 'w-[42%] max-w-[190px]',
    accent: { src: 'accent-warning', className: 'w-[55%] top-[42%] -translate-y-1/2 -left-[12%]' },
  },
  'tire-service-newark-nj': {
    img: 'hero-tire-service',
    mobile: 'w-[70%] max-w-[310px]',
    accent: { src: 'accent-wrench', className: 'w-[48%] -bottom-2 -left-[8%]' },
  },
  'exhaust-repair-newark-nj': {
    img: 'hero-exhaust-repair',
    mobile: 'w-[86%] max-w-[440px]',
    accent: { src: 'accent-warning', className: 'w-[30%] -top-[10%] right-[8%]' },
  },
  'auto-electrical-repair-newark-nj': {
    img: 'hero-auto-electrical-repair',
    mobile: 'w-[62%] max-w-[270px]',
  },
  'car-inspection-newark-nj': {
    img: 'hero-car-inspection',
    mobile: 'w-[86%] max-w-[440px]',
  },
}

export default function ServiceHero({ page }) {
  const HeroIcon = SERVICE_ICONS[page.icon] || SERVICE_ICONS.Wrench
  const art = ART[page.slug] || { img: 'hero-engine-repair' }

  // The Figma copy always breaks the H1 as "<Service>" / "in Newark, NJ" —
  // split on the first " in " and fall back to a single line if a future
  // page.h1 doesn't follow that pattern.
  const splitIndex = page.h1.indexOf(' in ')
  const h1Line1 = splitIndex === -1 ? page.h1 : page.h1.slice(0, splitIndex)
  const h1Line2 = splitIndex === -1 ? null : page.h1.slice(splitIndex + 1)

  return (
    <section className="relative overflow-hidden bg-[#273990] pt-12 pb-8 sm:pt-14 sm:pb-10 lg:py-16 xl:py-20">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 140% at 18% 0%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 45%), radial-gradient(130% 130% at 100% 100%, #16205a 0%, rgba(22,32,90,0) 55%)',
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
              <span>Mechanical Services · Newark, NJ</span>
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
                <span>{MECH_SHOP.address}</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-4 h-4 flex-shrink-0 text-white" />
                <span>{MECH_SHOP.hoursShort}</span>
              </div>
            </address>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-white text-[#273990] font-semibold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl hover:shadow-white/25"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>Get a free estimate</span>
              </a>
              <a
                href={PHONE.href}
                className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/25"
              >
                <Phone className="w-5 h-5" />
                <span>{PHONE.display}</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-2 lg:mt-0 flex justify-center lg:justify-end lg:flex-1"
          >
            <div
              className={`relative block ${art.mobile || 'w-[86%] max-w-[400px]'} mx-auto lg:mx-0 lg:inline-block lg:w-auto lg:max-w-full`}
            >
              <img
                src={`/banners/${art.img}.webp`}
                alt=""
                aria-hidden="true"
                draggable={false}
                loading="eager"
                className="relative z-10 block w-full h-auto lg:w-auto lg:h-auto lg:max-h-[420px] xl:max-h-[460px] lg:max-w-full object-contain"
              />

              {art.accent && (
                <img
                  src={`/banners/${art.accent.src}.webp`}
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                  loading="eager"
                  className={`absolute z-20 h-auto object-contain ${art.accent.className}`}
                />
              )}

              {art.droplet && (
                <div className="absolute z-20 -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
                  <div
                    className="absolute inset-0 rounded-full bg-[#E63950]/40 blur-xl scale-150"
                    aria-hidden="true"
                  />
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#E63950] to-[#C41E3A] flex items-center justify-center shadow-lg">
                    <Droplet className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="white" />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
