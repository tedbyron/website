<script lang="ts">
  import MdWrapper from '$components/MdWrapper.svelte'
  import '$lib/assets/css/prism.css'
  import type { PageProps } from './$types'

  const { data }: PageProps = $props()
</script>

<MdWrapper>
  <h1 class="mb-0">{data.metadata.title}</h1>
  <time datetime={data.metadata.date} class="text-light-gray dark:text-gray"
    >{data.metadata.date}</time
  >

  <data.component />
</MdWrapper>
