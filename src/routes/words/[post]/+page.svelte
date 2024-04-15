<script lang="ts">
  import './prism-dracula.css'

  import type { PageData } from './$types'

  export let data: PageData
</script>

<article
  class="container prose prose-dracula flex max-w-prose flex-col px-2 pt-4
  prose-p:hyphens-auto prose-p:break-words prose-p:text-justify
  prose-a:decoration-green prose-a:decoration-[1.3px] prose-a:underline-offset-2
  prose-kbd:hyphens-none prose-kbd:outline prose-kbd:outline-1 prose-kbd:outline-gray
  prose-code:hyphens-none before:prose-code:content-none after:prose-code:content-none
  prose-pre:rounded-lg prose-pre:outline prose-pre:outline-1 prose-pre:outline-gray"
>
  <h1 class="mb-0">{data.metadata.title}</h1>
  <span class="text-slate">{data.metadata.date}</span>

  <svelte:component this={data.component} />
</article>
