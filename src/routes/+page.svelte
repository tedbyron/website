<script lang="ts">
  import { pgp } from '$lib'
  import Heading from '$lib/Heading.svelte'
  import Page from '$lib/Page.svelte'
  import GitHub from '~icons/iconoir/github'
  import GitLab from '~icons/iconoir/gitlab-full'
  import Link from '~icons/iconoir/link'
  import Mail from '~icons/iconoir/mail'
  // import IconLinkedin from '~icons/iconoir/linkedin'

  const links = [
    {
      href: 'https://github.com/tedbyron',
      icon: GitHub,
      alt: 'github',
      label: 'tedbyron',
    },
    {
      href: 'https://gitlab.com/tedbyron',
      icon: GitLab,
      alt: 'gitlab',
      label: 'tedbyron',
    },
    {
      href: 'mailto:ted@ted.ooo',
      icon: Mail,
      alt: 'email',
      label: 'ted@ted.ooo',
    },
  ]

  const pgpFp = pgp.fingerprint.split(/\s+/)
</script>

<Page class="flex flex-col items-center gap-y-8 text-xl">
  <Heading tag="h1" class="text-center">Teddy Byron</Heading>

  <p>
    software engineer @ <a href="https://darkoinc.com" class="link">darko</a>
  </p>

  <div class="flex flex-col items-start gap-y-4">
    {#each links as { href, icon, alt, label }}
      <a {href} class="group flex items-center gap-x-2 no-underline">
        <svelte:component this={icon} aria-label={alt} class="group-hover:text-green" />
        <span class="leading-none">{label}</span>
      </a>
    {/each}
  </div>

  <div class="text-sm">
    <details>
      <summary class="mx-auto text-center">
        <span class="ml-1">PGP:</span>
        <div class="inline-flex items-center gap-x-4">
          {#each [pgpFp.slice(0, pgpFp.length / 2), pgpFp.slice(pgpFp.length / 2)] as half}
            <div class="inline-flex gap-x-2">
              {#each half as word}
                <span>{word} </span>
              {/each}
            </div>
          {/each}
        </div>
      </summary>

      <div class="mt-2 overflow-hidden rounded-t-lg border border-b-0 border-gray bg-gray">
        <a href="/tedbyron.asc" class="flex items-center gap-x-1 px-2 py-1 no-underline">
          <Link class="text-xs" />
          <span>/tedbyron.asc</span>
        </a>
      </div>

      <pre
        class="overflow-x-scroll rounded-b-lg border border-t-0 border-gray px-4 py-2">{pgp.publicKey}</pre>

      <div class="mt-2 text-center">
        <code>curl -O 'https://ted.ooo/tedbyron.asc'</code>
      </div>
    </details>
  </div>
</Page>
