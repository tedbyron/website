<script lang="ts">
  import { page } from '$app/stores'
</script>

<div class="container flex flex-col items-center gap-4 px-2 pt-4">
  <h1>{$page.status}</h1>

  {#if $page.error !== null}
    <p class="max-w-prose">{$page.error.message}</p>
  {/if}
</div>
