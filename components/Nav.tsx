'use client'
import { useState } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-fog/95 backdrop-blur-md border-b border-brand-ash/20">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-display font-bold text-lg tracking-tight text-brand-ink">
          LENS STUDIO
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map(l => l.cta ? (
            <Link key={l.href} href={l.href}
              className="bg-brand-ink text-brand-fog text-small font-medium px-5 py-2.5 rounded-sm hover:bg-brand-gold hover:text-brand-ink transition-all duration-200">
              {l.label}
            </Link>
          ) : (
            <Link key={l.href} href={l.href}
              className="text-small text-brand-slate hover:text-brand-ink transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-brand-ink" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-fog border-t border-brand-ash/20 px-6 py-4">
          {siteConfig.nav.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-3 text-brand-slate hover:text-brand-ink border-b border-brand-ash/10 last:border-none text-body">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}