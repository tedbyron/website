<script lang="ts">
  import { formatDate } from '$lib'

  import type { PageData } from './$types'

  export let data: PageData
</script>

<div class="container flex flex-col items-center gap-8 px-2 pt-4">
  <h1>Words</h1>

  {#if data.posts}
    <ul>
      {#each data.posts as post (post.slug)}
        <li>
          <a href={'/words/' + post.slug} class="flex gap-4 no-underline">
            <span class="text-slate">{formatDate(post.date)}</span>
            <div class="flex flex-col">
              <span class="underline-green">{post.title}</span>
              <span>{post.description}</span>
            </div>
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</div>
