import { Resend } from 'resend'
import { siteConfig } from '@/lib/config'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()
    await resend.emails.send({
      from: siteConfig.resend.from,
      to: siteConfig.resend.to,
      subject: `New message from ${name} — Lens Studio`,
      html: `<p><strong>From:</strong> ${name} (${email})</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    })
    return Response.json({ ok: true })
  } catch (e) {
    return Response.json({ error: 'Failed' }, { status: 500 })
  }
}