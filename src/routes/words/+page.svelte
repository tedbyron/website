<script lang="ts">
  import PostList from '$components/PostList.svelte'

  import type { PageData } from './$types'

  export let data: PageData
</script>

<div class="container flex flex-col items-center gap-8 px-2 pt-4">
  <h1>Words</h1>

  {#if data.postsMetadata}
    <PostList postsMetadata={data.postsMetadata} />
  {/if}
</div>
