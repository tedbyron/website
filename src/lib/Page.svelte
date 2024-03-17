<script lang="ts">
  import { cn } from '$lib'

  let element = 'div'
  let className = ''
  export { element as this, className as class }
</script>

<svelte:element this={element} class={cn('container px-2 pt-4', className)}>
  <slot />
</svelte:element>
