<script lang="ts">
  import HomeBackground from '$components/HomeBackground.svelte'
  import { fingerprint, work, links } from '$lib/constants'
</script>

<div class="container flex flex-col items-center gap-8 px-2 pt-4">
  <!-- Header -->
  <div class="flex flex-col gap-4 text-center">
    <h1 class="home-animate">Teddy Byron</h1>
    <span class="home-animate delay-100">
      {work.title}

      {#if work.company?.url && work.company.name}
        @ <a href={work.company.url}>{work.company.name}</a>
      {:else if work.company?.name}
        @ {work.company.name}
      {:else if work.location}
        in {work.location}
      {/if}
    </span>
  </div>

  <!-- Links -->
  <div class="flex flex-col gap-4">
    {#each links as link (link.label)}
      <a
        href={link.href}
        class={[
          'home-animate flex items-center gap-2 no-underline',
          link.class,
        ]}
      >
        <link.icon aria-hidden class="text-xl" />
        <span class="leading-none">{link.label}</span>
      </a>
    {/each}
  </div>

  <!-- Pgp fingerprint -->
  <div
    class="home-animate flex max-w-full flex-wrap items-center justify-center gap-2 delay-600"
  >
    <span>pgp</span>

    <div class="overflow-auto">
      <samp>{fingerprint}</samp>
    </div>
  </div>

  <HomeBackground />
</div>
