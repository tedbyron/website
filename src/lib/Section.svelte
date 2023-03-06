<script lang="ts">
  import { classnames } from '$lib'

  let className = ''
  export { className as class }
</script>

<section class={classnames('container px-3 pt-3 sm:px-6 sm:pt-6', className)}>
  <slot />
</section>
