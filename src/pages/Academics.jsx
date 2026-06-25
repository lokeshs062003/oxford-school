import { motion } from 'framer-motion'
import { CheckCircle, Clock, Users, TrendingUp, BookOpen, Lightbulb } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { academicPrograms } from '../data/mockData'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

const extras = [
  { icon: TrendingUp, title: 'JEE & NEET Prep', desc: 'Integrated coaching in school hours for Grade 11–12 Science students. 120+ IIT/NIT selections in 5 years.' },
  { icon: Lightbulb, title: 'Innovation Lab', desc: 'Robotics, AI/ML, 3D printing, and IoT kits available to students from Grade 6 onwards.' },
  { icon: BookOpen, title: 'Digital Learning', desc: 'Khan Academy, BYJU\'s, and Oxford e-library access for all enrolled students — free of charge.' },
  { icon: Users, title: 'Peer Tutoring', desc: 'Structured peer-mentoring programme pairing senior students with juniors for academic support.' },
  { icon: Clock, title: 'After-School Coaching', desc: 'Daily 4:30–6:00 PM coaching for Board exam students in all core subjects.' },
  { icon: CheckCircle, title: 'Monthly Assessments', desc: 'Transparent, data-driven evaluation every month with detailed parent reports and improvement plans.' },
]

export default function Academics() {
  return (
    <>
      <PageHero
        title="Academic Excellence"
        subtitle="A comprehensive curriculum designed to challenge, inspire, and prepare students for life beyond school."
        breadcrumbs={['Academics']}
      />

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle tag="Programs" title="Our Academic Streams" subtitle="From foundational learning to specialised higher secondary streams." />
          <div className="grid md:grid-cols-2 gap-7">
            {academicPrograms.map((prog, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`h-3 bg-gradient-to-r ${prog.color}`} />
                <div className="p-8 bg-white">
                  <div className="flex items-start gap-4 mb-5">
                    <span className="text-4xl">{prog.icon}</span>
                    <div>
                      <h3 className="font-display font-bold text-2xl text-royal-900">{prog.level}</h3>
                      <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-royal-100 text-royal-700 mt-1">{prog.grades}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{prog.desc}</p>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Subjects Offered</p>
                    <div className="flex flex-wrap gap-2">
                      {prog.subjects.map((s, j) => (
                        <span key={j} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium hover:bg-royal-100 hover:text-royal-700 transition-colors">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Banner */}
      <section className="py-16 bg-hero-pattern relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: '97%', label: 'Class 10 Pass Rate 2025' },
              { val: '94%', label: 'Class 12 Pass Rate 2025' },
              { val: '210+', label: 'Distinctions Awarded' },
              { val: '18', label: 'District Rank Holders' },
            ].map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)}>
                <p className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-1">{s.val}</p>
                <p className="text-gray-300 text-sm font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle tag="Beyond Curriculum" title="Learning That Goes Further" subtitle="Academic excellence supported by enrichment programmes for every learner." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extras.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.08)}
                  className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-royal-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-royal-100 group-hover:bg-royal-800 flex items-center justify-center mb-4 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-royal-700 group-hover:text-gold-400 transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-royal-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timetable visual */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <SectionTitle tag="Schedule" title="A Typical School Day" />
          <div className="space-y-3">
            {[
              { time: '8:00 – 8:20 AM', activity: 'Morning Assembly & Announcements', color: 'bg-royal-800' },
              { time: '8:20 – 10:00 AM', activity: 'Period 1 & 2 – Core Academic Subjects', color: 'bg-blue-600' },
              { time: '10:00 – 10:20 AM', activity: 'Break & Breakfast', color: 'bg-green-600' },
              { time: '10:20 AM – 12:00 PM', activity: 'Period 3 & 4 – Science / Language / Social', color: 'bg-blue-600' },
              { time: '12:00 – 12:45 PM', activity: 'Lunch Break', color: 'bg-green-600' },
              { time: '12:45 – 2:30 PM', activity: 'Period 5 & 6 – Mathematics / Computer / Arts', color: 'bg-blue-600' },
              { time: '2:30 – 3:30 PM', activity: 'Co-Curricular Activities & Clubs', color: 'bg-purple-600' },
              { time: '3:30 – 4:00 PM', activity: 'Homework & Dismissal', color: 'bg-amber-600' },
            ].map((row, i) => (
              <motion.div key={i} {...fadeUp(i * 0.05)} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-royal-200 hover:shadow-sm transition-all bg-white">
                <div className={`w-2 h-10 rounded-full ${row.color} flex-shrink-0`} />
                <div className="w-40 flex-shrink-0">
                  <span className="text-xs font-bold text-gray-500">{row.time}</span>
                </div>
                <p className="text-sm font-medium text-royal-900">{row.activity}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
