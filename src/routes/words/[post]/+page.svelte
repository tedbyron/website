<script lang="ts">
  import type { PageProps } from './$types'
  import './prism-gruvbox.css'

  const { data }: PageProps = $props()
  const { metadata } = $derived(data)
</script>

<article
  class={[
    'prose-gruvbox container prose flex max-w-prose flex-col px-2 pt-4',
    'prose-p:hyphens-auto prose-p:text-pretty prose-p:break-words',
    'prose-a:decoration-orange prose-a:decoration-[1.3px] prose-a:underline-offset-2',
    'prose-pre:outline-black1 prose-pre:rounded-lg prose-pre:outline prose-pre:outline-1',
    'prose-kbd:outline-black1 prose-kbd:hyphens-none prose-kbd:outline prose-kbd:outline-1',
    'prose-code:hyphens-none before:prose-code:content-none after:prose-code:content-none',
  ]}
>
  <h1 class="mb-0">{metadata.title}</h1>
  <span class="text-gray">{metadata.date}</span>

  <data.component />
</article>
