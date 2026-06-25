import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

const allFacilities = [
  {
    title: 'Physics Laboratory',
    desc: 'Fully equipped with modern instruments for wave, electricity, optics, and mechanics experiments. Accommodates 40 students simultaneously.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=700&q=80',
    features: ['40-student capacity', 'Digital oscilloscopes', 'Laser equipment', 'Safety-first design'],
  },
  {
    title: 'Digital Library',
    desc: '25,000+ physical books, 5,000 e-books, international journals, and a dedicated silent reading zone open 7 days a week.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=700&q=80',
    features: ['25,000+ books', 'E-library 24/7', '60 reading seats', 'Audio-book corner'],
  },
  {
    title: 'Sports Complex',
    desc: 'A 4-acre sports zone with cricket ground, football field, basketball & badminton courts, and a 25-metre swimming pool.',
    image: 'https://images.unsplash.com/photo-1546519638405-a1e5b81eddc4?w=700&q=80',
    features: ['25m swimming pool', 'Synthetic cricket pitch', 'Flood-lit courts', 'Qualified coaches'],
  },
  {
    title: 'Performing Arts Centre',
    desc: '800-seat air-conditioned auditorium with professional stage lighting, acoustics, green rooms, and rehearsal spaces.',
    image: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=700&q=80',
    features: ['800 seat capacity', 'Pro sound system', 'Dance studio', 'Recording suite'],
  },
  {
    title: 'Computer Lab',
    desc: '120 high-end workstations with 1 Gbps fibre internet, AI/ML tools, 3D printing station, and robotics kits.',
    image: 'https://images.unsplash.com/photo-1593376893114-1aed528d80cf?w=700&q=80',
    features: ['120 workstations', '1 Gbps internet', 'AI & Robotics kits', '3D printing'],
  },
  {
    title: 'Smart Classrooms',
    desc: 'Every classroom fitted with 75" interactive flat panels, document cameras, surround speakers, and climate control.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80',
    features: ['75" smart boards', 'Climate control', 'Ergonomic seating', 'Noise isolation'],
  },
  {
    title: 'Art & Music Studio',
    desc: 'Dedicated spaces for Carnatic music, keyboard, guitar, painting, pottery, and sculpture with master instructors.',
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=700&q=80',
    features: ['Soundproof music rooms', 'Pottery kiln', 'Digital piano lab', 'Master artists'],
  },
  {
    title: 'Cafeteria & Health Centre',
    desc: 'A 300-seat hygienic cafeteria serving balanced vegetarian meals, plus a full-time nurse and visiting doctor twice weekly.',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=700&q=80',
    features: ['300-seat dining hall', 'FSSAI certified', 'On-site nurse', 'Doctor visits 2x/week'],
  },
]

export default function Facilities() {
  return (
    <>
      <PageHero
        title="World-Class Facilities"
        subtitle="Every square foot of our campus is designed to inspire learning, creativity, and well-being."
        breadcrumbs={['Facilities']}
      />

      {/* Stats strip */}
      <section className="py-12 bg-royal-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: '35 Acres', label: 'Campus Area' },
              { val: '80+', label: 'Classrooms' },
              { val: '12', label: 'Specialised Labs' },
              { val: '24/7', label: 'Security & CCTV' },
            ].map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)}>
                <p className="font-display text-3xl font-bold text-gradient-gold">{s.val}</p>
                <p className="text-gray-400 text-sm mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle tag="Infrastructure" title="Our Facilities" subtitle="A campus built for curiosity, collaboration, and achievement." />
          <div className="space-y-10">
            {allFacilities.map((f, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.1)}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300`}
              >
                <div className="lg:w-2/5 h-64 lg:h-80 flex-shrink-0 overflow-hidden">
                  <img src={f.image} alt={f.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex-1 p-8">
                  <h3 className="font-display font-bold text-2xl text-royal-900 mb-3">{f.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{f.desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {f.features.map((feat, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-5 h-5 rounded-full bg-royal-100 flex items-center justify-center flex-shrink-0">
                          <span className="w-2 h-2 rounded-full bg-royal-800" />
                        </span>
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
