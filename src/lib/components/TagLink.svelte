<script lang="ts">
  import { cn } from '$lib'

  import type { postTag } from '$lib'

  export let tag: App.PostTag
  export let label: (typeof postTag)[App.PostTag]['label']
  let className: (typeof postTag)[App.PostTag]['className']
  export { className as class }
</script>

<a
  href="/words/tags/{tag}"
  class={cn('inline-flex items-center gap-0.5 no-underline hover:underline', className)}>#{label}</a
>
