import type { Config } from 'tailwindcss'

/**
 * Static build-time Tailwind tokens.
 * Colors intentionally reference CSS custom properties so they stay
 * runtime-overridable via siteConfig.theme → layout.tsx → globals.css.
 * To restyle, edit lib/theme.ts (colors) or the values below (type/spacing).
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // Colors reference CSS vars set at runtime from siteConfig.theme.colors
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

      // Font families use CSS vars injected by next/font in layout.tsx
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body:    ['var(--font-dm-sans)', 'sans-serif'],
        mono:    ['var(--font-dm-mono)', 'monospace'],
      },

      // Type scale — edit lib/theme.ts fontSize to change
      fontSize: {
        'display':  ['clamp(3.5rem, 8vw, 7rem)',        { lineHeight: '0.93', letterSpacing: '-0.03em' }],
        'title':    ['clamp(2rem, 4vw, 3.5rem)',         { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'subtitle': ['clamp(1.25rem, 2.5vw, 1.75rem)',  { lineHeight: '1.2'  }],
        'body-lg':  ['1.0625rem',                        { lineHeight: '1.8'  }],
        'body':     ['0.9375rem',                        { lineHeight: '1.75' }],
        'small':    ['0.8125rem',                        { lineHeight: '1.6'  }],
        'label':    ['0.6875rem',                        { lineHeight: '1.4',  letterSpacing: '0.12em' }],
      },

      // Border radius
      borderRadius: {
        sm: '2px', md: '4px', lg: '8px', xl: '16px',
      },

      // Shadows
      boxShadow: {
        card:  '0 2px 20px rgba(0,0,0,0.06)',
        hover: '0 8px 48px rgba(0,0,0,0.14)',
        gold:  '0 0 40px rgba(200,169,110,0.15)',
      },
    },
  },
  plugins: [],
}

export default config
