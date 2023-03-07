<script lang="ts">
  import ColorModule from './Color.svelte'
  import NumberModule from './Number.svelte'

  import Heading from '$lib/Heading.svelte'
  import Section from '$lib/Section.svelte'
</script>

<svelte:head>
  <title>Convert</title>
  <meta name="description" content="Simple conversions for data, colors, images, etc." />
</svelte:head>

<Section class="convert">
  <Heading tag="h1" class="text-center">Convert</Heading>

  <NumberModule />
  <ColorModule />
</Section>
