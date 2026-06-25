import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

const contactCards = [
  { icon: MapPin, title: 'Visit Us', lines: ['No. 123, Tiruvothur, Cheyyar – 604 407, Tamil Nadu'] },
  { icon: Phone, title: 'Call Us', lines: ['+91 44 2847 0001', '+91 98400 12345'] },
  { icon: Mail, title: 'Email Us', lines: ['info@oxfordmatric.edu.in'] },
  { icon: Clock, title: 'Office Hours', lines: ['Mon – Sat: 8:00 AM – 4:30 PM', 'Sunday: Closed'] },
]

export default function Contact() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Have questions about admissions, academics, or campus visits? We'd love to hear from you."
        breadcrumbs={['Contact']}
      />

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-royal-200 hover:shadow-lg transition-all duration-300 text-center group">
                  <div className="w-14 h-14 rounded-2xl bg-royal-100 group-hover:bg-royal-800 flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-royal-700 group-hover:text-gold-400 transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-royal-900 mb-2">{c.title}</h3>
                  {c.lines.map((line, j) => (
                    <p key={j} className="text-gray-500 text-sm">{line}</p>
                  ))}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <motion.div {...fadeUp()} className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
              <SectionTitle tag="Contact Form" title="Send Us a Message" center={false} />
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                    <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royal-400 focus:ring-2 focus:ring-royal-100 outline-none text-sm transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                    <input type="tel" placeholder="+91 98XXX XXXXX" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royal-400 focus:ring-2 focus:ring-royal-100 outline-none text-sm transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                  <input type="email" placeholder="example@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royal-400 focus:ring-2 focus:ring-royal-100 outline-none text-sm transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royal-400 focus:ring-2 focus:ring-royal-100 outline-none text-sm transition-all text-gray-500">
                    <option>Admissions Enquiry</option>
                    <option>Campus Visit Request</option>
                    <option>Fee Structure Query</option>
                    <option>General Enquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                  <textarea rows={5} placeholder="Tell us how we can help..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royal-400 focus:ring-2 focus:ring-royal-100 outline-none text-sm transition-all resize-none" />
                </div>
                <button className="w-full px-8 py-4 rounded-2xl bg-royal-800 hover:bg-royal-700 text-white font-bold text-base transition-colors shadow-lg hover:shadow-royal-800/30 flex items-center justify-center gap-2">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Map + social */}
            <motion.div {...fadeUp(0.15)} className="space-y-6">
              <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-xl h-80 relative">
                <iframe
                  title="Oxford Matriculation School Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.941600983676!2d79.5408818!3d12.651833799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52d7739f979e5f%3A0xd4c68385b5c68e6a!2sOxford%20Matriculation%20Higher%20secondary%20School!5e0!3m2!1sen!2sin!4v1782415557338!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="bg-hero-pattern rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="relative">
                  <h3 className="font-display font-bold text-xl mb-2">Follow Our Journey</h3>
                  <p className="text-gray-300 text-sm mb-6">Stay connected for updates on events, achievements, and campus life.</p>
                  <div className="flex gap-3">
                    {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                      <a key={i} href="#" className="w-11 h-11 rounded-xl bg-white/10 hover:bg-gold-500 hover:text-royal-950 flex items-center justify-center transition-all duration-200">
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <h4 className="font-semibold text-royal-900 mb-3 text-sm">Bus Routes Available</h4>
                <div className="flex flex-wrap gap-2">
                  {['Adyar', 'Anna Nagar', 'Velachery', 'Tambaram', 'Sholinganallur', 'Perambur', 'T. Nagar', 'Mylapore'].map((area, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-royal-50 text-royal-700 font-medium">{area}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
