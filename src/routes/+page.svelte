<script lang="ts">
  import { resolve } from '$app/paths'
  import Discord from '~icons/tabler/brand-discord'
  import GitHub from '~icons/tabler/brand-github'
  import Matrix from '~icons/tabler/brand-matrix'
  import Lock from '~icons/tabler/lock'
  import Mail from '~icons/tabler/mail'

  // Internal links hold a route ID, resolved in the markup.
  const links = [
    {
      label: 'github',
      component: GitHub,
      href: 'https://github.com/tedbyron',
      external: true,
    },
    {
      label: 'discord',
      component: Discord,
      href: 'https://discord.com/users/176074985377366017',
      external: true,
    },
    {
      label: 'matrix',
      component: Matrix,
      href: 'https://matrix.to/#/@tedbyron:matrix.org',
      external: true,
    },
    {
      label: 'email',
      component: Mail,
      href: 'mailto:tedbyron@gmail.com',
      external: true,
    },
    {
      label: 'pgp',
      component: Lock,
      href: '/(pgp)/pgp',
      external: false,
    },
  ] as const
</script>

{#snippet linkContent(link: (typeof links)[number])}
  <link.component aria-hidden class="text-xl" />
  <span class="leading-none">{link.label}</span>
{/snippet}

<div class="container flex flex-col items-center gap-8 px-2 pt-4">
  <!-- Heading -->
  <h1>Teddy Byron</h1>

  <!-- Links -->
  <div class="flex flex-col gap-4">
    {#each links as link (link.label)}
      {#if link.external}
        <a href={link.href} rel="external" class="flex items-center gap-2">
          {@render linkContent(link)}
        </a>
      {:else}
        <a href={resolve(link.href)} class="flex items-center gap-2">
          {@render linkContent(link)}
        </a>
      {/if}
    {/each}
  </div>
</div>
