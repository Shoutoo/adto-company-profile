import type { Config } from 'tailwindcss';

const config: Config = {
  /* ─── Content Paths ────────────────────────────────── */
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/features/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
  ],

  /* ─── Dark Mode ────────────────────────────────────── */
  darkMode: 'class',

  /* ─── Theme ────────────────────────────────────────── */
  theme: {
    extend: {
      /* ── Brand Colors (Deep Corporate Blue) ────── */
      colors: {
        brand: {
          50: '#F4F7FA',
          100: '#EAF1F8', /* Primary Light */
          200: '#D1E0EE',
          300: '#A9C4DE',
          400: '#7FA5CA',
          500: '#5685B5',
          600: '#35557A', /* Primary */
          700: '#2C496A', /* Primary Hover */
          800: '#233A54',
          900: '#1C2C40',
          950: '#121C29',
          DEFAULT: '#35557A',
        },
        accent: {
          50: '#FEF8F3',
          100: '#FDF0E5',
          200: '#FAD8BD',
          300: '#F7BD90',
          400: '#F58220', /* Secondary */
          500: '#D96E16', /* Secondary Hover */
          600: '#B8590E',
          700: '#94460E',
          800: '#75390F',
          900: '#5F300F',
          950: '#331805',
          DEFAULT: '#F58220',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          secondary: '#F8FAFC',
          tertiary: '#EAF1F8',
          dark: '#111827',
          'dark-secondary': '#1F2937',
          'dark-tertiary': '#374151',
        },
        navy: {
          DEFAULT: '#0A2F5C',
          light: '#103F78',
        },
        orange: {
          DEFAULT: '#FF5A00',
        },
      },

      /* ── Typography ────────────────────── */
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['var(--font-outfit)', 'Outfit', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.375rem', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '3.5rem', letterSpacing: '-0.03em' }],
        '6xl': ['3.75rem', { lineHeight: '4.25rem', letterSpacing: '-0.03em' }],
        '7xl': ['4.5rem', { lineHeight: '5rem', letterSpacing: '-0.04em' }],
      },

      /* ── Spacing ───────────────────────── */
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },

      /* ── Layout ────────────────────────── */
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      screens: {
        xs: '475px',
        '3xl': '1920px',
      },

      /* ── Border Radius ─────────────────── */
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      /* ── Box Shadow (Sharp, Elegant) ───── */
      boxShadow: {
        'soft-xs': '0 1px 2px 0 oklch(0 0 0 / 0.05)',
        soft: '0 2px 4px -1px oklch(0 0 0 / 0.05), 0 1px 2px -1px oklch(0 0 0 / 0.03)',
        'soft-md': '0 4px 6px -1px oklch(0 0 0 / 0.05), 0 2px 4px -2px oklch(0 0 0 / 0.03)',
        'soft-lg': '0 10px 15px -3px oklch(0 0 0 / 0.05), 0 4px 6px -4px oklch(0 0 0 / 0.03)',
        'soft-xl': '0 20px 25px -5px oklch(0 0 0 / 0.05), 0 8px 10px -6px oklch(0 0 0 / 0.03)',
        glow: '0 0 0 1px oklch(0.45 0.12 250 / 0.15)',
        'glow-lg': '0 0 0 2px oklch(0.45 0.12 250 / 0.20)',
      },

      /* ── Animations (Corporate, Smooth) ── */
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in-down': 'fadeInDown 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-in-left': 'slideInLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },

      /* ── Transitions ───────────────────── */
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'ease-smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },

      /* ── Z-Index ───────────────────────── */
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },

      /* ── Backdrop Blur ─────────────────── */
      backdropBlur: {
        xs: '2px',
      },

      /* ── Background Image ──────────────── */
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, oklch(0.45 0.12 250), oklch(0.35 0.10 250))',
        'gradient-hero':
          'linear-gradient(180deg, oklch(0.12 0.005 250 / 0.8), oklch(0.12 0.005 250 / 0.95))',
      },
    },
  },

  /* ─── Plugins ──────────────────────────────────────── */
  plugins: [require('tailwindcss-animate')],
};

export default config;
