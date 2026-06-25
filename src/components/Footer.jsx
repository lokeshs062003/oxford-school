import { Link } from 'react-router-dom'
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'
import { navLinks } from '../data/mockData'

export default function Footer() {
  return (
    <footer className="bg-royal-950 text-gray-300">
      {/* Gold divider */}
      <div className="h-1 bg-gold-gradient" />

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-royal-800 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-sm">Oxford Matric</p>
                <p className="text-[10px] text-gold-400 tracking-wider uppercase">Higher Secondary School</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Nurturing young minds to become tomorrow's leaders since 2010. Excellence in education, character, and values.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-royal-800 hover:bg-gold-500 hover:text-royal-950 flex items-center justify-center transition-all duration-200 text-gray-400">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-base">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-gray-400 hover:text-gold-400 transition-colors flex items-center gap-1.5">
                    <span className="text-gold-600">›</span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-base">Programs</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Primary (Grades 1–5)', 'Middle School (6–8)', 'High School (9–10)', 'Higher Secondary (11–12)', 'JEE / NEET Coaching', 'Arts & Sports Streams'].map(p => (
                <li key={p} className="flex items-center gap-1.5">
                  <span className="text-gold-600">›</span> {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-base">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <span>No. 123, Tiruvothur<br />Cheyyar – 604 407, Tamil Nadu</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>+91 44 2847 0001<br />+91 98400 12345</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>info@oxfordmatric.edu.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-royal-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© 2026 Oxford Matriculation Higher Secondary School. All rights reserved.</p>
          <p>Affiliated to Tamil Nadu Matriculation Board | Reg. No. TN/MAT/0045/1985</p>
        </div>
      </div>
    </footer>
  )
}
