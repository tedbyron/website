import adapter from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    csp: {
      directives: {
        'base-uri': ['self'],
        'connect-src': ['self', 'cloudflareinsights.com'],
        'default-src': ['self'],
        'script-src': ['self', 'ajax.cloudflare.com', 'static.cloudflareinsights.com'],
        'style-src': ['self', 'unsafe-inline'],
      },
    },
    typescript: {
      config: (config) => ({
        ...config,
        include: [
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          ...config.include,
          '../.eslintrc.cjs',
          '../svelte.config.js',
          '../tailwind.config.ts',
        ],
      }),
    },
  },
}
