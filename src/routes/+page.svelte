<script lang="ts">
  import { job, fingerprint, links } from '$lib/constants'
</script>

<div class="container flex flex-col items-center gap-8 px-2 pt-4">
  <!-- Header -->
  <div class="flex flex-col gap-4 text-center">
    <h1>Teddy Byron</h1>
    <span>{job.title} @ <a href={job.company.url}>{job.company.name}</a></span>
  </div>

  <!-- Links -->
  <div class="flex flex-col gap-4">
    {#each links as link (link.label)}
      <a href={link.href} class="group flex items-center gap-2 no-underline">
        <link.icon class="text-xl" />
        <span class="leading-none">{link.label}</span>
      </a>
    {/each}
  </div>

  <!-- Pgp fingerprint -->
  <div class="flex max-w-full flex-col gap-2">
    <div class="flex flex-wrap items-center justify-center gap-2">
      <span>pgp</span>

      <div class="overflow-auto">
        <samp>{fingerprint}</samp>
      </div>
    </div>
  </div>
</div>
