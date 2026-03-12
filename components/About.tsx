import { siteConfig } from '@/lib/config'

export default function About() {
  const { about } = siteConfig
  return (
    <section id="about" className="bg-brand-fog py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-label uppercase tracking-widest text-brand-silver mb-4">{about.eyebrow}</p>
          <h2 className="font-display text-title text-brand-ink mb-8">{about.headline}</h2>
          {about.body.map((p, i) => (
            <p key={i} className="text-body-lg text-brand-slate mb-5 leading-relaxed">{p}</p>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6 lg:pt-16">
          {about.stats.map(s => (
            <div key={s.label} className="border-t-2 border-brand-gold pt-4">
              <p className="font-display text-title text-brand-ink">{s.num}</p>
              <p className="text-small text-brand-silver mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}