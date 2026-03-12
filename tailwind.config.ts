/**
 * Tailwind configuration — all values imported from lib/theme.ts.
 * To restyle the site, edit lib/theme.ts or siteConfig.theme. Do not
 * hardcode design tokens here.
 */
import type { Config } from 'tailwindcss'
import { theme } from './lib/theme'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // Colors: defined in globals.css @theme as CSS var references.
      // Listed here so Tailwind knows these class names exist.
      colors: {
        brand: {
          ink:          'var(--brand-ink)',
          carbon:       'var(--brand-carbon)',
          ash:          'var(--brand-ash)',
          slate:        'var(--brand-slate)',
          silver:       'var(--brand-silver)',
          fog:          'var(--brand-fog)',
          white:        'var(--brand-white)',
          gold:         'var(--brand-gold)',
          'gold-light': 'var(--brand-gold-light)',
        },
      },

      // Font families: CSS variables injected by next/font in layout.tsx.
      fontFamily: {
        display: [`var(--font-syne)`, 'sans-serif'],
        body:    [`var(--font-dm-sans)`, 'sans-serif'],
        mono:    [`var(--font-dm-mono)`, 'monospace'],
      },

      // Type scale from theme.ts
      fontSize: theme.fontSize,

      // Radius & shadows from theme.ts
      borderRadius: theme.radius,
      boxShadow: {
        card:  theme.shadow.card,
        hover: theme.shadow.hover,
        gold:  theme.shadow.gold,
      },
    },
  },
  plugins: [],
}

export default config
