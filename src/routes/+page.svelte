<script lang="ts">
  import HomeBackground from '$components/HomeBackground.svelte'
  import { work, links } from '$lib'
</script>

<div class="container flex flex-col items-center gap-8 px-2 pt-4">
  <!-- Header -->
  <div class="flex flex-col gap-4 text-center">
    <h1>Teddy Byron</h1>

    {#if Object.keys(work).length}
      <span>
        {#if work.title}
          {work.title}
        {/if}

        {#if work.company?.url && work.company.name}
          @ <a href={work.company.url}>{work.company.name}</a>
        {:else if work.company?.name}
          @ {work.company.name}
        {/if}

        {#if work.location}
          in {work.location}
        {/if}
      </span>
    {/if}
  </div>

  <!-- Links -->
  <div class="flex flex-col gap-4">
    {#each links as link (link.label)}
      <a href={link.href} class="flex items-center gap-2 no-underline">
        <link.component aria-hidden class="text-xl" />
        <span class="leading-none">{link.label}</span>
      </a>
    {/each}
  </div>

  <!-- Pgp fingerprint -->
  <div class="flex max-w-full flex-wrap items-center justify-center gap-2">
    <a href="/pgp">pgp</a>
  </div>

  <HomeBackground />
</div>
