'use client'
import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { Clock, Video, CheckCircle, Mail, Phone } from 'lucide-react'

const CAL_USERNAME = process.env.NEXT_PUBLIC_CAL_USERNAME
const CAL_EVENT    = process.env.NEXT_PUBLIC_CAL_EVENT_SLUG
const isCalConfigured = !!(CAL_USERNAME && CAL_EVENT && CAL_USERNAME !== 'lens-studio')

const WHAT_TO_EXPECT = [
  'We review your project brief and goals',
  'Define the visual direction and mood',
  'Walk through timeline and deliverables',
  'Answer all your questions',
]

export default function BookingPage() {
  useEffect(() => {
    if (!isCalConfigured) return
    ;(async () => {
      const cal = await getCalApi()
      cal('ui', {
        theme: 'light',
        styles: {
          branding: { brandColor: '#C8A96E' },
        },
        hideEventTypeDetails: true,
      })
    })()
  }, [])

  return (
    <div className="min-h-screen bg-brand-fog">
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 shadow-hover overflow-hidden">

          {/* ── Left panel ── */}
          <div className="lg:col-span-2 bg-brand-ink px-8 py-12 flex flex-col justify-between">
            <div>
              <p className="text-label uppercase tracking-widest text-brand-gold mb-6">
                Free consultation
              </p>
              <h1 className="font-display text-title text-brand-fog mb-5 leading-tight">
                Let&apos;s talk<br />about your project.
              </h1>
              <p className="text-body text-brand-silver mb-10 max-w-sm">
                Pick a time that works for you. The call is free, no obligation — just a focused conversation about what you need.
              </p>

              {/* Session details */}
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <Clock size={15} className="text-brand-gold flex-shrink-0" />
                  <span className="text-small text-brand-silver">30 minutes · Video call</span>
                </div>
                <div className="flex items-center gap-3">
                  <Video size={15} className="text-brand-gold flex-shrink-0" />
                  <span className="text-small text-brand-silver">Cal Video (link sent on confirmation)</span>
                </div>
              </div>

              {/* What we cover */}
              <div className="border-t border-brand-ash/50 pt-8">
                <p className="text-label uppercase tracking-widest text-brand-silver/50 mb-5">
                  What we&apos;ll cover
                </p>
                <ul className="space-y-3">
                  {WHAT_TO_EXPECT.map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle size={14} className="text-brand-gold flex-shrink-0 mt-0.5" />
                      <span className="text-small text-brand-silver">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer contact */}
            <div className="mt-12 pt-8 border-t border-brand-ash/50 space-y-3">
              <p className="text-label uppercase tracking-widest text-brand-silver/40 mb-4">
                Prefer to reach out directly?
              </p>
              <a href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 text-small text-brand-silver hover:text-brand-gold transition-colors">
                <Mail size={13} /> {siteConfig.contact.email}
              </a>
              <a href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 text-small text-brand-silver hover:text-brand-gold transition-colors">
                <Phone size={13} /> {siteConfig.contact.phone}
              </a>
            </div>
          </div>

          {/* ── Right panel — Cal embed ── */}
          <div className="lg:col-span-3 bg-white">
            {isCalConfigured ? (
              <Cal
                calLink={`${siteConfig.booking.calUsername}/${siteConfig.booking.calEventSlug}`}
                style={{ width: '100%', height: '100%', minHeight: 600 }}
                config={{ layout: 'month_view' }}
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full min-h-[500px] p-12 text-center space-y-6">
                <div className="w-12 h-12 rounded-full bg-brand-fog flex items-center justify-center">
                  <Clock size={20} className="text-brand-gold" />
                </div>
                <div>
                  <h2 className="font-display text-subtitle text-brand-ink mb-2">
                    Booking not yet configured
                  </h2>
                  <p className="text-body text-brand-slate max-w-sm">
                    Online booking is being set up. Reach out directly and we&apos;ll find a time together.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-ink text-brand-fog px-8 py-4 text-small font-medium hover:bg-brand-gold hover:text-brand-ink transition-colors"
                >
                  <Mail size={15} /> Send a message
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
