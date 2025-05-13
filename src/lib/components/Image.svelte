<script lang="ts">
  interface Props {
    src: string
    alt: string
  }

  const { src, alt }: Props = $props()
</script>

<!-- https://github.com/jonaskruckenberg/imagetools/blob/main/docs/directives.md -->
<enhanced:img {src} {alt} />
