<script lang="ts">
  import { browser } from '$app/environment'
  import { page } from '$app/state'
  import { appState, themes, type Theme } from '$lib'
  import Curlio from '$lib/assets/fonts/Iosevkacurlio-normal.woff2'
  import { onMount, type Snippet } from 'svelte'
  import GitHub from '~icons/tabler/brand-github'
  import Circle from '~icons/tabler/circle-filled'
  import Percentage50 from '~icons/tabler/percentage-50'
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

  const themeIcons = {
    system: Percentage50,
    light: Circle,
    dark: Circle,
  }
  const theme = $derived({ icon: themeIcons[appState.theme] })
  const toggleDarkClass = () => {
    if (!browser) return
    document.documentElement.classList.toggle(
      'dark',
      appState.theme === 'dark' ||
        (appState.theme === 'system' &&
          window.matchMedia('(prefers-color-scheme: dark)').matches),
    )
  }
  let themeEle: HTMLButtonElement

  if (browser) {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)')

    onMount(() => {
      const storedTheme = localStorage.getItem('theme')
      if (storedTheme) {
        appState.theme = storedTheme as Theme
      }
      systemDark.addEventListener('change', toggleDarkClass)
      themeEle.classList.replace('invisible', 'visible')

      return () => {
        systemDark.removeEventListener('change', toggleDarkClass)
      }
    })
  }
</script>

<svelte:head>
  <title>{page.data.title}</title>

  <meta name="author" content="Teddy Byron" />
  <meta name="description" content={page.data.description} />
  <meta name="color-scheme" content="dark light" />
  <meta name="theme-color" content="#282828" />

  <link
    rel="preload"
    href={Curlio}
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
</svelte:head>

<div class="flex min-h-dvh flex-col">
  <header class="container flex items-center justify-between px-2 py-4">
    <a
      href="/"
      aria-label="home"
      aria-hidden={root}
      class={['group', root && 'pointer-events-none']}
    >
      <div
        class="h-8 w-8 rounded-full bg-light-orange outline-2 outline-offset-1 outline-light-orange group-hover:outline dark:bg-orange dark:outline-orange"
      ></div>
    </a>

    <nav class="flex gap-4">
      <ul>
        <li>
          <button
            bind:this={themeEle}
            type="button"
            onclick={() => {
              appState.theme =
                themes[
                  (themes.findIndex((t) => t === appState.theme) + 1) %
                    themes.length
                ]!
              toggleDarkClass()
              localStorage.setItem('theme', appState.theme)
            }}
            class="invisible py-2 leading-none transition-none duration-700 ease-in animate-in fade-in disabled:text-bgc dark:disabled:text-bgc"
            aria-label="change theme"
          >
            <theme.icon class="text-xl"></theme.icon>
          </button>
        </li>
      </ul>
    </nav>
  </header>

  <main class="flex grow flex-col">
    {@render children?.()}
  </main>

  <footer class="mx-auto mb-4 mt-8">
    <a href={source}
      ><span class="underline-link inline-flex items-center gap-1"
        ><GitHub aria-hidden /> source</span
      ></a
    >
  </footer>
</div>
