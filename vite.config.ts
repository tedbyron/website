import { sveltekit } from '@sveltejs/kit/vite'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import advancedPreset from 'cssnano-preset-advanced'
import tailwindcss from 'tailwindcss'
import icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  const dev = mode === 'development'

  return {
    build: {
      // https://esbuild.github.io/content-types/#javascript
      target: 'es2022',
    },
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
      sveltekit(),
      icons({
        autoInstall: true,
        compiler: 'svelte',
        scale: 1,
      }),
    ],
    server: { strictPort: true },
  }
})
