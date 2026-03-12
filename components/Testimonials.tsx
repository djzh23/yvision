import { siteConfig } from '@/lib/config'

export default function Testimonials() {
  return (
    <section className="bg-brand-fog py-24 px-6 md:px-16 lg:px-24 border-t border-brand-ash/20">
      <div className="max-w-6xl mx-auto">
        <p className="text-label uppercase tracking-widest text-brand-silver text-center mb-16">What clients say</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.testimonials.map((t, i) => (
            <div key={i} className="border border-brand-ash/30 p-7 bg-white">
              <p className="text-body-lg text-brand-slate italic leading-relaxed mb-6">"{t.text}"</p>
              <p className="text-small font-medium text-brand-ink">{t.author}</p>
              <p className="text-small text-brand-silver mt-0.5">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}