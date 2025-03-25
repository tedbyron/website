import adapter from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
// @ts-expect-error: no types.
import { mdsvex } from 'mdsvex'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
// @ts-expect-error: no types.
import remarkAbbr from 'remark-abbr'
import remarkGithub from 'remark-github'

// Matches extensions in $lib.
const mdsvexExtensions = ['.md', '.svelte.md', '.svx']

/** @type {import('@sveltejs/kit').Config} */
export default {
  compilerOptions: { runes: true },
  extensions: ['.svelte', ...mdsvexExtensions],
  kit: {
    adapter: adapter(),
    alias: {
      $components: 'src/lib/components',
    },
    csp: {
      directives: {
        'base-uri': ['self'],
        'connect-src': ['self', 'cloudflareinsights.com'],
        'default-src': ['self'],
        'script-src': ['self', 'ajax.cloudflare.com', 'static.cloudflareinsights.com'],
      },
    },
    typescript: {
      config: (config) => ({
        ...config,
        include: [
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          ...config.include,
          '../eslint.config.js',
          '../mdsvex.config.js',
          '../svelte.config.js',
          '../tailwind.config.ts',
        ],
      }),
    },
  },
  preprocess: [
    vitePreprocess(),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    mdsvex({
      extensions: mdsvexExtensions,
      remarkPlugins: [
        [remarkGithub, { repository: 'https://github.com/tedbyron/website.git' }],
        remarkAbbr,
      ],
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
      smartypants: {
        dashes: 'oldschool',
      },
    }),
  ],
}
