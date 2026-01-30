import { motion } from 'framer-motion'
import { Star, ExternalLink, MessageSquarePlus } from 'lucide-react'

/**
 * Google Reviews Component - Ready for EmbedSocial Integration
 *
 * SETUP INSTRUCTIONS:
 * 1. Create Google Business Profile for both locations
 * 2. Sign up at https://embedsocial.com (free plan available)
 * 3. Connect your Google Business Profile(s)
 * 4. Get your EmbedSocial widget code
 * 5. Replace the placeholder section below with the embed code
 *
 * EmbedSocial will provide code like:
 * <div class="embedsocial-reviews" data-ref="YOUR_WIDGET_ID"></div>
 * <script src="https://embedsocial.com/cdn/ht.js"></script>
 */

// Configuration - Update these when Google Business Profile is ready
const CONFIG = {
  // Set to true when EmbedSocial is configured
  isLive: false,

  // EmbedSocial widget ID (get this from EmbedSocial dashboard)
  embedSocialWidgetId: 'YOUR_WIDGET_ID_HERE',

  // Google Business Profile URLs (update when profiles are created)
  reviewLinks: {
    mechanical: 'https://g.page/r/YOUR_MECHANICAL_SHOP_REVIEW_LINK',
    bodyShop: 'https://g.page/r/YOUR_BODY_SHOP_REVIEW_LINK',
  },
}

// Placeholder reviews to show until Google Reviews are live
const placeholderReviews = [
  {
    name: 'Michael R.',
    rating: 5,
    text: 'Best auto shop in Newark! They fixed my transmission issue quickly and at a fair price. Highly recommend their mechanical services.',
    date: 'Recently',
    location: 'Newark, NJ',
  },
  {
    name: 'Sarah K.',
    rating: 5,
    text: 'The body work on my car looks perfect. You can\'t even tell it was in an accident. Professional team and great communication throughout.',
    date: 'Recently',
    location: 'Linden, NJ',
  },
  {
    name: 'James T.',
    rating: 5,
    text: 'Honest, professional, and skilled. I won\'t take my car anywhere else. They diagnosed the problem quickly and the repair cost was exactly as quoted.',
    date: 'Recently',
    location: 'Newark, NJ',
  },
  {
    name: 'Maria L.',
    rating: 5,
    text: 'Had my car repaired after a fender bender. The color match is perfect and they handled everything with my insurance. Stress-free experience!',
    date: 'Recently',
    location: 'Linden, NJ',
  },
]

// Star rating component
function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

// Individual review card
function ReviewCard({ review, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm"
    >
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{review.name}</h4>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{review.location}</p>
        </div>
        <StarRating rating={review.rating} />
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-2 sm:mb-3 text-sm sm:text-base leading-relaxed">"{review.text}"</p>
      <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500">{review.date}</p>
    </motion.div>
  )
}

// Main Google Reviews Section Component
export default function GoogleReviews({ variant = 'default', shopType = 'both' }) {
  const reviewLink = shopType === 'mechanical'
    ? CONFIG.reviewLinks.mechanical
    : shopType === 'body'
      ? CONFIG.reviewLinks.bodyShop
      : CONFIG.reviewLinks.mechanical // default to mechanical

  return (
    <section className={`py-12 sm:py-20 ${variant === 'light' ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-950'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full text-yellow-700 dark:text-yellow-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
            <span>Customer Reviews</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-gray-900 dark:text-white mb-3 sm:mb-4">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        {/* Reviews Display */}
        {CONFIG.isLive ? (
          /*
           * EMBEDSOCIAL INTEGRATION
           * When ready, uncomment and add your widget code here:
           *
           * <div
           *   className="embedsocial-reviews"
           *   data-ref={CONFIG.embedSocialWidgetId}
           * />
           */
          <div className="text-center py-12">
            <p className="text-gray-500">Loading reviews...</p>
          </div>
        ) : (
          /* Placeholder Reviews Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {placeholderReviews.map((review, index) => (
              <ReviewCard key={index} review={review} index={index} />
            ))}
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            {/* Leave a Review Button */}
            <a
              href={CONFIG.isLive ? reviewLink : '#'}
              target={CONFIG.isLive ? '_blank' : '_self'}
              rel="noopener noreferrer"
              onClick={(e) => {
                if (!CONFIG.isLive) {
                  e.preventDefault()
                  alert('Google Reviews coming soon! Thank you for your interest.')
                }
              }}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold rounded-full transition-all hover:shadow-lg text-sm sm:text-base"
            >
              <MessageSquarePlus className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Leave a Review</span>
            </a>

            {/* View All Reviews Button */}
            <a
              href={CONFIG.isLive ? reviewLink : '#'}
              target={CONFIG.isLive ? '_blank' : '_self'}
              rel="noopener noreferrer"
              onClick={(e) => {
                if (!CONFIG.isLive) {
                  e.preventDefault()
                  alert('Google Reviews coming soon! Thank you for your interest.')
                }
              }}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-full transition-all text-sm sm:text-base"
            >
              <span>View All on Google</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {!CONFIG.isLive && (
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Google Reviews integration coming soon
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

/**
 * Compact Review Widget - For sidebars or smaller sections
 */
export function ReviewBadge({ className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`inline-flex items-center gap-3 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 ${className}`}
    >
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <div className="text-sm">
        <span className="font-semibold text-gray-900 dark:text-white">5.0</span>
        <span className="text-gray-500 dark:text-gray-400"> on Google</span>
      </div>
    </motion.div>
  )
}
