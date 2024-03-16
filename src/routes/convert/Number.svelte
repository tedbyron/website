<script lang="ts">
  import { cn } from '$lib'
  import Module from './Module.svelte'

  type Side = 'left' | 'right'

  const radices = [
    { radix: 2, name: 'bin' },
    { radix: 8, name: 'oct' },
    { radix: 10, name: 'dec' },
    { radix: 16, name: 'hex' },
  ] as const

  const invalid = 'border-red focus:border-red focus:ring-red'

  let num = 42
  let leftRadix = 10
  $: left = num.toString(leftRadix)
  let leftInvalid = false
  let rightRadix = 16
  $: right = num.toString(rightRadix)
  let rightInvalid = false

  const changeRadix = (e: Event, side: Side): void => {
    const target = e.currentTarget as HTMLSelectElement

    switch (side) {
      case 'left':
        leftRadix = parseInt(target.value, 10)
        break
      case 'right':
        rightRadix = parseInt(target.value, 10)
    }
  }

  const changeNum = (e: Event, radix: number, side: Side): void => {
    const target = e.currentTarget as HTMLInputElement

    const n = parseInt(target.value, radix)
    const invalid = isNaN(n)

    switch (side) {
      case 'left':
        leftInvalid = invalid
        invalid ? (left = target.value) : (num = n)
        break
      case 'right':
        rightInvalid = invalid
        invalid ? (right = target.value) : (num = n)
    }
  }
</script>

<Module
  name="Number"
  fieldsetClass="grid grid-cols-[auto_1fr] gap-1 sm:grid-cols-[repeat(2,auto_1fr)]"
  legendClass="text-orange"
>
  <select
    aria-label="left radix"
    bind:value={leftRadix}
    on:change={(e) => {
      changeRadix(e, 'left')
    }}
    class=""
  >
    {#each radices as { radix, name } (radix)}
      <option value={radix}>{name}</option>
    {/each}
  </select>

  <input
    type="text"
    aria-label="left number"
    value={left}
    on:input={(e) => {
      changeNum(e, leftRadix, 'left')
    }}
    on:focus={(e) => {
      e.currentTarget.select()
    }}
    class={cn({ [invalid]: leftInvalid })}
  />

  <select
    aria-label="right radix"
    bind:value={rightRadix}
    on:change={(e) => {
      changeRadix(e, 'right')
    }}
  >
    {#each radices as { radix, name } (radix)}
      <option value={radix}>{name}</option>
    {/each}
  </select>

  <input
    type="text"
    aria-label="right number"
    value={right}
    on:input={(e) => {
      changeNum(e, rightRadix, 'right')
    }}
    on:focus={(e) => {
      e.currentTarget.select()
    }}
    class={cn({ [invalid]: rightInvalid })}
  />
</Module>
