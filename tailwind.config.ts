import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // ── LENS STUDIO COLORS (from Figma) ─────
      colors: {
        brand: {
          ink:     '#0D0D0D',   // near-black, main text
          carbon:  '#1A1A1A',   // dark backgrounds
          ash:     '#2E2E2E',   // cards, borders
          slate:   '#555555',   // secondary text
          silver:  '#A0A0A0',   // muted text, labels
          fog:     '#F0EDE8',   // light background
          white:   '#FAFAFA',   // pure white areas
          gold:    '#C8A96E',   // accent / CTA
          'gold-light': '#E8C87A', // hover state
        },
      },
      // ── FONTS (loaded in layout.tsx) ────────
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body:    ['var(--font-dm-sans)', 'sans-serif'],
        mono:    ['var(--font-dm-mono)', 'monospace'],
      },
      // ── TYPE SCALE (matches Figma) ──────────
      fontSize: {
        'display':   ['clamp(3.5rem, 8vw, 7rem)',  {lineHeight:'0.93',letterSpacing:'-0.03em'}],
        'title':     ['clamp(2rem, 4vw, 3.5rem)',   {lineHeight:'1.05',letterSpacing:'-0.02em'}],
        'subtitle':  ['clamp(1.25rem, 2.5vw, 1.75rem)',{lineHeight:'1.2'}],
        'body-lg':   ['1.0625rem', {lineHeight:'1.8'}],
        'body':      ['0.9375rem', {lineHeight:'1.75'}],
        'small':     ['0.8125rem', {lineHeight:'1.6'}],
        'label':     ['0.6875rem', {lineHeight:'1.4',letterSpacing:'0.12em'}],
      },
      // ── SPACING & RADIUS ────────────────────
      borderRadius: {
        'sm': '2px', 'md': '4px', 'lg': '8px', 'xl': '16px',
      },
      boxShadow: {
        'card': '0 2px 20px rgba(0,0,0,0.06)',
        'hover': '0 8px 48px rgba(0,0,0,0.14)',
        'gold': '0 0 40px rgba(200,169,110,0.15)',
      },
    },
  },
  plugins: [],
}
export default config