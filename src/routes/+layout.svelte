<script lang="ts">
  import { page } from '$app/stores'
  import IconGithub from '~icons/iconoir/github'
  import IconGitlab from '~icons/iconoir/gitlab-full'
  import IconMail from '~icons/iconoir/mail'
  // import IconLinkedin from '~icons/iconoir/linkedin'

  import '../app.css'

  let a: HTMLAnchorElement | undefined
</script>

<svelte:head>
  <title>Teddy Byron</title>
  <meta name="description" content="Teddy Byron's website" />
  <meta name="color-scheme" content="#282a36" />
</svelte:head>

<div class="flex min-h-screen flex-col">
  <header class="container px-3 pt-3 sm:px-6 sm:pt-6">
    <nav class="flex justify-center">
      <a
        bind:this={a}
        href="/"
        aria-label="home"
        class="rounded-full"
        class:pointer-events-none={a?.href === $page.url.href}
      >
        <div
          class="h-6 w-6 rounded-full bg-green hover:outline hover:outline-2 hover:outline-offset-1 hover:outline-green sm:h-10 sm:w-10"
        />
      </a>
    </nav>
  </header>

  <main class="flex-grow">
    <slot />
  </main>

  <footer
    class="container mx-auto mt-3 flex max-w-xs items-center justify-around p-3 sm:mt-6 sm:justify-between sm:p-6"
  >
    <a href="https://github.com/tedbyron" aria-label="Ted Byron's GitHub profile"
      ><IconGithub class="footer-icon" /></a
    >
    <a href="https://gitlab.com/tedbyron" aria-label="Ted Byron's GitLab profile"
      ><IconGitlab class="footer-icon" /></a
    >
    <a href="mailto:ted@tedbyron.com" aria-label="email Ted Byron"
      ><IconMail class="footer-icon" /></a
    >
  </footer>
</div>
