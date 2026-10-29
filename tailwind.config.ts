import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

const range50ms2sStep50ms = Object.fromEntries(
  Array.from({ length: 40 }, (_, i) => [`${i * 50}`, `${i * 50}ms`]),
)

export default {
  content: ['./src/**/*.{html,js,svelte,ts,md,svx}'],
  darkMode: 'media',
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
      animationDelay: range50ms2sStep50ms,
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
      transitionDelay: range50ms2sStep50ms,
      transitionDuration: {
        DEFAULT: '400ms',
        ...range50ms2sStep50ms,
      },
      typography: (theme: (field: string) => string) => {
        // Light colors by default, dark colors via `prose-invert`.
        const vars = {
          body: 'fg',
          headings: 'fg',
          lead: 'fg',
          links: 'fg',
          bold: 'fg',
          counters: 'gray',
          bullets: 'gray',
          hr: 'bgc',
          quotes: 'fg',
          'quote-borders': 'bgc',
          captions: 'fg',
          kbd: 'fg',
          'kbd-shadows': 'fg',
          code: 'fg',
          'pre-code': 'fg',
          'pre-bg': 'bg',
          'th-borders': 'fg',
          'td-borders': 'fg',
        }
        const css = Object.fromEntries(
          Object.entries(vars).flatMap(([name, color]) => [
            [`--tw-prose-${name}`, theme(`colors.light.${color}`)],
            [`--tw-prose-invert-${name}`, theme(`colors.${color}`)],
          ]),
        )
        return { DEFAULT: { css } }
      },
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
