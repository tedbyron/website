import { sveltekit } from '@sveltejs/kit/vite'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import advancedPreset from 'cssnano-preset-advanced'
import tailwindcss from 'tailwindcss'
import icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'
import { enhancedImages } from '@sveltejs/enhanced-img'

export default defineConfig(({ mode }) => {
  const dev = mode === 'development'

  return {
    css: {
      postcss: {
        plugins: [
          tailwindcss(),
          autoprefixer(),
          ...(dev
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
    esbuild: { drop: dev ? undefined : ['console', 'debugger'] },
    plugins: [
      enhancedImages(),
      sveltekit(),
      icons({
        autoInstall: true,
        compiler: 'svelte',
        scale: 1,
      }),
    ],
    server: {
      fs: { allow: ['..'] },
      strictPort: true,
    },
  }
})
