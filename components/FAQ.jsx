'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FAQ({
  items,
  heading = 'Frequently Asked Questions',
  subheading = 'Answers to the questions Newark & Linden drivers ask us most',
  variant = 'blue',
}) {
  const [openIndex, setOpenIndex] = useState(0)

  const accent = variant === 'red'
    ? { pill: 'bg-brand-red/10 dark:bg-brand-red/20 text-brand-red', text: 'text-brand-red', hover: 'hover:text-brand-red dark:hover:text-brand-red' }
    : { pill: 'bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue', text: 'text-brand-blue', hover: 'hover:text-brand-blue dark:hover:text-brand-blue' }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950" aria-label="Frequently asked questions">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 ${accent.pill}`}>
            <HelpCircle className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">
            {heading}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">{subheading}</p>
        </motion.div>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                <h3 className="font-display font-semibold text-base sm:text-lg text-gray-900 dark:text-white">
                  <button
                    type="button"
                    id={`faq-question-${index}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className={`w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors ${accent.hover}`}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 ${accent.text} transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
