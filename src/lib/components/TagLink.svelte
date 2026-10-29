<script lang="ts">
  import { resolve } from '$app/paths'
  import { postTags, type PostTag } from '#lib'

  interface Props {
    tag: PostTag
  }

  const { tag }: Props = $props()
</script>

<a
  href={resolve('/notes/tags/[tag=tag]', { tag })}
  class={['no-underline hover:underline', postTags[tag].class]}>#{tag}</a
>
