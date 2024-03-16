<script lang="ts">
  import { cn } from '$lib'

  let className = ''
  export { className as class }
</script>

<div class={cn('container px-3 pt-6 sm:px-6', className)}>
  <slot />
</div>
