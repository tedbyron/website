<script lang="ts">
  import type { Snippet } from 'svelte'

  import '$lib/assets/css/prism.css'

  interface Props {
    children?: Snippet
    class?: string
  }

  const { children, class: className }: Props = $props()
</script>

<article
  class={[
    className,
    'container prose flex max-w-[80ch] flex-col px-2 pt-4',
    'prose-p:hyphens-auto prose-p:text-pretty prose-p:break-words',
    'prose-a:decoration-orange prose-a:decoration-[1.3px] prose-a:underline-offset-2',
    'prose-pre:rounded-lg prose-pre:outline prose-pre:outline-1 prose-pre:outline-bgc',
    'prose-kbd:hyphens-none prose-kbd:outline prose-kbd:outline-1 prose-kbd:outline-bgc',
    'prose-code:hyphens-none before:prose-code:content-none after:prose-code:content-none',
  ]}
>
  {@render children?.()}
</article>
