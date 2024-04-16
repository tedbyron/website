<script lang="ts">
  import type { PageData } from './$types'

  import TagLink from '$components/TagLink.svelte'

  export let data: PageData
</script>

<div class="container flex flex-col items-center gap-8 px-2 pt-4">
  <h1>Tags</h1>

  {#if Array.isArray(data.postTags) && data.postTags.length > 0}
    <ul>
      {#each data.postTags as [tag, { label, className }] (tag)}
        <li><TagLink {tag} {label} class={className} /></li>
      {/each}
    </ul>
  {/if}
</div>
