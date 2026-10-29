import adapter from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { escapeSvelte, mdsvex } from 'mdsvex'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkGithub from 'remark-github'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import {
  bundledLanguages,
  createCssVariablesTheme,
  createHighlighter,
} from 'shiki'

// Matches extensions in #lib/posts.
const mdsvexExtensions = ['.md', '.svelte.md', '.svx']

// Token colors are CSS variables, set in #lib/assets/css/shiki.css.
const shikiTheme = createCssVariablesTheme()
const shiki = await createHighlighter({
  themes: [shikiTheme],
  langs: [],
  langAlias: { 'shell-session': 'shellsession' },
})

async function highlight(code: string, lang?: string | null) {
  lang = lang ? shiki.resolveLangAlias(lang) : 'text'
  if (lang in bundledLanguages) {
    await shiki.loadLanguage(lang as keyof typeof bundledLanguages)
  } else {
    lang = 'text'
  }
  const html = shiki.codeToHtml(code, { lang, theme: shikiTheme })
  return `{@html \`${escapeSvelte(html)}\`}`
}

export default defineConfig(() => {
  return {
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
      tailwindcss(),
      enhancedImages(),
      sveltekit({
        extensions: ['.svelte', ...mdsvexExtensions],
        preprocess: [
          vitePreprocess(),
          mdsvex({
            extensions: mdsvexExtensions,
            smartypants: false,
            highlight: { highlighter: highlight },
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
            'script-src': ['self', 'static.cloudflareinsights.com'],
            'style-src': ['self', 'unsafe-inline'],
          },
        },
      }),
      icons({ compiler: 'svelte', scale: 1 }),
    ],
    server: {
      host: true,
      strictPort: true,
    },
  }
})
