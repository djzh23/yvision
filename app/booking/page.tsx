'use client'
import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { Mail } from 'lucide-react'

const CAL_USERNAME = process.env.NEXT_PUBLIC_CAL_USERNAME
const CAL_EVENT   = process.env.NEXT_PUBLIC_CAL_EVENT_SLUG
const isCalConfigured = !!(CAL_USERNAME && CAL_EVENT && CAL_USERNAME !== 'lens-studio')

export default function BookingPage() {
  useEffect(() => {
    if (!isCalConfigured) return
    ;(async () => {
      const cal = await getCalApi()
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#C8A96E" } },
        hideEventTypeDetails: false,
      })
    })()
  }, [])

  return (
    <div className="min-h-screen bg-brand-fog pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-label uppercase tracking-widest text-brand-silver mb-4">Get in touch</p>
        <h1 className="font-display text-title text-brand-ink mb-4">Book a consultation</h1>
        <p className="text-body-lg text-brand-slate mb-10">
          60 minutes. We&apos;ll discuss your project, define the visual direction, and answer your questions.
        </p>

        {isCalConfigured ? (
          <Cal
            calLink={`${siteConfig.booking.calUsername}/${siteConfig.booking.calEventSlug}`}
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
          />
        ) : (
          <div className="border border-brand-ash/40 bg-white p-10 text-center space-y-6">
            <p className="text-body text-brand-slate">
              Online booking is not yet configured. In the meantime, reach out directly and we&apos;ll schedule a time that works for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-ink text-brand-fog px-8 py-4 text-small font-medium hover:bg-brand-gold hover:text-brand-ink transition-colors"
              >
                <Mail size={15} /> Send a message
              </Link>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-body text-brand-gold hover:underline"
              >
                {siteConfig.contact.email}
              </a>
            </div>
            <p className="text-small text-brand-silver/60">
              To enable live booking, set <code className="bg-brand-ash/20 px-1">NEXT_PUBLIC_CAL_USERNAME</code> and{' '}
              <code className="bg-brand-ash/20 px-1">NEXT_PUBLIC_CAL_EVENT_SLUG</code> in your <code className="bg-brand-ash/20 px-1">.env.local</code>.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
