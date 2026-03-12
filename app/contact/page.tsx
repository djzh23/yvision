'use client'
import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    setStatus(res.ok ? 'sent' : 'error')
    if (res.ok) form.reset()
  }

  return (
    <div className="min-h-screen bg-brand-fog pt-24 pb-16 px-6">
      <div className="max-w-xl mx-auto">
        <p className="text-label uppercase tracking-widest text-brand-silver mb-4">Say hello</p>
        <h1 className="font-display text-title text-brand-ink mb-10">Contact</h1>

        {status === 'sent' ? (
          <div className="border border-green-200 bg-green-50 p-6 text-green-800">
            Message sent! We'll be in touch within 24h.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              {name:'name',label:'Your name',type:'text'},
              {name:'email',label:'Email address',type:'email'},
            ].map(f => (
              <div key={f.name}>
                <label className="text-small text-brand-slate block mb-2">{f.label}</label>
                <input name={f.name} type={f.type} required
                  className="w-full border border-brand-ash/40 bg-white px-4 py-3 text-body text-brand-ink focus:outline-none focus:border-brand-gold"/>
              </div>
            ))}
            <div>
              <label className="text-small text-brand-slate block mb-2">Message</label>
              <textarea name="message" rows={5} required
                className="w-full border border-brand-ash/40 bg-white px-4 py-3 text-body text-brand-ink focus:outline-none focus:border-brand-gold resize-none"/>
            </div>
            <button type="submit" disabled={status==='sending'}
              className="w-full bg-brand-ink text-brand-fog py-4 text-small font-medium flex items-center justify-center gap-2 hover:bg-brand-gold hover:text-brand-ink transition-colors disabled:opacity-50">
              {status==='sending' ? 'Sending…' : <><Send size={15}/> Send message</>}
            </button>
            {status==='error' && <p className="text-small text-red-600">Something went wrong. Try again.</p>}
          </form>
        )}
      </div>
    </div>
  )
}