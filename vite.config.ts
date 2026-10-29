import adapter from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkGithub from 'remark-github'
import { sveltekit } from '@sveltejs/kit/vite'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import advancedPreset from 'cssnano-preset-advanced'
import tailwindcss from 'tailwindcss'
import icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'
import { enhancedImages } from '@sveltejs/enhanced-img'

// Matches extensions in #lib/posts.
const mdsvexExtensions = ['.md', '.svelte.md', '.svx']

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
    build: {
      rolldownOptions: {
        output: {
          minify: {
            compress: { dropConsole: true, dropDebugger: true },
            mangle: true,
            codegen: true,
          },
        },
      },
    },
    plugins: [
      enhancedImages(),
      sveltekit({
        extensions: ['.svelte', ...mdsvexExtensions],
        preprocess: [
          vitePreprocess(),
          mdsvex({
            extensions: mdsvexExtensions,
            smartypants: false,
            remarkPlugins: [
              [
                remarkGithub,
                { repository: 'https://github.com/tedbyron/website.git' },
              ],
            ],
            rehypePlugins: [
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: 'wrap' }],
            ],
          }),
        ],
        adapter: adapter(),
        csp: {
          directives: {
            'base-uri': ['self'],
            'connect-src': ['self', 'cloudflareinsights.com'],
            'default-src': ['self', 'data:'],
            'script-src': [
              'self',
              'ajax.cloudflare.com',
              'static.cloudflareinsights.com',
            ],
            'style-src': ['self', 'unsafe-inline'],
          },
        },
        prerender: {
          handleHttpError: (err) => {
            throw new Error(JSON.stringify(err))
          },
        },
      }),
      icons({ autoInstall: true, compiler: 'svelte', scale: 1 }),
    ],
    server: {
      fs: { allow: ['..'] },
      host: true,
      strictPort: true,
    },
  }
})
