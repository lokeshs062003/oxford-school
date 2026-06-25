import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { testimonials } from '../data/mockData'

export default function TestimonialsSlider() {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1)

  const go = (d) => {
    setDir(d)
    setIdx((prev) => (prev + d + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const t = setInterval(() => go(1), 5000)
    return () => clearInterval(t)
  }, [])

  const variants = {
    enter: (d) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  }

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-royal-900/10 px-8 py-10 md:px-14 md:py-14 min-h-[260px] flex flex-col justify-center">
        {/* Big quote icon */}
        <Quote className="w-12 h-12 text-royal-100 mb-4" />
        <AnimatePresence custom={dir} mode="wait">
          <motion.div
            key={idx}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <p className="text-gray-700 text-lg leading-relaxed italic mb-8">
              "{testimonials[idx].quote}"
            </p>
            <div className="flex items-center gap-4">
              <img
                src={testimonials[idx].avatar}
                alt={testimonials[idx].name}
                className="w-14 h-14 rounded-full ring-2 ring-gold-400 object-cover"
              />
              <div>
                <p className="font-semibold text-royal-900">{testimonials[idx].name}</p>
                <p className="text-sm text-gray-500">{testimonials[idx].role}</p>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button onClick={() => go(-1)} className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-royal-800 hover:text-white hover:border-royal-800 flex items-center justify-center transition-all shadow-sm">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i) }}
              className={`rounded-full transition-all duration-300 ${i === idx ? 'w-6 h-2.5 bg-gold-500' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gold-300'}`}
            />
          ))}
        </div>
        <button onClick={() => go(1)} className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-royal-800 hover:text-white hover:border-royal-800 flex items-center justify-center transition-all shadow-sm">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
