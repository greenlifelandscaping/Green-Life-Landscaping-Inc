import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f1f8f1',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50',
          600: '#3a8c3e',
          700: '#2e7031',
          800: '#245227',
          900: '#1b4d1e',
        },
        earth: {
          50: '#efebe9',
          100: '#d7ccc8',
          200: '#bcaaa4',
          300: '#a1887f',
          400: '#8d6e63',
          500: '#795548',
          600: '#6d4c41',
          700: '#5d4037',
          800: '#4e342e',
          900: '#3e2723',
        },
        neutral: {
          50: '#f8f8f6',
          100: '#f0f0f0',
          200: '#e0e0e0',
          300: '#bdbdbd',
          400: '#9e9e9e',
          500: '#757575',
          600: '#5a5a5a',
          700: '#3d3d3d',
          800: '#2c2c2c',
          900: '#1a1a1a',
        },
        brand: {
          primary: '#2e7031',
          secondary: '#6d4c41',
          accent: '#66bb6a',
          dark: '#1b4d1e',
        },
        haint: {
          50: '#eef5f5',
          300: '#b9d4d4',
          500: '#7fb0b3',
          700: '#4a7c82',
          900: '#2f5862',
        },
        surface: {
          DEFAULT: '#ffffff',
          base: '#f8f8f6',
          alt: '#f1f8f1',
          earth: '#efebe9',
        },
      },
      fontFamily: {
        display: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        body: ['var(--font-open-sans)', 'Open Sans', 'sans-serif'],
        mono: ['ui-monospace', 'system-ui'],
      },
      fontSize: {
        'hero': ['52px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['42px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h2': ['32px', { lineHeight: '1.3' }],
        'h3': ['26px', { lineHeight: '1.35' }],
        'h4': ['20px', { lineHeight: '1.5' }],
        'body-lg': ['18px', { lineHeight: '1.65' }],
        'body': ['16px', { lineHeight: '1.65' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        'label': ['12px', { lineHeight: '1', letterSpacing: '0.08em' }],
        'overline': ['11px', { lineHeight: '1', letterSpacing: '0.14em' }],
        'cta': ['15px', { lineHeight: '1', letterSpacing: '0.03em' }],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 2px 6px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.12)',
        cta: '0 4px 20px rgba(46,112,49,0.20)',
        'cta-strong': '0 8px 30px rgba(46,112,49,0.35)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
