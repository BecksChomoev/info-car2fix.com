'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Phone, Menu, X } from 'lucide-react'
import { PHONE, BODY_SHOP } from '@/lib/site'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Mechanical Shop', path: '/mech-shop' },
  { name: 'Body Shop', path: '/body-shop' },
  { name: 'About Us', path: '/about' },
  { name: 'FAQ', path: '/faq' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    const initial = saved !== null
      ? JSON.parse(saved)
      : window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(initial)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode((v) => !v)

  // Mech-shop, body-shop, and the per-service pages embed a contact form; on
  // every other page the bare "#contact" anchor would silently do nothing.
  const hasContactSection =
    pathname === '/mech-shop' ||
    pathname === '/body-shop' ||
    pathname.endsWith('-newark-nj')
  const bookHref = hasContactSection ? '#contact' : '/mech-shop#contact'

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Car2Fix Logo"
              className="h-10 sm:h-12 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.path
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className="relative px-4 py-2 rounded-full font-medium text-sm transition-colors"
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-pill"
                      className="absolute inset-0 bg-brand-blue dark:bg-brand-blue-light rounded-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? 'text-white' : 'text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-blue-light'}`}>
                    {link.name}
                  </span>
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <div className="hidden md:flex flex-col gap-0.5 leading-tight">
              <a
                href={PHONE.href}
                className="group flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                <span className="w-16 text-xs font-medium text-gray-500 dark:text-gray-400">MS</span>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-brand-blue transition-colors">{PHONE.display}</span>
              </a>
              <a
                href={BODY_SHOP.phone.href}
                className="group flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-brand-red shrink-0" />
                <span className="w-16 text-xs font-medium text-gray-500 dark:text-gray-400">Body Shop</span>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-brand-red transition-colors">{BODY_SHOP.phone.display}</span>
              </a>
            </div>

            <a
              href={bookHref}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-brand-red/25"
            >
              <span>Book Appointment</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.path
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-4 rounded-xl font-medium text-base transition-colors ${
                      isActive
                        ? 'bg-brand-blue text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <div className="pt-4 space-y-3 border-t border-gray-100 dark:border-gray-800 mt-4">
                <a
                  href={PHONE.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-4 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>MS · {PHONE.display}</span>
                </a>
                <a
                  href={BODY_SHOP.phone.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Body Shop · {BODY_SHOP.phone.display}</span>
                </a>
                <a
                  href={bookHref}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-xl"
                >
                  <span>Book Appointment</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
