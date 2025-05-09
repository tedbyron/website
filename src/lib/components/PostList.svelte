<script lang="ts">
  import TagLink from '$components/TagLink.svelte'
  import { formatDate, postTags } from '$lib'

  interface Props {
    postsMetadata: App.PostMetadataParsed[]
  }

  const { postsMetadata }: Props = $props()
  const tags = (post: App.PostMetadataParsed) =>
    [...new Set(post.tags)]
      .map<
        [keyof App.PostTags, App.PostTags[keyof App.PostTags]]
      >((tag) => [tag, postTags[tag as keyof typeof postTags]])
      .toSorted((a, b) => a[0].localeCompare(b[0], 'en'))
</script>

<ul>
  {#each postsMetadata as post (post.slug)}
    <li class="grid grid-cols-[auto_1fr] grid-rows-[repeat(2,auto)] gap-x-4">
      <!-- Post date -->
      <span class="text-light-gray dark:text-gray">{formatDate(post.date)}</span
      >

      <!-- Post title and description -->
      <a href="/words/{post.slug}" class="flex gap-4 no-underline">
        <div class="flex flex-col">
          <span class="mb-1 text-lg font-bold leading-tight">{post.title}</span>
          {#if post.description}
            <span>{post.description}</span>
          {/if}
        </div>
      </a>

      <div></div>

      <!-- Post tags -->
      <div class="flex gap-2">
        {#each tags(post) as [tag, { class: className }] (tag)}
          <TagLink {tag} class={className} />
        {/each}
      </div>
    </li>
  {/each}
</ul>
