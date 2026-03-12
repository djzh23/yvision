'use client'
import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"
import { siteConfig } from '@/lib/config'

export default function BookingPage() {
  useEffect(() => {
    (async () => {
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
          60 minutes. We'll discuss your project, define the visual direction, and answer your questions.
        </p>
        <Cal
          calLink={`${siteConfig.booking.calUsername}/${siteConfig.booking.calEventSlug}`}
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
        />
      </div>
    </div>
  )
}