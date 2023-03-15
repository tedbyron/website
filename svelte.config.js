import adapter from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    csp: {
      directives: {
        'base-uri': ['self'],
        'connect-src': ['self', 'cloudflareinsights.com'],
        'default-src': ['self'],
        'script-src': [
          'self',
          'strict-dynamic',
          'ajax.cloudflare.com',
          'static.cloudflareinsights.com'
        ],
        'style-src': ['self', 'unsafe-inline']
      }
    }
  }
}

export default config
