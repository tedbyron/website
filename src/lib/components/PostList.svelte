<script lang="ts">
  import { resolve } from '$app/paths'
  import TagLink from '#components/TagLink.svelte'
  import { formatDate } from '#lib'

  interface Props {
    postsMetadata: App.PostMetadataParsed[]
  }

  const { postsMetadata }: Props = $props()
</script>

<ul>
  {#each postsMetadata as post (post.slug)}
    <li class="grid grid-cols-[auto_1fr] gap-x-4">
      <!-- Post date -->
      <span class="text-light-gray dark:text-gray">{formatDate(post.date)}</span
      >

      <!-- Post title and description -->
      <a
        href={resolve('/notes/[post=post]', { post: post.slug })}
        class="flex flex-col no-underline"
      >
        <span class="mb-1 text-lg leading-tight font-bold">{post.title}</span>
        {#if post.description}
          <span>{post.description}</span>
        {/if}
      </a>

      <!-- Post tags -->
      <div class="col-start-2 flex gap-2">
        {#each post.tags as tag (tag)}
          <TagLink {tag} />
        {/each}
      </div>
    </li>
  {/each}
</ul>
