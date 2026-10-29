<script lang="ts">
  import { resolve } from '$app/paths'
  import type { postTags } from '$lib'

  interface Props {
    tag: keyof App.PostTags
    class: App.PostTags[keyof App.PostTags]['class']
  }

  const { tag, class: className }: Props = $props()
  // Post tags are validated against `postTags` when posts load.
  const href = $derived(
    resolve('/notes/tags/[tag=tag]', { tag: tag as keyof typeof postTags }),
  )
</script>

<a
  {href}
  class={[
    'inline-flex items-center gap-0.5 no-underline hover:underline',
    className,
  ]}>#{tag}</a
>
