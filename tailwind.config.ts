import typography from '@tailwindcss/typography'

import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        black: '#282828',
        black1: '#3c3836',
        gray: '#7c6f64',
        white: '#d4be98',
        cyan: '#7daea3',
        green: '#a9b665',
        orange: '#e78a4e',
        aqua: '#89b482',
        purple: '#d3869b',
        red: '#ea6962',
        yellow: '#d8a657',
      },
      animationDelay: Object.fromEntries(
        Array.from({ length: 40 }, (_, i) => [`${i * 50}`, `${i * 50}ms`]),
      ),
      keyframes: {
        pop: {
          '0%': {
            scale: '0.98',
          },
          '40%': {
            scale: '1.02',
          },
          '100%': {
            scale: '1',
          },
        },
        x: {
          '0%, 16.667%, to': {
            opacity: '1',
          },
          '33%, 83.333%': {
            opacity: '0',
          },
        },
        y: {
          '0%, 16.667%, 66.667%, to': {
            opacity: '0',
          },
          '33.333%, 50%': {
            opacity: '1',
          },
        },
        z: {
          '0%, 50%, to': {
            opacity: '0',
          },
          '16.667%, 83.333%': {
            opacity: '1',
          },
        },
      },
      transitionDelay: Object.fromEntries(
        Array.from({ length: 40 }, (_, i) => [`${i * 50}`, `${i * 50}ms`]),
      ),
      typography: (theme: (field: string) => string) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.white'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-lead': theme('colors.white'),
            '--tw-prose-links': theme('colors.white'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-counters': theme('colors.gray'),
            '--tw-prose-bullets': theme('colors.gray'),
            '--tw-prose-hr': theme('colors.black1'),
            '--tw-prose-quotes': theme('colors.white'),
            '--tw-prose-quote-borders': theme('colors.black1'),
            '--tw-prose-captions': theme('colors.white'),
            '--tw-prose-kbd': theme('colors.white'),
            '--tw-prose-kbd-shadows': theme('colors.white'),
            '--tw-prose-code': theme('colors.white'),
            '--tw-prose-pre-code': theme('colors.white'),
            '--tw-prose-pre-bg': theme('colors.black'),
            '--tw-prose-th-borders': theme('colors.white'),
            '--tw-prose-td-borders': theme('colors.white'),
          },
        },
      }),
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: 'Curlio',
      serif: 'Curlio',
      mono: 'Curlio',
    },
  },
  plugins: [typography, animate],
} satisfies Config
