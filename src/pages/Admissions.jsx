import { motion } from 'framer-motion'
import { ClipboardList, UserCheck, FileText, CreditCard, ArrowRight, Download, CheckCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import FAQAccordion from '../components/FAQAccordion'
import { faqs } from '../data/mockData'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

const steps = [
  { icon: ClipboardList, step: '01', title: 'Fill Application Form', desc: 'Complete the online or offline application form with student and parent details. Available at the school office or download below.' },
  { icon: FileText, step: '02', title: 'Submit Documents', desc: 'Attach birth certificate, previous report cards (for Grade 2+), passport photos, address proof, and Aadhaar card copies.' },
  { icon: UserCheck, step: '03', title: 'Entrance Assessment', desc: 'Students for Grade 6+ appear for a written test in English, Maths, and Science. Grade 1–5 admissions are direct with a brief interaction.' },
  { icon: CreditCard, step: '04', title: 'Fee Payment & Enrolment', desc: 'Upon selection, pay the admission fee within 5 working days to confirm the seat. Seat confirmation letter issued immediately.' },
]

const feeStructure = [
  { grade: 'Grade 1 – 5', tuition: '₹48,000', lab: '—', total: '₹48,000' },
  { grade: 'Grade 6 – 8', tuition: '₹54,000', lab: '₹4,000', total: '₹58,000' },
  { grade: 'Grade 9 – 10', tuition: '₹62,000', lab: '₹6,000', total: '₹68,000' },
  { grade: 'Grade 11 – 12 (Sci)', tuition: '₹75,000', lab: '₹8,000', total: '₹83,000' },
  { grade: 'Grade 11 – 12 (Arts/Com)', tuition: '₹65,000', lab: '₹3,000', total: '₹68,000' },
]

const docs = [
  'Original Birth Certificate (Govt. issued)',
  'Previous academic year Mark Sheet / Report Card',
  '4 passport-size photographs (white background)',
  'Residence proof (Aadhaar Card / Utility Bill)',
  'Transfer Certificate (for Grade 2 and above)',
  'Community Certificate (if applying for fee concession)',
]

export default function Admissions() {
  return (
    <>
      <PageHero
        title="Admissions"
        subtitle="Join the Oxford family. A simple, transparent process — because great education should be accessible."
        breadcrumbs={['Admissions']}
      />

      {/* Open badge */}
      {/* <section className="py-8 bg-gold-gradient">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-royal-950">
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-2xl">🎉 Admissions are Open</p>
            <p className="text-royal-800 text-sm font-medium">Limited seats available. Register early to avoid disappointment.</p>
          </div>
          <div className="flex gap-3">
            <a href="#apply" className="px-6 py-3 rounded-xl bg-royal-800 text-white font-bold text-sm hover:bg-royal-700 transition-colors">
              Apply Online →
            </a>
          </div>
        </div>
      </section> */}

      {/* Steps */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle tag="Process" title="Admission Process" subtitle="Four simple steps to join the Oxford family." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="relative text-center group">
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-3/4 w-1/2 h-0.5 bg-dashed border-t-2 border-dashed border-gray-200" />
                  )}
                  <div className="w-16 h-16 rounded-2xl bg-royal-100 group-hover:bg-royal-800 flex items-center justify-center mx-auto mb-4 transition-colors duration-300 relative">
                    <Icon className="w-7 h-7 text-royal-700 group-hover:text-gold-400 transition-colors duration-300" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold-500 text-royal-950 text-xs font-bold flex items-center justify-center">{s.step}</span>
                  </div>
                  <h3 className="font-semibold text-royal-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section> */}

      {/* Application Form UI */}
      <section id="apply" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionTitle tag="Apply Now" title="Online Enquiry Form" subtitle="Fill in your details and our admissions team will contact you within 24 hours." />
          <motion.div {...fadeUp()} className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: "Student's Full Name", placeholder: 'e.g. Arjun Krishnaswamy', type: 'text' },
                { label: "Date of Birth", placeholder: '', type: 'date' },
                { label: "Applying for Grade", placeholder: 'Select grade', type: 'text' },
                { label: "Previous School (if any)", placeholder: 'School name', type: 'text' },
                { label: "Parent / Guardian Name", placeholder: 'e.g. Ramesh Krishnaswamy', type: 'text' },
                { label: "Mobile Number", placeholder: '+91 98XXX XXXXX', type: 'tel' },
                { label: "Email Address", placeholder: 'example@email.com', type: 'email' },
                { label: "City / Area", placeholder: 'e.g. Anna Nagar, Cheyyar', type: 'text' },
              ].map((field, i) => (
                <div key={i} className={field.label === 'Email Address' ? 'md:col-span-2' : ''}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royal-400 focus:ring-2 focus:ring-royal-100 outline-none text-sm transition-all"
                  />
                </div>
              ))}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Any specific queries or requirements?</label>
                <textarea rows={3} placeholder="e.g. Transport availability, hostel, scholarship..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royal-400 focus:ring-2 focus:ring-royal-100 outline-none text-sm transition-all resize-none" />
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
              <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-royal-800 hover:bg-royal-700 text-white font-bold text-base transition-colors shadow-lg hover:shadow-royal-800/30 flex items-center justify-center gap-2">
                Submit Enquiry <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-gray-400 text-center sm:text-left">Our team will respond within 24 working hours. No spam, ever.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fee Structure */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionTitle tag="Fees" title="Annual Fee Structure" subtitle="Transparent, all-inclusive fee structure. No hidden charges." />
          <motion.div {...fadeUp()} className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-royal-800 text-white">
                  <th className="text-left px-6 py-4 font-semibold">Grade</th>
                  <th className="text-right px-6 py-4 font-semibold">Tuition Fee</th>
                  <th className="text-right px-6 py-4 font-semibold">Lab Fee</th>
                  <th className="text-right px-6 py-4 font-semibold text-gold-300">Total / Year</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-royal-50 transition-colors`}>
                    <td className="px-6 py-4 font-medium text-royal-900">{row.grade}</td>
                    <td className="px-6 py-4 text-right text-gray-600">{row.tuition}</td>
                    <td className="px-6 py-4 text-right text-gray-600">{row.lab}</td>
                    <td className="px-6 py-4 text-right font-bold text-royal-800">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <p className="text-xs text-gray-400 mt-3 text-center">* Transport, hostel, and activity fees charged separately. Sibling discount of 10% applicable.</p>

          <div className="mt-8 flex justify-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-gradient text-royal-950 font-bold text-sm hover:scale-105 transition-transform shadow-md">
              <Download className="w-4 h-4" /> Download Prospectus PDF
            </button>
          </div>
        </div>
      </section> */}

      {/* Documents */}
      {/* <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionTitle tag="Checklist" title="Documents Required" />
          <div className="grid md:grid-cols-2 gap-3">
            {docs.map((doc, i) => (
              <motion.div key={i} {...fadeUp(i * 0.06)} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">{doc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <SectionTitle tag="FAQ" title="Frequently Asked Questions" subtitle="Everything you need to know about joining Oxford Matric." />
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </>
  )
}
