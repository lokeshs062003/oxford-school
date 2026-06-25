import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Award, Users, GraduationCap, TrendingUp,
  BookOpen, Trophy, Cpu, Heart, Shield, Star,
  ArrowRight, Calendar, Clock, Tag
} from 'lucide-react'
import { stats, whyChooseUs, facilities, events } from '../data/mockData'
import SectionTitle from '../components/SectionTitle'
import TestimonialsSlider from '../components/TestimonialsSlider'

const iconMap = { Award, Users, GraduationCap, TrendingUp, BookOpen, Trophy, Cpu, Heart, Shield, Star }

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

export default function Home() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-hero-pattern overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '80px 80px' }} />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                <span className="text-xs text-gold-300 font-semibold tracking-wider uppercase">Admissions Open 2026–27</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
              >
                Nurturing
                <span className="block text-gradient-gold">Excellence</span>
                Since 2010
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
              >
                Oxford Matriculation Higher Secondary School — where academic rigour meets holistic development, shaping leaders for tomorrow's world.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/admissions"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gold-gradient text-royal-950 font-bold text-base shadow-xl hover:shadow-gold-500/30 hover:scale-105 transition-all duration-300"
                >
                  Apply for Admissions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass text-white font-semibold text-base hover:bg-white/15 transition-all duration-300"
                >
                  Explore Our School
                </Link>
              </motion.div>
            </div>

            {/* Floating cards visual */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex flex-1 justify-center items-center relative"
            >
              <div className="relative w-80 h-80">
                {/* Central circle */}
                <div className="absolute inset-8 rounded-full bg-royal-800/60 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center">
                    <GraduationCap className="w-16 h-16 text-gold-400 mx-auto mb-2" />
                    <p className="text-white font-display font-bold text-lg">Oxford</p>
                    <p className="text-gold-400 text-xs tracking-widest">MATRIC</p>
                  </div>
                </div>
                {/* Orbit ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-white/15 animate-spin" style={{ animationDuration: '20s' }} />
                {/* Floating stat cards */}
                {[
                  { label: '97% Results', val: '🏆', pos: '-top-4 left-1/2 -translate-x-1/2' },
                  { label: '4200+ Students', val: '👩‍🎓', pos: 'top-1/2 -right-8 -translate-y-1/2' },
                  { label: '38 Years', val: '⭐', pos: '-bottom-4 left-1/2 -translate-x-1/2' },
                  { label: '180+ Faculty', val: '👨‍🏫', pos: 'top-1/2 -left-8 -translate-y-1/2' },
                ].map((c, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
                    className={`absolute glass rounded-2xl px-3 py-2 text-center min-w-[90px] ${c.pos}`}
                  >
                    <div className="text-xl mb-0.5">{c.val}</div>
                    <div className="text-white text-xs font-semibold whitespace-nowrap">{c.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" className="w-full fill-white">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => {
              const Icon = iconMap[s.icon]
              return (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.1)}
                  className="relative rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-royal-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-royal-100 group-hover:bg-royal-800 flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-royal-700 group-hover:text-gold-400 transition-colors duration-300" />
                    </div>
                    <p className="font-display text-3xl md:text-4xl font-bold text-royal-900 mb-1">{s.value}</p>
                    <p className="text-sm text-gray-500 font-medium">{s.label}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            tag="Why Oxford"
            title="The Oxford Advantage"
            subtitle="A legacy of academic excellence, modern infrastructure, and values-driven education that sets us apart."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = iconMap[item.icon]
              return (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.1)}
                  className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-royal-200 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-royal-100 group-hover:bg-royal-800 flex items-center justify-center mb-4 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-royal-700 group-hover:text-gold-400 transition-colors duration-300" />
                  </div>
                  <h3 className="font-display font-bold text-royal-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── FACILITIES PREVIEW ───────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            tag="Infrastructure"
            title="World-Class Facilities"
            subtitle="Every space on campus is designed to inspire learning, creativity, and growth."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facilities.map((f, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.12)}
                className="relative rounded-3xl overflow-hidden h-64 group cursor-pointer"
              >
                <img src={f.image} alt={f.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t ${f.color} opacity-70 group-hover:opacity-80 transition-opacity`} />
                <div className="absolute inset-0 p-7 flex flex-col justify-end text-white">
                  <h3 className="font-display font-bold text-2xl mb-1">{f.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/facilities" className="inline-flex items-center gap-2 text-royal-700 font-semibold hover:text-gold-600 transition-colors group">
              View All Facilities <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────────── */}
      {/* <section className="py-20 bg-hero-pattern relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp()}>
            <span className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 bg-white/10 text-gold-300 border border-gold-500/30">
              Academic Year 
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Admissions are <span className="text-gradient-gold">Now Open</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10">
              Secure your child's future at Tamil Nadu's most trusted institution. Limited seats in all grades — apply today before they fill up!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions" className="px-8 py-4 rounded-2xl bg-gold-gradient text-royal-950 font-bold text-base hover:scale-105 transition-transform shadow-xl">
                Begin Application →
              </Link>
              <Link to="/contact" className="px-8 py-4 rounded-2xl glass text-white font-semibold text-base hover:bg-white/15 transition-all">
                Book a Campus Visit
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* ─── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            tag="Voices"
            title="What Our Community Says"
            subtitle="Hear from parents and alumni about the Oxford experience."
          />
          <TestimonialsSlider />
        </div>
      </section>

      {/* ─── EVENTS ───────────────────────────────────────────────── */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <SectionTitle
              tag="News & Events"
              title="Upcoming Events"
              subtitle="Stay updated with everything happening at Oxford."
              center={false}
            />
            <Link to="/contact" className="inline-flex items-center gap-2 text-royal-700 font-semibold text-sm hover:text-gold-600 transition-colors whitespace-nowrap group mb-4">
              View Calendar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {events.map((e, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="flex gap-5 p-5 rounded-2xl border border-gray-100 hover:border-royal-200 hover:shadow-lg transition-all duration-300 bg-white group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-royal-800 flex flex-col items-center justify-center text-white">
                  <span className="text-lg font-bold leading-none">{e.date.day}</span>
                  <span className="text-[10px] font-semibold text-gold-400 uppercase">{e.date.month}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full text-white ${e.color}`}>{e.tag}</span>
                  </div>
                  <h4 className="font-semibold text-royal-900 text-sm mb-1 group-hover:text-royal-700">{e.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{e.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  )
}
