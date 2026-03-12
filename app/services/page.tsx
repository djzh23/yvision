import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { ArrowRight, Clock, Check, Camera, Layers, Package, MessageCircle } from 'lucide-react'

const serviceIcons: Record<string, React.ReactNode> = {
  portrait:     <Camera size={22} className="text-brand-gold" />,
  editorial:    <Layers size={22} className="text-brand-gold" />,
  product:      <Package size={22} className="text-brand-gold" />,
  consultation: <MessageCircle size={22} className="text-brand-gold" />,
}

const faq = [
  {
    q: 'How far in advance should I book?',
    a: 'We typically book 2–4 weeks ahead. For larger commercial productions we recommend reaching out 6–8 weeks in advance to secure the date and allow time for pre-production.',
  },
  {
    q: 'Do you shoot on location or only in the studio?',
    a: 'Both. Our Berlin studio is available for all session types. For editorial and brand work we often scout and shoot on location — travel within Berlin is included in the price.',
  },
  {
    q: 'What is included in the editing process?',
    a: 'Every delivered image goes through colour grading, skin retouching (portraits), and exposure correction. You receive high-resolution JPEGs via a private gallery link. RAW files are available on request.',
  },
  {
    q: 'Can I request specific styles or references?',
    a: 'Absolutely. We encourage clients to share mood boards and references before the shoot. A short pre-shoot call is included in every package to align on the visual direction.',
  },
  {
    q: 'What usage rights do I receive?',
    a: 'Personal and commercial usage rights are included in all packages. Extended licensing (e.g. billboard, broadcast) is available — please ask us for a custom quote.',
  },
]

const process = [
  { step: '01', title: 'Initial consultation', desc: 'We start with a free 15-minute call to understand your project, timeline, and budget.' },
  { step: '02', title: 'Creative brief', desc: 'We prepare a mood board, shot list, and location plan tailored to your needs.' },
  { step: '03', title: 'The shoot', desc: 'A calm, professional environment where we focus entirely on capturing the right moments.' },
  { step: '04', title: 'Editing & delivery', desc: 'Images are delivered to your private gallery within 5–7 business days.' },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-ink pt-32 pb-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-label uppercase tracking-widest text-brand-silver/50 mb-4">What we offer</p>
          <h1 className="font-display text-display text-brand-fog mb-6">Services</h1>
          <p className="text-body-lg text-brand-silver max-w-xl">
            From intimate portrait sessions to full commercial productions — we tailor every project to what you actually need.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-brand-fog py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.services.map(s => (
              <div key={s.id} className="bg-white border border-brand-ash/30 p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  {serviceIcons[s.id]}
                  <h2 className="font-display text-subtitle text-brand-ink">{s.name}</h2>
                </div>
                <p className="text-body text-brand-slate mb-6 flex-1">{s.desc}</p>
                <div className="flex items-center gap-2 text-small text-brand-silver/60 mb-6">
                  <Clock size={13} /> {s.duration}
                </div>
                <ul className="space-y-2.5 mb-8">
                  {s.includes.map(inc => (
                    <li key={inc} className="flex items-start gap-2.5 text-small text-brand-slate">
                      <Check size={14} className="text-brand-gold flex-shrink-0 mt-0.5" /> {inc}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-6 border-t border-brand-ash/20">
                  <span className="font-display text-subtitle text-brand-gold">{s.price}</span>
                  <Link
                    href="/booking"
                    className="inline-flex items-center gap-1.5 text-small text-brand-ink hover:text-brand-gold transition-colors"
                  >
                    Book now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-brand-ink py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-label uppercase tracking-widest text-brand-silver/50 mb-4">How it works</p>
          <h2 className="font-display text-title text-brand-fog mb-16">From enquiry to gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-ash/20">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="bg-brand-carbon p-8">
                <span className="font-display text-display text-brand-gold/20 block mb-4 leading-none">{step}</span>
                <h3 className="font-display text-body-lg text-brand-fog mb-3">{title}</h3>
                <p className="text-small text-brand-silver">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-fog py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-label uppercase tracking-widest text-brand-silver mb-4">FAQ</p>
          <h2 className="font-display text-title text-brand-ink mb-12">Common questions</h2>
          <div className="space-y-0 divide-y divide-brand-ash/30">
            {faq.map(({ q, a }) => (
              <div key={q} className="py-7">
                <h3 className="font-display text-body-lg text-brand-ink mb-3">{q}</h3>
                <p className="text-body text-brand-slate">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-gold py-20 px-6 text-center">
        <p className="text-label uppercase tracking-widest text-brand-ink/60 mb-4">Ready to start?</p>
        <h2 className="font-display text-title text-brand-ink mb-8">Let&apos;s make something together.</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-brand-ink text-brand-fog px-10 py-4 text-small font-medium hover:bg-brand-carbon transition-colors"
          >
            Book a consultation <ArrowRight size={15} />
          </Link>
          <Link
            href="/contact"
            className="text-body text-brand-ink hover:underline"
          >
            Or send a message
          </Link>
        </div>
      </section>
    </>
  )
}
