<script lang="ts">
  import Heading from '$lib/Heading.svelte'
  import Page from '$lib/Page.svelte'
  import ColorModule from './Color.svelte'
  import NumberModule from './Number.svelte'
</script>

<svelte:head>
  <title>Convert</title>
  <meta name="description" content="Simple conversions for data, colors, images, etc." />
</svelte:head>

<Page class="convert">
  <Heading tag="h1" class="text-center">Convert</Heading>

  <NumberModule />
  <ColorModule />
</Page>
