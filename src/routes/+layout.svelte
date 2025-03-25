<script lang="ts">
  import { page } from '$app/state'
  import type { Snippet } from 'svelte'

  import Curlio from '$lib/assets/fonts/Iosevkacurlio-normal.woff2'
  import '../app.css'

  interface Props {
    children?: Snippet
  }

  const { children }: Props = $props()

  const base = 'https://github.com/tedbyron/website/blob/main'
  const routes = base + '/src/routes'
  const source =
    page.data.sourcePath === undefined
      ? page.route.id === null
        ? `${routes}/+error.svelte`
        : page.route.id === '/'
          ? `${routes}/+page.svelte`
          : `${routes}${encodeURI(page.route.id)}/+page.svelte`
      : base + page.data.sourcePath
</script>

<svelte:head>
  <title>{page.data.title}</title>

  <meta name="description" content={page.data.description} />
  <meta name="color-scheme" content="#282828" />
  <meta name="theme-color" content="#282828" />

  <link rel="preload" href={Curlio} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<div class="flex min-h-dvh flex-col">
  <header class="container px-2 py-4">
    <!-- <nav class="flex justify-center">
      <a href="/" aria-label="home" class="rounded-full">
        <div
          class="h-8 w-8 rounded-full bg-green hover:outline hover:outline-1 hover:outline-offset-1 hover:outline-green"
        ></div>
      </a>
    </nav> -->
  </header>

  <main class="flex grow flex-col">
    {@render children?.()}
  </main>

  <footer class="mb-4 mt-8 flex justify-center">
    <a href={source}>source</a>
  </footer>
</div>
