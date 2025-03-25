import typography from '@tailwindcss/typography'

import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        black: '#282828',
        gray: '#3c3836',
        white: '#ebdbb2',
        slate: '#928374',
        cyan: '#83a598',
        green: '#b8bb26',
        orange: '#fe8019',
        pink: '#8ec07c',
        purple: '#d3869b',
        red: '#fb4934',
        yellow: '#fabd2f',
      },
      typography: (theme: (field: string) => string) => ({
        dracula: {
          css: {
            '--tw-prose-body': theme('colors.white'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-lead': theme('colors.white'),
            '--tw-prose-links': theme('colors.white'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-counters': theme('colors.slate'),
            '--tw-prose-bullets': theme('colors.gray'),
            '--tw-prose-hr': theme('colors.gray'),
            '--tw-prose-quotes': theme('colors.white'),
            '--tw-prose-quote-borders': theme('colors.gray'),
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
  plugins: [typography],
} satisfies Config
