import { motion } from 'framer-motion'

export default function ServiceCard({ icon: Icon, title, description, delay = 0, variant = 'blue' }) {
  const colors = {
    blue: {
      bg: 'bg-brand-blue/10 dark:bg-brand-blue/20',
      icon: 'text-brand-blue',
      hover: 'hover:bg-brand-blue/20 dark:hover:bg-brand-blue/30',
    },
    red: {
      bg: 'bg-brand-red/10 dark:bg-brand-red/20',
      icon: 'text-brand-red',
      hover: 'hover:bg-brand-red/20 dark:hover:bg-brand-red/30',
    },
  }

  const colorScheme = colors[variant]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={`
        p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-100 dark:border-gray-800
        bg-white dark:bg-gray-800/50
        ${colorScheme.hover}
        transition-all duration-300 cursor-default
      `}
    >
      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl ${colorScheme.bg} flex items-center justify-center mb-3 sm:mb-4`}>
        <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${colorScheme.icon}`} />
      </div>
      <h3 className="font-display font-semibold text-base sm:text-lg text-gray-900 dark:text-white mb-1 sm:mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}
