import { motion } from 'framer-motion'

export default function SectionTitle({ tag, title, subtitle, light = false, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      {tag && (
        <span className={`inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 ${
          light
            ? 'bg-white/10 text-gold-300 border border-gold-500/30'
            : 'bg-royal-100 text-royal-700 border border-royal-200'
        }`}>
          {tag}
        </span>
      )}
      <h2 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-royal-950'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-5 h-1 w-16 rounded-full bg-gold-gradient ${center ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}
