<script lang="ts">
  import { pgp } from '$lib'
  import { Heading, Page } from '$lib/components'
  import Discord from '~icons/tabler/brand-discord'
  import GitHub from '~icons/tabler/brand-github'
  import GitLab from '~icons/tabler/brand-gitlab'
  // import IconLinkedin from '~icons/tabler/brand-linkedin'
  import Matrix from '~icons/tabler/brand-matrix'
  import Link from '~icons/tabler/external-link'
  import Mail from '~icons/tabler/mail'

  const pgpFp = pgp.fingerprint.split(/\s+/)

  const links = [
    {
      href: 'https://github.com/tedbyron',
      icon: GitHub,
      label: 'github',
    },
    {
      href: 'https://gitlab.com/tedbyron',
      icon: GitLab,
      label: 'gitlab',
    },
    {
      href: 'https://discord.com/users/176074985377366017',
      icon: Discord,
      label: 'discord',
    },
    {
      href: 'https://matrix.to/#/@tedbyron:matrix.org',
      icon: Matrix,
      label: 'matrix',
    },
    {
      href: 'mailto:ted@ted.ooo',
      icon: Mail,
      label: 'email',
    },
  ]
</script>

<Page class="flex flex-col items-center gap-8">
  <Heading tag="h1" class="text-center">Teddy Byron</Heading>

  <span>software engineer @ <a href="https://darkoinc.com">darko</a></span>

  <div class="flex flex-col gap-4">
    {#each links as { href, icon, label }}
      <a {href} class="group flex items-center gap-2 no-underline">
        <svelte:component this={icon} class="group-hover:text-green" />
        <span class="leading-none">{label}</span>
      </a>
    {/each}
  </div>

  <div class="flex max-w-full flex-col gap-2">
    <div class="flex flex-wrap items-center justify-center gap-2">
      <span>pgp</span>

      <div class="overflow-auto">
        <div class="flex min-w-max items-center justify-center gap-2 rounded-sm bg-gray px-1 py-px">
          {#each pgpFp as word, i}
            <span class:ml-1={i === pgpFp.length / 2}>{word}</span>
          {/each}
        </div>
      </div>
    </div>

    <details>
      <summary class="text-center">public key</summary>

      <div class="mt-2 overflow-hidden rounded-t-lg bg-gray">
        <a
          href="/pubkey.asc"
          class="flex items-center justify-between gap-1 px-2 py-1 no-underline"
        >
          <span>/pubkey.asc</span>
          <Link />
        </a>
      </div>

      <pre
        class="overflow-x-auto rounded-b-lg border border-t-0 border-gray px-4 py-2 text-sm">{pgp.publicKey}</pre>

      <div class="mt-2 overflow-x-auto whitespace-nowrap text-center">
        <code>curl -s 'https://ted.ooo/pubkey.asc' | gpg</code>
      </div>
    </details>
  </div>
</Page>
