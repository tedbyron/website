import { sveltekit } from '@sveltejs/kit/vite'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import advancedPreset from 'cssnano-preset-advanced'
import tailwindcss from 'tailwindcss'
import nesting from 'tailwindcss/nesting'
import icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  css: {
    postcss: {
      plugins: [
        nesting(),
        tailwindcss(),
        autoprefixer(),
        ...(mode === 'development'
          ? []
          : [
              cssnano({
                preset: advancedPreset({
                  convertValues: { length: true },
                  discardComments: { removeAll: true },
                }),
              }),
            ]),
      ],
    },
  },
  esbuild: { drop: mode === 'development' ? [] : ['console', 'debugger'] },
  plugins: [
    sveltekit(),
    icons({
      autoInstall: true,
      compiler: 'svelte',
    }),
  ],
  server: { strictPort: true },
}))
