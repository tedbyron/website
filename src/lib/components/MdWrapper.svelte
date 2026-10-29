<script lang="ts">
  import type { Snippet } from 'svelte'

  import '#lib/assets/css/prism.css'

  interface Props {
    children?: Snippet
    class?: string
  }

  const { children, class: className }: Props = $props()
</script>

<article
  class={[
    className,
    'container prose flex max-w-[80ch] flex-col px-2 pt-4 dark:prose-invert',
    'prose-p:text-pretty prose-p:wrap-break-word prose-p:hyphens-auto',
    'prose-a:decoration-light-orange prose-a:decoration-[1.3px] prose-a:underline-offset-2',
    'dark:prose-a:decoration-orange',
    'prose-pre:rounded-lg prose-pre:outline-1 prose-pre:outline-light-bgc prose-pre:outline-solid',
    'dark:prose-pre:outline-bgc',
    'prose-kbd:hyphens-none prose-kbd:outline-1 prose-kbd:outline-light-bgc prose-kbd:outline-solid',
    'dark:prose-kbd:outline-bgc',
    'prose-code:hyphens-none prose-code:before:content-none prose-code:after:content-none',
  ]}
>
  {@render children?.()}
</article>
