import { sveltekit } from '@sveltejs/kit/vite'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import advancedPreset from 'cssnano-preset-advanced'
import tailwindcss from 'tailwindcss'
import nesting from 'tailwindcss/nesting'
import icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  plugins: [
    sveltekit(),
    icons({
      autoInstall: true,
      compiler: 'svelte'
    })
  ],
  css: {
    postcss: {
      plugins: [
        nesting(),
        tailwindcss(),
        ...(mode === 'production'
          ? [
              cssnano({
                preset: advancedPreset({
                  autoprefixer: { add: true },
                  convertValues: { length: true },
                  discardComments: { removeAll: true }
                })
              })
            ]
          : [autoprefixer()])
      ]
    }
  }
}))
