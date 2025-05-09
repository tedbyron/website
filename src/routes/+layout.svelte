<script lang="ts">
  import { browser } from '$app/environment'
  import { goto } from '$app/navigation'
  import { page } from '$app/state'
  import { appState, links, themes, type Theme } from '$lib'
  import Curlio from '$lib/assets/fonts/Iosevkacurlio-normal.woff2'
  import { onMount, type Component, type Snippet } from 'svelte'
  import type {
    ClassValue,
    MouseEventHandler,
    SvelteHTMLElements,
  } from 'svelte/elements'
  import GitHub from '~icons/tabler/brand-github'
  import Circle from '~icons/tabler/circle-filled'
  import Percentage50 from '~icons/tabler/percentage-50'
  import '../app.css'

  interface Props {
    children?: Snippet
  }

  type NavButton =
    | ((typeof links)[number] & { type: 'link' })
    | { type: 'spacer' }
    | {
        type: 'button'
        label: string
        component?: Component<SvelteHTMLElements['svg']>
        class?: ClassValue
        disabled?: boolean
        onclick: MouseEventHandler<HTMLButtonElement>
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

  const themeIcons = Object.fromEntries<Component<SvelteHTMLElements['svg']>>(
    themes.map((name) => [name, name === 'system' ? Percentage50 : Circle]),
  )
  const rightNav = $state<NavButton[]>([
    // ...links.map((link) => ({ type: 'link' as const, ...link })),
    {
      type: 'button',
      label: 'theme',
      component: Percentage50,
      class: 'invisible',
      onclick: () => {
        appState.theme =
          themes[
            (themes.findIndex((t) => t === appState.theme) + 1) % themes.length
          ]!
        localStorage.setItem('theme', appState.theme)
      },
    },
  ])

  if (browser) {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)')
    const toggleDark = () => {
      document.documentElement.classList.toggle(
        'dark',
        appState.theme === 'dark' ||
          (appState.theme === 'system' && systemDark.matches),
      )
    }

    $effect(() => {
      toggleDark()
      if (rightNav[0] && 'component' in rightNav[0]) {
        rightNav[0].component = themeIcons[appState.theme]
      }
    })

    onMount(() => {
      appState.theme = localStorage.getItem('theme') as Theme
      systemDark.addEventListener('change', toggleDark)
      if (rightNav[0] && 'class' in rightNav[0]) {
        rightNav[0].class = 'visible'
      }

      return () => {
        systemDark.removeEventListener('change', toggleDark)
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
    <button
      type="button"
      disabled={page.route.id === '/'}
      aria-label="home"
      class="h-8 w-8 rounded-full bg-light-orange outline-2 outline-offset-1 outline-light-orange hover:enabled:outline dark:bg-orange dark:hover:outline-orange"
      onclick={async () => {
        await goto('/')
      }}
    ></button>

    <nav class="flex gap-4">
      {#each rightNav as item, i (i)}
        {#if item.type === 'spacer'}
          <!-- <div></div> -->
        {:else if item.type === 'link'}
          <!-- <div></div> -->
        {:else if item.type === 'button'}
          <button
            type="button"
            disabled={item.disabled}
            onclick={item.onclick}
            class={[
              item.class,
              'py-2 leading-none disabled:text-bgc dark:disabled:text-bgc',
            ]}
            aria-label={item.component ? item.label : undefined}
          >
            {#if item.component}
              <item.component class="text-xl" />
            {:else}
              {item.label}
            {/if}
          </button>
        {/if}
      {/each}
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
