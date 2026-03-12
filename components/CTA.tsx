import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="bg-brand-gold py-20 px-6 text-center">
      <p className="text-label uppercase tracking-widest text-brand-ink/60 mb-4">Ready to start?</p>
      <h2 className="font-display text-title text-brand-ink mb-6">
        Let's make something great together.
      </h2>
      <Link href="/booking" className="inline-flex items-center gap-2 bg-brand-ink text-brand-fog px-8 py-4 text-small font-medium hover:bg-brand-carbon transition-colors">
        Book a consultation <ArrowRight size={16} />
      </Link>
    </section>
  )
}