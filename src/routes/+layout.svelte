<script lang="ts">
  import { resolve } from '$app/paths'
  import { page } from '$app/state'
  import Curlio from '#lib/assets/fonts/Iosevkacurlio-normal.woff2'
  import type { Snippet } from 'svelte'
  import GitHub from '~icons/tabler/brand-github'
  import '../app.css'

  interface Props {
    children?: Snippet
  }

  const { children }: Props = $props()

  const base = 'https://github.com/tedbyron/website/blob/main'
  const routes = base + '/src/routes'
  const source = $derived(
    page.data.sourcePath === undefined
      ? page.route.id === null
        ? `${routes}/+error.svelte`
        : page.route.id === '/'
          ? `${routes}/+page.svelte`
          : `${routes}${encodeURI(page.route.id)}/+page.svelte`
      : base + page.data.sourcePath,
  )
  const root = $derived(page.route.id === '/')
</script>

<svelte:head>
  <title>{page.data.title}</title>

  <meta name="author" content="Teddy Byron" />
  <meta name="description" content={page.data.description} />
  <meta name="color-scheme" content="dark light" />

  <link
    rel="preload"
    href={Curlio}
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
</svelte:head>

<div class="flex min-h-dvh flex-col">
  <header class="container flex items-center px-4 py-4">
    {#if root}
      <span
        aria-hidden="true"
        class="h-8 w-8 rounded-full bg-light-orange dark:bg-orange"
      ></span>
    {:else}
      <a href={resolve('/')} aria-label="home" class="group">
        <span
          class="block h-8 w-8 rounded-full bg-light-orange outline-offset-1 outline-light-orange group-hover:outline-2 dark:bg-orange dark:outline-orange"
        ></span>
      </a>
    {/if}
  </header>

  <main class="flex grow flex-col">
    {@render children?.()}
  </main>

  <footer class="mx-auto mt-8 mb-4">
    <a href={source} rel="external" class="inline-flex items-center gap-1">
      <GitHub aria-hidden />
      <span>source</span>
    </a>
  </footer>
</div>
