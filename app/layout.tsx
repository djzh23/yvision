import type { Metadata } from 'next'
import { Syne, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { siteConfig } from '@/lib/config'

// ── FONT LOADER ────────────────────────────────────────────────────────────
// To swap fonts update the Google Font imports here and adjust
// siteConfig.theme.fonts (informational label only).
const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${siteConfig.name} — Photography & Visual Storytelling`,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
}

// ── CSS VARIABLE INJECTION ─────────────────────────────────────────────────
// Converts siteConfig.theme.colors into --brand-{name} CSS custom properties
// set inline on <html>. globals.css @theme entries reference these vars, so
// every Tailwind utility (bg-brand-*, text-brand-*, border-brand-*, etc.)
// resolves to whatever siteConfig.theme.colors says — no rebuild needed.
function buildThemeVars(): React.CSSProperties {
  const vars: Record<string, string> = {}
  for (const [key, value] of Object.entries(siteConfig.theme.colors)) {
    vars[`--brand-${key}`] = value
  }
  return vars as React.CSSProperties
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}
      style={buildThemeVars()}
    >
      <body className="font-body bg-brand-fog text-brand-ink antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
