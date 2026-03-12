/**
 * ─────────────────────────────────────────────────────────────────────────────
 * LENS STUDIO — DESIGN TOKENS
 *
 * This is the single source of truth for ALL visual styling.
 * Edit values here and the change propagates to:
 *   • Tailwind utility classes (via tailwind.config.ts)
 *   • Runtime CSS custom properties (via layout.tsx → siteConfig.theme)
 *   • Email templates (via siteConfig.theme.colors)
 *
 * HOW TO RETHEME:
 *   1. Update colors / typography / shadows below.
 *   2. Save — hot reload picks up the CSS variable changes instantly.
 *   3. For font changes, also update the fontLoader section in app/layout.tsx.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const theme = {
  // ── COLORS ────────────────────────────────────────────────────────────────
  colors: {
    /** Near-black. Main body text + dark backgrounds. */
    ink:          '#0D0D0D',
    /** Very dark grey. Card/section backgrounds on dark mode. */
    carbon:       '#1A1A1A',
    /** Dark grey. Borders, dividers, subtle cards. */
    ash:          '#2E2E2E',
    /** Mid grey. Secondary text. */
    slate:        '#555555',
    /** Light grey. Muted labels, icons, captions. */
    silver:       '#A0A0A0',
    /** Warm off-white. Page background. */
    fog:          '#F0EDE8',
    /** Pure white. Content card backgrounds. */
    white:        '#FAFAFA',
    /** Gold / warm amber. Primary accent, CTAs, highlights. */
    gold:         '#C8A96E',
    /** Lighter gold. Hover / active state for gold elements. */
    'gold-light': '#E8C87A',
  },

  // ── TYPOGRAPHY ────────────────────────────────────────────────────────────
  // Font names are informational; the actual CSS font variables are set by
  // next/font in layout.tsx. To swap fonts update layout.tsx fontLoader section.
  fonts: {
    display: 'Syne',       // --font-syne CSS var, used for headings
    body:    'DM Sans',    // --font-dm-sans CSS var, used for body text
    mono:    'DM Mono',    // --font-dm-mono CSS var, used for code
  },

  // ── TYPE SCALE ────────────────────────────────────────────────────────────
  fontSize: {
    'display':  ['clamp(3.5rem, 8vw, 7rem)',         { lineHeight: '0.93', letterSpacing: '-0.03em' }],
    'title':    ['clamp(2rem, 4vw, 3.5rem)',          { lineHeight: '1.05', letterSpacing: '-0.02em' }],
    'subtitle': ['clamp(1.25rem, 2.5vw, 1.75rem)',   { lineHeight: '1.2'  }],
    'body-lg':  ['1.0625rem',                         { lineHeight: '1.8'  }],
    'body':     ['0.9375rem',                         { lineHeight: '1.75' }],
    'small':    ['0.8125rem',                         { lineHeight: '1.6'  }],
    'label':    ['0.6875rem',                         { lineHeight: '1.4',  letterSpacing: '0.12em' }],
  } as Record<string, [string, Record<string, string>]>,

  // ── BORDER RADIUS ─────────────────────────────────────────────────────────
  radius: {
    sm: '2px',
    md: '4px',
    lg: '8px',
    xl: '16px',
  },

  // ── BOX SHADOWS ───────────────────────────────────────────────────────────
  shadow: {
    card:  '0 2px 20px rgba(0,0,0,0.06)',
    hover: '0 8px 48px rgba(0,0,0,0.14)',
    gold:  '0 0 40px rgba(200,169,110,0.15)',
  },
} as const

export type Theme = typeof theme
export type ThemeColors = typeof theme.colors
