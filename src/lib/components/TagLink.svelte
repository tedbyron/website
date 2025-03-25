<script lang="ts">
  import type { postTag } from '$lib'

  interface Props {
    tag: App.PostTag
    label: (typeof postTag)[App.PostTag]['label']
    class: (typeof postTag)[App.PostTag]['className']
  }

  const { tag, label, class: className }: Props = $props()
</script>

<a
  href="/words/tags/{tag}"
  class={['inline-flex items-center gap-0.5 no-underline hover:underline', className]}>#{label}</a
>
