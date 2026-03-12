import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { Instagram, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-carbon text-brand-silver">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <p className="font-display font-bold text-lg text-brand-fog mb-3">
            LENS STUDIO
          </p>
          <p className="text-small leading-relaxed">{siteConfig.tagline}</p>
          <p className="text-small mt-2">{siteConfig.location}</p>
        </div>

        {/* Links */}
        <div>
          <p className="text-label uppercase tracking-widest text-brand-silver/50 mb-4">Navigation</p>
          {siteConfig.nav.map(l => (
            <Link key={l.href} href={l.href}
              className="block text-small py-1.5 hover:text-brand-fog transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <p className="text-label uppercase tracking-widest text-brand-silver/50 mb-4">Contact</p>
          <a href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-2 text-small py-1.5 hover:text-brand-fog transition-colors">
            <Mail size={14} /> {siteConfig.contact.email}
          </a>
          <a href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center gap-2 text-small py-1.5 hover:text-brand-fog transition-colors">
            <Phone size={14} /> {siteConfig.contact.phone}
          </a>
          <a href={siteConfig.contact.instagram} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 text-small py-1.5 hover:text-brand-fog transition-colors">
            <Instagram size={14} /> @lensstudio.berlin
          </a>
        </div>

      </div>
      <div className="border-t border-brand-ash/30 py-5">
        <p className="max-w-6xl mx-auto px-6 text-label text-brand-silver/40">
          © {new Date().getFullYear()} Lens Studio Berlin. All rights reserved.
        </p>
      </div>
    </footer>
  )
}