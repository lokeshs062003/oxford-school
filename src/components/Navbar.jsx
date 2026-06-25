import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react'
import { navLinks } from '../data/mockData'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  const isHome = pathname === '/'

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-royal-950 text-xs text-gray-300 py-1.5">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span>📞 +91 44 2847 0001 &nbsp;|&nbsp; ✉ info@oxfordmatric.edu.in</span>
          <span>🕒 Mon–Sat: 8:00 AM – 4:30 PM &nbsp;|&nbsp; Admissions Open 🎉</span>
        </div>
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-blue-900/10 top-0'
            : 'bg-transparent top-8 md:top-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md transition-all duration-300 ${
                scrolled || !isHome ? 'bg-royal-800' : 'bg-white/20 backdrop-blur-sm'
              }`}>
                <GraduationCap className={`w-6 h-6 ${scrolled || !isHome ? 'text-gold-400' : 'text-white'}`} />
              </div>
              <div className="leading-tight">
                <p className={`font-display font-bold text-sm sm:text-base leading-none transition-colors ${
                  scrolled || !isHome ? 'text-royal-900' : 'text-white'
                }`}>
                  Oxford Matric
                </p>
                <p className={`text-[10px] font-medium tracking-wider uppercase transition-colors ${
                  scrolled || !isHome ? 'text-gold-600' : 'text-gold-300'
                }`}>
                  Higher Secondary School
                </p>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                    pathname === link.path
                      ? scrolled || !isHome
                        ? 'text-royal-700 bg-royal-50'
                        : 'text-gold-300 bg-white/10'
                      : scrolled || !isHome
                        ? 'text-gray-700 hover:text-royal-700 hover:bg-royal-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {pathname === link.path && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-500 rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                to="/admissions"
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-gold-gradient text-royal-950 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Apply Now
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`lg:hidden p-2 rounded-xl transition-colors ${
                  scrolled || !isHome ? 'text-royal-800 hover:bg-royal-50' : 'text-white hover:bg-white/10'
                }`}
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        pathname === link.path
                          ? 'bg-royal-800 text-white'
                          : 'text-gray-700 hover:bg-royal-50 hover:text-royal-800'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-2">
                  <Link
                    to="/admissions"
                    className="block text-center px-4 py-2.5 rounded-xl text-sm font-semibold bg-gold-gradient text-royal-950"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
