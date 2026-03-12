import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { ArrowRight, Clock, Check } from 'lucide-react'

export default function Services() {
  return (
    <section className="bg-brand-ink py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-label uppercase tracking-widest text-brand-silver/50 mb-4">What we offer</p>
        <h2 className="font-display text-title text-brand-fog mb-16">Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-ash/30">
          {siteConfig.services.map(s => (
            <div key={s.id} className="bg-brand-carbon p-8 group hover:bg-brand-ash/20 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-subtitle text-brand-fog">{s.name}</h3>
                <span className="text-label text-brand-gold ml-4 flex-shrink-0">{s.price}</span>
              </div>
              <p className="text-body text-brand-silver mb-5">{s.desc}</p>
              <div className="flex items-center gap-1.5 text-small text-brand-silver/50 mb-5">
                <Clock size={13} /> {s.duration}
              </div>
              <ul className="space-y-2">
                {s.includes.map(inc => (
                  <li key={inc} className="flex items-center gap-2 text-small text-brand-silver">
                    <Check size={13} className="text-brand-gold flex-shrink-0" /> {inc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/booking" className="inline-flex items-center gap-2 text-body text-brand-gold hover:text-brand-gold-light transition-colors">
            Book a consultation <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}