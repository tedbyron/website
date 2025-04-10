<script lang="ts">
  import PostList from '$components/PostList.svelte'
  import { postTags } from '$lib'
  import type { PageProps } from './$types'

  const { data }: PageProps = $props()
  const className = $derived(postTags[data.postTag].class)
</script>

<div class="container flex flex-col items-center gap-8 px-2 pt-4">
  <h1>Words about <span class={className}>#{data.postTag}</span></h1>

  <PostList postsMetadata={data.postsMetadata} />
</div>
