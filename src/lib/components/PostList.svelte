<script lang="ts">
  import TagLink from '$components/TagLink.svelte'
  import { formatDate, postTag } from '$lib'

  interface Props {
    postsMetadata: App.PostMetadataParsed[]
  }

  const { postsMetadata }: Props = $props()
  const tags = (post: App.PostMetadataParsed) =>
    [...new Set(post.tags)]
      .map<
        [keyof App.PostTags, App.PostTags[keyof App.PostTags]]
      >((tag) => [tag, postTag[tag as keyof typeof postTag]])
      .toSorted((a, b) => (a[1].label < b[1].label ? -1 : 1))
</script>

<ul>
  {#each postsMetadata as post (post.slug)}
    <li class="grid grid-cols-[auto_1fr] grid-rows-[repeat(2,auto)] gap-x-4">
      <!-- Post date -->
      <span class="text-slate">{formatDate(post.date)}</span>

      <!-- Post title and description -->
      <a href="/words/{post.slug}" class="flex gap-4 no-underline">
        <div class="flex flex-col">
          <span class="underline-orange">{post.title}</span>
          <span>{post.description}</span>
        </div>
      </a>

      <div></div>

      <!-- Post tags -->
      <div class="flex gap-2">
        {#each tags(post) as [tag, { label, class: className }] (tag)}
          <TagLink {tag} {label} class={className} />
        {/each}
      </div>
    </li>
  {/each}
</ul>
