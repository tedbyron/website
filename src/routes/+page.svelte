<script lang="ts">
  import Discord from '~icons/tabler/brand-discord'
  import GitHub from '~icons/tabler/brand-github'
  import GitLab from '~icons/tabler/brand-gitlab'
  import Matrix from '~icons/tabler/brand-matrix'
  import Mail from '~icons/tabler/mail'

  const fingerprint = '9FD6 F552 F73C A25A EBA8  C21E 0BE1 3105 91EC E7CF'.split(/\s+/)
  const links = [
    { label: 'github', icon: GitHub, href: 'https://github.com/tedbyron' },
    { label: 'gitlab', icon: GitLab, href: 'https://gitlab.com/tedbyron' },
    { label: 'discord', icon: Discord, href: 'https://discord.com/users/176074985377366017' },
    { label: 'matrix', icon: Matrix, href: 'https://matrix.to/#/@tedbyron:matrix.org' },
    { label: 'email', icon: Mail, href: 'mailto:ted@ted.ooo' },
  ]
</script>

<div class="container flex flex-col items-center gap-8 px-2 pt-4">
  <div class="flex flex-col gap-4">
    <h1 class="text-center">Teddy Byron</h1>
    <span>software engineer @ <a href="https://darkoinc.com">darko</a></span>
  </div>

  <div class="flex flex-col gap-4">
    {#each links as { label, icon, href } (label)}
      <a {href} class="group flex items-center gap-2 no-underline">
        <svelte:component this={icon} />
        <span class="leading-none">{label}</span>
      </a>
    {/each}
  </div>

  <div class="flex max-w-full flex-col gap-2">
    <div class="flex flex-wrap items-center justify-center gap-2">
      <span>pgp</span>

      <div class="overflow-auto">
        <code class="flex min-w-max items-center justify-center gap-2">
          {#each fingerprint as word, i}
            <span class:ml-1={i === fingerprint.length / 2}>{word}</span>
          {/each}
        </code>
      </div>
    </div>
  </div>
</div>
