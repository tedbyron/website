<script lang="ts">
  import PostList from '$components/PostList.svelte'
  import type { PageProps } from './$types'

  let { data }: PageProps = $props()
</script>

<div class="container flex flex-col items-center gap-8 px-2 pt-4">
  <h1>Notes</h1>

  <PostList postsMetadata={data.postsMetadata} />
</div>
