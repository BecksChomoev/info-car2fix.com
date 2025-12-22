import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react'

export default function ContactForm({ shopType = 'mechanical' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    issue: '',
  })
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          shopType,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setStatus('success')
      setFormData({ name: '', phone: '', carModel: '', issue: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const inputClasses = `
    w-full px-4 py-3.5 rounded-xl border-2 
    bg-white dark:bg-gray-800 
    border-gray-200 dark:border-gray-700 
    focus:border-brand-blue dark:focus:border-brand-blue-light 
    text-gray-900 dark:text-white 
    placeholder-gray-400 dark:placeholder-gray-500
    transition-colors duration-200
  `

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 rounded-2xl bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 text-center"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="font-display font-semibold text-xl text-green-800 dark:text-green-200 mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-green-600 dark:text-green-400">
          We'll get back to you as soon as possible.
        </p>
      </motion.div>
    )
  }

  if (status === 'error') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 rounded-2xl bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 text-center"
      >
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h3 className="font-display font-semibold text-xl text-red-800 dark:text-red-200 mb-2">
          Something Went Wrong
        </h3>
        <p className="text-red-600 dark:text-red-400">
          Please try again or call us directly at (607) 251-1509
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl dark:shadow-gray-900/50"
    >
      <h3 className="font-display font-bold text-2xl mb-6 text-gray-900 dark:text-white">
        Request a Quote
      </h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="(555) 123-4567"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="carModel" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Car Make & Model
          </label>
          <input
            type="text"
            id="carModel"
            name="carModel"
            value={formData.carModel}
            onChange={handleChange}
            required
            placeholder="e.g., 2020 Toyota Camry"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="issue" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Describe Your Issue
          </label>
          <textarea
            id="issue"
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            required
            rows={4}
            placeholder={
              shopType === 'mechanical'
                ? "e.g., Engine makes a clicking noise when starting..."
                : "e.g., Rear bumper damage from minor collision..."
            }
            className={`${inputClasses} resize-none`}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={status === 'loading'}
          className={`
            w-full py-4 rounded-xl font-semibold text-white
            flex items-center justify-center gap-2
            transition-all duration-200
            ${shopType === 'mechanical' 
              ? 'bg-brand-blue hover:bg-brand-blue-dark' 
              : 'bg-brand-red hover:bg-brand-red-dark'}
            disabled:opacity-70 disabled:cursor-not-allowed
          `}
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Submit Request</span>
            </>
          )}
        </motion.button>
      </div>
    </motion.form>
  )
}
