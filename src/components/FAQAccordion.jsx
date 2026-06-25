import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07 }}
          className="rounded-2xl border border-gray-200 overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-royal-50 transition-colors"
          >
            <span className="font-semibold text-royal-900 text-sm md:text-base pr-4">{item.q}</span>
            <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              open === i ? 'bg-royal-800 text-white' : 'bg-royal-100 text-royal-700'
            }`}>
              {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </span>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className="px-6 pb-5 pt-1 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-royal-50/50">
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}
