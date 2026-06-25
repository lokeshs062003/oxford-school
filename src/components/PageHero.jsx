import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHero({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="relative pt-32 pb-20 bg-hero-pattern overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-10 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl" />
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mb-6"
          >
            <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3" />
                <span className={i === breadcrumbs.length - 1 ? 'text-gold-400' : 'hover:text-gold-400 cursor-pointer'}>{b}</span>
              </span>
            ))}
          </motion.nav>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Gold bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 h-1 w-24 rounded-full bg-gold-gradient"
        />
      </div>
    </section>
  )
}
