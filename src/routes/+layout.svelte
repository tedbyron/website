<script lang="ts">
  import { page } from '$app/stores'
  import Curlio from '$lib/assets/fonts/curlio-regular.woff2'

  import '../app.css'

  $: source = $page.route.id === null || $page.route.id === '/' ? '' : encodeURI($page.route.id)
</script>

<svelte:head>
  <title>{$page.data.title}</title>

  <meta name="description" content={$page.data.description} />
  <meta name="color-scheme" content="#282a36" />
  <meta name="theme-color" content="#282a36" />

  <link rel="preload" href={Curlio} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<div class="flex min-h-dvh flex-col">
  <header class="container px-2 py-4">
    {#if $page.route.id !== '/'}
      <nav class="flex justify-center">
        <a href="/" aria-label="home" class="rounded-full">
          <div
            class="h-8 w-8 rounded-full bg-green hover:outline hover:outline-2 hover:outline-offset-1 hover:outline-green sm:h-10 sm:w-10"
          />
        </a>
      </nav>
    {/if}
  </header>

  <main class="flex grow flex-col">
    <slot />
  </main>

  <footer class="mb-4 mt-8 flex justify-center">
    <a href={`https://github.com/tedbyron/website/blob/main/src/routes${source}/%2Bpage.svelte`}
      >source</a
    >
  </footer>
</div>
