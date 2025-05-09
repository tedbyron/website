import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

export default {
  content: ['./src/**/*.{html,js,svelte,ts,md,svx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        bg: '#282828',
        bgc: '#3c3836',
        gray: '#7c6f64',
        fg: '#d4be98',
        red: '#ea6962',
        orange: '#e78a4e',
        yellow: '#d8a657',
        green: '#a9b665',
        aqua: '#89b482',
        blue: '#7daea3',
        purple: '#d3869b',

        light: {
          bg: '#fbf1c7',
          bgc: '#f2e5bc',
          gray: '#a89984',
          fg: '#654735',
          red: '#c14a4a',
          orange: '#c35e0a',
          yellow: '#b47109',
          green: '#6c782e',
          aqua: '#4c7a5d',
          blue: '#45707a',
          purple: '#945e80',
        },
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
            '--tw-prose-body': theme('colors.fg'),
            '--tw-prose-headings': theme('colors.fg'),
            '--tw-prose-lead': theme('colors.fg'),
            '--tw-prose-links': theme('colors.fg'),
            '--tw-prose-bold': theme('colors.fg'),
            '--tw-prose-counters': theme('colors.gray'),
            '--tw-prose-bullets': theme('colors.gray'),
            '--tw-prose-hr': theme('colors.bgc'),
            '--tw-prose-quotes': theme('colors.fg'),
            '--tw-prose-quote-borders': theme('colors.bgc'),
            '--tw-prose-captions': theme('colors.fg'),
            '--tw-prose-kbd': theme('colors.fg'),
            '--tw-prose-kbd-shadows': theme('colors.fg'),
            '--tw-prose-code': theme('colors.fg'),
            '--tw-prose-pre-code': theme('colors.fg'),
            '--tw-prose-pre-bg': theme('colors.bg'),
            '--tw-prose-th-borders': theme('colors.fg'),
            '--tw-prose-td-borders': theme('colors.fg'),
          },
        },
        // light: {
        //   css: {
        //     '--tw-prose-body': theme('colors.light-fg'),
        //     '--tw-prose-headings': theme('colors.light-fg'),
        //     '--tw-prose-lead': theme('colors.light-fg'),
        //     '--tw-prose-links': theme('colors.light-fg'),
        //     '--tw-prose-bold': theme('colors.light-fg'),
        //     '--tw-prose-counters': theme('colors.light-gray'),
        //     '--tw-prose-bullets': theme('colors.light-gray'),
        //     '--tw-prose-hr': theme('colors.light-bgc'),
        //     '--tw-prose-quotes': theme('colors.light-fg'),
        //     '--tw-prose-quote-borders': theme('colors.light-bgc'),
        //     '--tw-prose-captions': theme('colors.light-fg'),
        //     '--tw-prose-kbd': theme('colors.light-fg'),
        //     '--tw-prose-kbd-shadows': theme('colors.light-fg'),
        //     '--tw-prose-code': theme('colors.light-fg'),
        //     '--tw-prose-pre-code': theme('colors.light-fg'),
        //     '--tw-prose-pre-bg': theme('colors.light-bg'),
        //     '--tw-prose-th-borders': theme('colors.light-fg'),
        //     '--tw-prose-td-borders': theme('colors.light-fg'),
        //   },
        // },
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
