<script lang="ts">
  import TagLink from '#components/TagLink.svelte'
  import type { PageProps } from './$types'

  const { data }: PageProps = $props()
</script>

<div class="container flex flex-col items-center gap-8 px-2 pt-4">
  <h1>Tags</h1>

  <ul>
    {#each data.postTags as tag (tag)}
      <li><TagLink {tag} /></li>
    {/each}
  </ul>
</div>
