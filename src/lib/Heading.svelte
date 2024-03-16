<script lang="ts">
  import { cn } from '$lib'

  type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  let className = ''
  export { className as class }
  export let tag: HeadingLevel

  switch (tag) {
    case 'h1':
      className = cn('text-5xl sm:text-6xl sm:leading-none', className)
      break
    case 'h2':
      className = cn('text-3xl sm:text-4xl sm:leading-none', className)
      break
    case 'h3':
      className = cn('text-xl', className)
      break
    case 'h4':
      className = cn('text-base', className)
      break
    case 'h5':
      className = cn('text-sm', className)
      break
    case 'h6':
      className = cn('text-xs', className)
  }
</script>

<svelte:element this={tag} class={cn('font-serif font-bold leading-none text-slate', className)}
  ><slot /></svelte:element
>
