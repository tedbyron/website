<script lang="ts">
  import { classnames } from '$lib'

  type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  let className = ''
  export { className as class }
  export let tag: HeadingLevel

  switch (tag) {
    case 'h1':
      className = classnames('text-4xl sm:text-6xl', className)
      break
    case 'h2':
      className = classnames('text-2xl sm:text-4xl', className)
      break
    case 'h3':
      className = classnames('text-xl', className)
      break
    case 'h4':
      className = classnames('text-base', className)
      break
    case 'h5':
      className = classnames('text-sm', className)
      break
    case 'h6':
      className = classnames('text-xs', className)
      break
  }
</script>

<svelte:element this={tag} class={classnames('font-serif font-bold text-slate', className)}
  ><slot /></svelte:element
>
