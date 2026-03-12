
export interface EmailTemplateProps {
  firstName: string
  email: string
  phone?: string
  service?: string
  subject?: string
  body: string
  isConfirmation?: boolean
}

export function EmailTemplate({
  firstName,
  email,
  phone,
  service,
  subject,
  body,
  isConfirmation = false,
}: EmailTemplateProps) {
  const gold = '#C8A96E'
  const ink  = '#1A1A1A'
  const fog  = '#F5F3EF'
  const slate = '#6B6B6B'

  if (isConfirmation) {
    return (
      <html>
        <body style={{ margin: 0, padding: 0, backgroundColor: fog, fontFamily: 'Georgia, serif' }}>
          <table width="100%" cellPadding={0} cellSpacing={0} style={{ backgroundColor: fog }}>
            <tr>
              <td align="center" style={{ padding: '48px 24px' }}>
                <table width="600" cellPadding={0} cellSpacing={0} style={{ maxWidth: 600, width: '100%' }}>
                  {/* Header */}
                  <tr>
                    <td style={{ backgroundColor: ink, padding: '40px 48px 32px' }}>
                      <p style={{ margin: 0, color: gold, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'sans-serif' }}>
                        Lens Studio · Berlin
                      </p>
                      <h1 style={{ margin: '12px 0 0', color: fog, fontSize: 28, fontWeight: 400, lineHeight: 1.2 }}>
                        We&apos;ve received your message.
                      </h1>
                    </td>
                  </tr>

                  {/* Body */}
                  <tr>
                    <td style={{ backgroundColor: '#fff', padding: '40px 48px' }}>
                      <p style={{ margin: '0 0 20px', color: ink, fontSize: 16, lineHeight: 1.7 }}>
                        Hi {firstName},
                      </p>
                      <p style={{ margin: '0 0 20px', color: slate, fontSize: 15, lineHeight: 1.7 }}>
                        Thank you for getting in touch. We&apos;ll review your message and get back to you within one business day.
                      </p>

                      {/* Summary box */}
                      <table width="100%" cellPadding={0} cellSpacing={0} style={{ backgroundColor: fog, borderLeft: `3px solid ${gold}`, marginBottom: 28 }}>
                        <tr>
                          <td style={{ padding: '20px 24px' }}>
                            <p style={{ margin: '0 0 6px', color: slate, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'sans-serif' }}>Your enquiry summary</p>
                            {service && (
                              <p style={{ margin: '0 0 4px', color: ink, fontSize: 14 }}><strong>Service:</strong> {service}</p>
                            )}
                            {subject && (
                              <p style={{ margin: '0 0 4px', color: ink, fontSize: 14 }}><strong>Subject:</strong> {subject}</p>
                            )}
                            <p style={{ margin: 0, color: slate, fontSize: 14, lineHeight: 1.6 }}>{body}</p>
                          </td>
                        </tr>
                      </table>

                      <p style={{ margin: '0 0 8px', color: slate, fontSize: 15, lineHeight: 1.7 }}>
                        In the meantime, you can browse our work or book a consultation directly:
                      </p>
                      <p style={{ margin: 0 }}>
                        <a href="https://lens-studio.de/booking" style={{ color: gold, fontSize: 14, textDecoration: 'none', fontFamily: 'sans-serif' }}>
                          Schedule a 60-min consultation →
                        </a>
                      </p>
                    </td>
                  </tr>

                  {/* Footer */}
                  <tr>
                    <td style={{ backgroundColor: fog, padding: '24px 48px', borderTop: `1px solid #E0DDD8` }}>
                      <p style={{ margin: 0, color: slate, fontSize: 12, fontFamily: 'sans-serif', lineHeight: 1.6 }}>
                        Lens Studio · Mitte, Berlin · hello@lens-studio.de<br />
                        <a href="https://instagram.com/lensstudio.berlin" style={{ color: gold }}>@lensstudio.berlin</a>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    )
  }

  // Notification email sent to the studio
  return (
    <html>
      <body style={{ margin: 0, padding: 0, backgroundColor: fog, fontFamily: 'Georgia, serif' }}>
        <table width="100%" cellPadding={0} cellSpacing={0} style={{ backgroundColor: fog }}>
          <tr>
            <td align="center" style={{ padding: '48px 24px' }}>
              <table width="600" cellPadding={0} cellSpacing={0} style={{ maxWidth: 600, width: '100%' }}>
                {/* Header */}
                <tr>
                  <td style={{ backgroundColor: ink, padding: '32px 48px' }}>
                    <p style={{ margin: 0, color: gold, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'sans-serif' }}>
                      New Contact Enquiry
                    </p>
                    <h1 style={{ margin: '10px 0 0', color: fog, fontSize: 22, fontWeight: 400 }}>
                      Message from {firstName}
                    </h1>
                  </td>
                </tr>

                {/* Fields */}
                <tr>
                  <td style={{ backgroundColor: '#fff', padding: '36px 48px' }}>
                    <table width="100%" cellPadding={0} cellSpacing={0}>
                      {(
                        [
                          ['Name',    firstName],
                          ['Email',   email],
                          ...(phone   ? [['Phone',   phone]]   : []),
                          ...(service ? [['Service', service]] : []),
                          ...(subject ? [['Subject', subject]] : []),
                        ] as [string, string][]
                      ).map(([label, value]) => (
                        <tr key={label}>
                          <td style={{ padding: '8px 0', verticalAlign: 'top', width: 100 }}>
                            <span style={{ color: slate, fontSize: 12, fontFamily: 'sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</span>
                          </td>
                          <td style={{ padding: '8px 0', verticalAlign: 'top' }}>
                            <span style={{ color: ink, fontSize: 15 }}>{value}</span>
                          </td>
                        </tr>
                      ))}
                    </table>

                    <div style={{ borderTop: `1px solid #E0DDD8`, marginTop: 16, paddingTop: 24 }}>
                      <p style={{ margin: '0 0 8px', color: slate, fontSize: 12, fontFamily: 'sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Message</p>
                      <p style={{ margin: 0, color: ink, fontSize: 15, lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>{body}</p>
                    </div>

                    <div style={{ marginTop: 28 }}>
                      <a
                        href={`mailto:${email}`}
                        style={{ display: 'inline-block', backgroundColor: gold, color: ink, padding: '12px 28px', fontSize: 13, fontFamily: 'sans-serif', textDecoration: 'none', letterSpacing: '0.05em' }}
                      >
                        Reply to {firstName}
                      </a>
                    </div>
                  </td>
                </tr>

                {/* Footer */}
                <tr>
                  <td style={{ backgroundColor: fog, padding: '20px 48px', borderTop: `1px solid #E0DDD8` }}>
                    <p style={{ margin: 0, color: slate, fontSize: 12, fontFamily: 'sans-serif' }}>
                      Lens Studio internal notification · lens-studio.de
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  )
}

export default EmailTemplate
