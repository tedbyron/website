<script lang="ts">
  import { resolve } from '$app/paths'
  import type { Component } from 'svelte'
  import Discord from '~icons/tabler/brand-discord'
  import GitHub from '~icons/tabler/brand-github'
  import Matrix from '~icons/tabler/brand-matrix'
  import Lock from '~icons/tabler/lock'
  import Mail from '~icons/tabler/mail'

  const links = [
    {
      label: 'github',
      component: GitHub,
      href: 'https://github.com/tedbyron',
    },
    {
      label: 'discord',
      component: Discord,
      href: 'https://discord.com/users/176074985377366017',
    },
    {
      label: 'matrix',
      component: Matrix,
      href: 'https://matrix.to/#/@tedbyron:matrix.org',
    },
    {
      label: 'email',
      component: Mail,
      href: 'mailto:tedbyron@gmail.com',
    },
  ]
</script>

{#snippet linkContent(Icon: Component, label: string)}
  <Icon aria-hidden class="text-xl" />
  <span class="leading-none">{label}</span>
{/snippet}

<div class="container flex flex-col items-center gap-8 px-2 pt-4">
  <!-- Heading -->
  <h1>Teddy Byron</h1>

  <!-- Links -->
  <div class="flex flex-col gap-4">
    {#each links as link (link.label)}
      <a href={link.href} rel="external" class="flex items-center gap-2">
        {@render linkContent(link.component, link.label)}
      </a>
    {/each}

    <a href={resolve('/(pgp)/pgp')} class="flex items-center gap-2">
      {@render linkContent(Lock, 'pgp')}
    </a>
  </div>
</div>
