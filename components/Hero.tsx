import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const { hero } = siteConfig
  return (
    <section className="min-h-screen flex flex-col justify-center bg-brand-ink text-brand-fog pt-16 px-6 md:px-16 lg:px-24">

      <div className="max-w-6xl mx-auto w-full py-24">
        {/* Eyebrow */}
        <p className="text-label uppercase tracking-widest text-brand-silver mb-8">
          {hero.eyebrow}
        </p>

        {/* Headline — each word on its own line */}
        <h1 className="font-display text-display mb-8">
          {hero.headline.map((word, i) => (
            <span key={i}
              className={`block ${i === 1 ? 'text-brand-gold' : ''}`}>
              {word}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="text-body-lg text-brand-silver max-w-lg mb-12 leading-relaxed">
          {hero.sub}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Link href={hero.cta.href} className="inline-flex items-center gap-2 bg-brand-gold text-brand-ink px-8 py-4 text-small font-medium hover:bg-brand-gold-light transition-colors">
            {hero.cta.label} <ArrowRight size={16} />
          </Link>
          <Link href={hero.ctaSecondary.href} className="inline-flex items-center gap-2 border border-brand-silver/30 text-brand-silver px-8 py-4 text-small hover:border-brand-fog hover:text-brand-fog transition-colors">
            {hero.ctaSecondary.label}
          </Link>
        </div>

        {/* Scroll hint */}
        <div className="mt-24 flex items-center gap-3">
          <div className="h-px w-16 bg-brand-silver/30"></div>
          <span className="text-label text-brand-silver/40 uppercase tracking-widest">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  )
}