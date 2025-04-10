<script lang="ts">
  import { fingerprint, job, links } from '$lib/constants'
  import HomeBackground from '$components/HomeBackground.svelte'
</script>

<div class="container flex flex-col items-center gap-8 px-2 pt-4">
  <!-- Header -->
  <div class="flex flex-col gap-4 text-center">
    <h1 class="animate">Teddy Byron</h1>
    <span class="animate delay-100"
      >{job.title} @ <a href={job.company.url}>{job.company.name}</a></span
    >
  </div>

  <!-- Links -->
  <div class="flex flex-col gap-4">
    {#each links as link (link.label)}
      <a
        href={link.href}
        class={['animate flex items-center gap-2 no-underline', link.class]}
      >
        <link.icon aria-hidden class="text-xl" />
        <span class="leading-none">{link.label}</span>
      </a>
    {/each}
  </div>

  <!-- Pgp fingerprint -->
  <div
    class="animate delay-600 flex max-w-full flex-wrap items-center justify-center gap-2"
  >
    <span>pgp</span>

    <div class="overflow-auto">
      <samp>{fingerprint}</samp>
    </div>
  </div>

  <HomeBackground />
</div>

<style lang="postcss">
  .animate {
    @apply animate-in fade-in slide-in-from-top-4 fill-mode-backwards transition-none duration-700 ease-out;
  }
</style>
