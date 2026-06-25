import { motion } from 'framer-motion'
import { CheckCircle, Award, Users, BookOpen, Target, Eye, Heart } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { faculty } from '../data/mockData'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

const milestones = [
  { year: '2010', event: 'School founded by Founder on Tiruvothur, Cheyyar.' },
  { year: '2015', event: 'Higher Secondary wing inaugurated; first batch of Class 12 graduates.' },
  { year: '2020', event: 'New science block and digital library added; 2,000-student mark crossed.' },
  { year: '2025', event: 'Awarded Education World Top 10 School in Tamil Nadu.' },

]

export default function About() {
  return (
    <>
      <PageHero
        title="About Oxford Matric"
        subtitle="Four decades of building character, fostering curiosity, and shaping tomorrow's leaders."
        breadcrumbs={['About']}
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp()}>
              <SectionTitle
                tag="Our Story"
                title="A Legacy Built on Excellence"
                center={false}
              />
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2010 by visionary educator Dr. Founder, Oxford Matriculation Higher Secondary School began with a single classroom and an unwavering belief: every child deserves world-class education.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Today, we are home to over 4,200 students, 180 dedicated faculty members, and a sprawling 35-acre campus equipped with state-of-the-art labs, sports facilities, and performing arts spaces. Our alumni include IITians, doctors, entrepreneurs, artists, and civil servants who continue to make us proud.
              </p>
              <ul className="space-y-3">
                {['Affiliated with Tamil Nadu Matriculation Board', 'Recognised by the Govt. of Tamil Nadu since 2010', 'ISO 9001:2015 Certified Institution', 'Award recipient – Education World Top 10, 2023'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeUp(0.2)} className="relative">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=80"
                alt="Campus"
                className="rounded-3xl shadow-2xl w-full object-cover h-96"
              />
              <div className="absolute -bottom-6 -left-6 glass-light rounded-2xl p-5 shadow-xl border border-white/60">
                <p className="font-display font-bold text-3xl text-royal-900">38+</p>
                <p className="text-sm text-gray-600">Years of Excellence</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-gold-gradient rounded-2xl p-5 shadow-xl">
                <p className="font-bold text-2xl text-royal-950">97%</p>
                <p className="text-xs text-royal-800 font-medium">Board Pass Rate</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle tag="Our Foundation" title="Vision, Mission & Values" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Eye, title: 'Our Vision', color: 'bg-royal-800', text: 'To be the most respected school in South India — where every student realises their fullest potential and becomes a responsible global citizen.' },
              { icon: Target, title: 'Our Mission', color: 'bg-gold-500', text: 'To deliver transformative education through innovative pedagogy, caring teachers, and an environment that celebrates both achievement and growth.' },
              { icon: Heart, title: 'Our Values', color: 'bg-emerald-600', text: 'Integrity, Excellence, Compassion, Curiosity, and Community — the five pillars that guide every decision we make at Oxford.' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center group">
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-royal-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionTitle tag="History" title="Our Journey Through the Years" />
          <div className="relative"> */}
            {/* Center line */}
            {/* <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-royal-800 via-gold-500 to-royal-300 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.08)}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-4 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md px-6 py-4 inline-block transition-shadow">
                      <p className="text-gray-600 text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex flex-shrink-0 w-14 h-14 rounded-full bg-royal-800 border-4 border-white shadow-lg items-center justify-center z-10">
                    <span className="text-gold-400 text-xs font-bold">{m.year.slice(2)}</span>
                  </div>
                  <div className="flex-1">
                    <div className="md:hidden inline-flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold bg-royal-800 text-gold-400 px-3 py-1 rounded-full">{m.year}</span>
                    </div>
                    <p className="hidden md:block text-royal-800 font-display font-bold text-xl">{m.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Faculty */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle tag="Our Team" title="Meet Our Leadership" subtitle="Experienced educators who are passionate about nurturing every child's potential." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {faculty.map((f, i) => (
              <motion.div key={i} {...fadeUp(i * 0.07)} className="text-center group">
                <div className="relative mb-4 mx-auto w-24 h-24">
                  <img src={f.avatar} alt={f.name} className="w-24 h-24 rounded-2xl object-cover shadow-md group-hover:shadow-xl transition-shadow" />
                  <div className="absolute inset-0 rounded-2xl bg-royal-800/0 group-hover:bg-royal-800/20 transition-all duration-300" />
                </div>
                <p className="font-semibold text-royal-900 text-sm leading-tight">{f.name}</p>
                <p className="text-gold-600 text-xs font-medium mt-0.5">{f.role}</p>
                <p className="text-gray-500 text-xs">{f.subject}</p>
                <p className="text-gray-400 text-xs">{f.exp} exp.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  )
}
