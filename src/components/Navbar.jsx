import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Phone, Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Mechanical Shop', path: '/mech-shop' },
  { name: 'Body Shop', path: '/body-shop' },
  { name: 'About Us', path: '/about' },
]

export default function Navbar({ darkMode, toggleDarkMode }) {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [appointmentOpen, setAppointmentOpen] = useState(false)

  const openAppointmentChooser = () => setAppointmentOpen(true)
  const closeAppointmentChooser = () => setAppointmentOpen(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Car2Fix Logo"
              className="h-10 sm:h-12 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
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

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
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

            {/* Phone Number - Always Visible */}
            <a
              href="tel:6072511509"
              className="hidden md:flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              <span>(607) 251-1509</span>
            </a>

            {/* Book Appointment Button */}
            <button
              type="button"
              onClick={openAppointmentChooser}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-brand-red/25"
            >
              <span>Book Appointment</span>
            </button>

            {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
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
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
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
                  href="tel:6072511509"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-4 bg-brand-red text-white font-semibold rounded-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (607) 251-1509</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    openAppointmentChooser()
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-xl"
                >
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Appointment Chooser */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {appointmentOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4"
                role="dialog"
                aria-modal="true"
                aria-label="Choose appointment type"
                onClick={closeAppointmentChooser}
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full max-w-md rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl p-8 text-center"
                  onClick={(event) => event.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={closeAppointmentChooser}
                    className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    aria-label="Close appointment chooser"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white">
                    Which appointment do you want to book?
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 mb-6">
                    Choose a shop and we’ll take you to the form.
                  </p>

                  <div className="grid gap-3">
                    <Link
                      to="/mech-shop#contact"
                      onClick={closeAppointmentChooser}
                      className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue-dark transition-colors"
                    >
                      <span>Mechanical Shop</span>
                      <span className="text-white/80 text-sm">Newark</span>
                    </Link>
                    <Link
                      to="/body-shop#contact"
                      onClick={closeAppointmentChooser}
                      className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-brand-red text-white font-semibold hover:bg-brand-red-dark transition-colors"
                    >
                      <span>Body Shop</span>
                      <span className="text-white/80 text-sm">Linden</span>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </nav>
  )
}
