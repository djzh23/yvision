'use client'
import { useState } from 'react'
import { Send, MapPin, Phone, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/config'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const SERVICE_OPTIONS = [
  'Portrait Sessions',
  'Editorial & Brand',
  'Product Photography',
  'Creative Consultation',
  'Other / Not sure yet',
]

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        const body = await res.json()
        setErrorMsg(body?.error ?? 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-brand-fog pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-label uppercase tracking-widest text-brand-silver mb-4">Say hello</p>
        <h1 className="font-display text-title text-brand-ink mb-4">Contact</h1>
        <p className="text-body-lg text-brand-slate mb-12 max-w-lg">
          Tell us about your project and we&apos;ll get back to you within one business day.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {status === 'sent' ? (
              <div className="border border-green-200 bg-green-50 p-8">
                <h2 className="font-display text-subtitle text-green-800 mb-2">Message sent!</h2>
                <p className="text-body text-green-700">
                  Thanks for reaching out. We&apos;ll be in touch within one business day. Check your inbox — a confirmation is on its way.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-small text-brand-slate block mb-2">Your name *</label>
                    <input
                      name="name" type="text" required
                      className="w-full border border-brand-ash/40 bg-white px-4 py-3 text-body text-brand-ink focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                  <div>
                    <label className="text-small text-brand-slate block mb-2">Email address *</label>
                    <input
                      name="email" type="email" required
                      className="w-full border border-brand-ash/40 bg-white px-4 py-3 text-body text-brand-ink focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-small text-brand-slate block mb-2">Phone <span className="text-brand-silver/50">(optional)</span></label>
                    <input
                      name="phone" type="tel"
                      className="w-full border border-brand-ash/40 bg-white px-4 py-3 text-body text-brand-ink focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                  <div>
                    <label className="text-small text-brand-slate block mb-2">Service of interest</label>
                    <select
                      name="service"
                      defaultValue=""
                      className="w-full border border-brand-ash/40 bg-white px-4 py-3 text-body text-brand-ink focus:outline-none focus:border-brand-gold appearance-none"
                    >
                      <option value="" disabled>Select a service…</option>
                      {SERVICE_OPTIONS.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-small text-brand-slate block mb-2">Subject</label>
                  <input
                    name="subject" type="text"
                    placeholder="e.g. Brand shoot for new collection"
                    className="w-full border border-brand-ash/40 bg-white px-4 py-3 text-body text-brand-ink focus:outline-none focus:border-brand-gold"
                  />
                </div>

                <div>
                  <label className="text-small text-brand-slate block mb-2">Message *</label>
                  <textarea
                    name="message" rows={6} required
                    placeholder="Tell us about your project, timeline, and any specific ideas you have…"
                    className="w-full border border-brand-ash/40 bg-white px-4 py-3 text-body text-brand-ink focus:outline-none focus:border-brand-gold resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-brand-ink text-brand-fog py-4 text-small font-medium flex items-center justify-center gap-2 hover:bg-brand-gold hover:text-brand-ink transition-colors disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending…' : <><Send size={15} /> Send message</>}
                </button>

                {status === 'error' && (
                  <p className="text-small text-red-600">{errorMsg || 'Something went wrong. Please try again.'}</p>
                )}
              </form>
            )}
          </div>

          {/* Sidebar info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-body-lg text-brand-ink mb-5">Studio details</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-brand-gold flex-shrink-0 mt-0.5" />
                  <span className="text-body text-brand-slate">{siteConfig.contact.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-brand-gold flex-shrink-0 mt-0.5" />
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-body text-brand-slate hover:text-brand-ink transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={16} className="text-brand-gold flex-shrink-0 mt-0.5" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-body text-brand-slate hover:text-brand-ink transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="border-t border-brand-ash/30 pt-8">
              <h2 className="font-display text-body-lg text-brand-ink mb-3">Response time</h2>
              <p className="text-body text-brand-slate">
                We reply to every enquiry within one business day. For urgent requests, please call us directly.
              </p>
            </div>

            <div className="border-t border-brand-ash/30 pt-8">
              <h2 className="font-display text-body-lg text-brand-ink mb-3">Prefer to book directly?</h2>
              <p className="text-body text-brand-slate mb-4">
                Skip the back-and-forth and pick a time that works for you.
              </p>
              <a
                href="/booking"
                className="inline-flex items-center gap-2 text-small text-brand-gold hover:underline"
              >
                Schedule a 60-min consultation →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
