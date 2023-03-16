<script lang="ts">
  import { classnames } from '$lib'

  let className = ''
  export { className as class }
</script>

<section class={classnames('container px-3 pt-6 sm:px-6', className)}>
  <slot />
</section>
