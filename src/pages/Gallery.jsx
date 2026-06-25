import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import PageHero from '../components/PageHero'
import { galleryImages } from '../data/mockData'

const categories = ['All', 'Campus', 'Labs', 'Sports', 'Events']

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? galleryImages : galleryImages.filter(g => g.category === active)

  return (
    <>
      <PageHero
        title="Photo Gallery"
        subtitle="A glimpse into the vibrant life at Oxford Matric — campus, classrooms, sports, and celebrations."
        breadcrumbs={['Gallery']}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === cat
                    ? 'bg-royal-800 text-white shadow-lg shadow-royal-800/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-royal-50 hover:text-royal-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative group rounded-2xl overflow-hidden cursor-pointer aspect-square"
                  onClick={() => setLightbox(img)}
                >
                  <img src={img.src} alt={img.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-royal-900/0 group-hover:bg-royal-900/50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                      <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-semibold">{img.caption}</p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-bold bg-gold-500 text-royal-950 px-2 py-0.5 rounded-full">{img.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="max-w-4xl w-full rounded-2xl overflow-hidden"
            >
              <img src={lightbox.src} alt={lightbox.caption} className="w-full object-contain max-h-[80vh]" />
              <div className="bg-royal-900 px-6 py-3 flex items-center justify-between">
                <p className="text-white font-semibold">{lightbox.caption}</p>
                <span className="text-xs bg-gold-500 text-royal-950 px-2 py-0.5 rounded-full font-bold">{lightbox.category}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
