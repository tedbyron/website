import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        black: '#282a36',
        gray: '#44475a',
        white: '#f8f8f2',
        slate: '#6272a4',
        cyan: '#8be9fd',
        green: '#50fa7b',
        orange: '#ffb86c',
        pink: '#ff79c6',
        purple: '#bd93f9',
        red: '#ff5555',
        yellow: '#f1fa8c',
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
} satisfies Config
