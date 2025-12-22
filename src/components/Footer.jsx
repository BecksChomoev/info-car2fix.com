import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src="/logo.png" alt="Car2Fix" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Quality repairs you can trust. Professional automotive services for all your mechanical and body work needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Mechanical Shop', path: '/mech-shop' },
                { name: 'Body Shop', path: '/body-shop' },
                { name: 'About Us', path: '/about' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mechanical Shop */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Mechanical Shop</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span>408 Carnegie Ave<br />Newark, NJ 07114</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Clock className="w-5 h-5 text-brand-blue flex-shrink-0" />
                <span>Mon-Fri: 8am-6pm<br />Sat: 8am-2pm</span>
              </li>
            </ul>
          </div>

          {/* Body Shop */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Body Shop</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <span>1420 E Elizabeth Ave<br />Linden, NJ 07036</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Clock className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span>Mon-Fri: 8am-6pm<br />Closed Weekends</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Banner */}
        <div className="mt-12 p-6 bg-gradient-to-r from-brand-blue to-brand-red rounded-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="font-display font-semibold text-xl">Need immediate assistance?</h4>
              <p className="text-white/80">Our team is ready to help you</p>
            </div>
            <a
              href="tel:6072511509"
              className="flex items-center gap-2 px-6 py-3 bg-white text-brand-blue font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>(607) 251-1509</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© {currentYear} Car2Fix. All rights reserved.</p>
            <p>Quality repairs you can trust.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
