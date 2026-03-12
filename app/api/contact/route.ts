import { Resend } from 'resend'
import { render } from '@react-email/render'
import { EmailTemplate } from '@/components/email-template'
import { siteConfig } from '@/lib/config'

function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error('RESEND_API_KEY is missing')
  return new Resend(key)
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, subject, message } = await req.json()

    if (!name || !email || !message) {
      return Response.json({ error: 'name, email, and message are required' }, { status: 400 })
    }

    const resend = getResend()

    // 1. Notification email to the studio
    const { error: notifyError } = await resend.emails.send({
      from: siteConfig.resend.from,
      to: siteConfig.resend.to,
      replyTo: email,
      subject: subject ? `[Enquiry] ${subject} — ${name}` : `New enquiry from ${name}`,
      html: await render(EmailTemplate({ firstName: name, email, phone, service, subject, body: message })),
    })

    if (notifyError) {
      console.error('Resend notification error:', notifyError)
      return Response.json({ error: notifyError.message }, { status: 500 })
    }

    // 2. Auto-reply confirmation to the sender
    await resend.emails.send({
      from: siteConfig.resend.from,
      to: email,
      subject: `We received your message — Lens Studio`,
      html: await render(EmailTemplate({
        firstName: name,
        email,
        phone,
        service,
        subject,
        body: message,
        isConfirmation: true,
      })),
    })

    return Response.json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
