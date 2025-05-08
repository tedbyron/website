<script lang="ts">
  import MdPage from '$components/MdPage.svelte'
  import '$lib/assets/css/prism.css'
  import type { PageProps } from './$types'

  const { data }: PageProps = $props()
</script>

<MdPage>
  <h1 class="mb-0">{data.metadata.title}</h1>
  <time datetime={data.metadata.date} class="text-gray"
    >{data.metadata.date}</time
  >

  <data.component />
</MdPage>
