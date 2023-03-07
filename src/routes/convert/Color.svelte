<script lang="ts">
  import Module from './Module.svelte'

  interface Rgb {
    r: number
    g: number
    b: number
  }

  interface Rgba extends Rgb {
    a: number
  }

  interface Hsl {
    h: number
    s: number
    l: number
  }

  interface Hsla extends Hsl {
    a: number
  }

  let hex = '#bd93f9'
  const alpha = 1
  let rgba = ''
  let hsla = ''

  const hexToRgb = (hex: string): Rgb => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)

    return { r, g, b }
  }
</script>

<Module
  name="Color"
  styleColor={hex}
  class="grid grid-cols-[auto_1fr] gap-1 sm:grid-cols-[repeat(3,auto_1fr)]"
>
  <div class="col-span-2 mb-1 h-6 rounded-md sm:col-span-6" style:background-color={hex} />

  <label for="colors-input-hex">Hex</label>
  <input
    type="text"
    id="colors-input-hex"
    bind:value={hex}
    on:focus={(e) => e.currentTarget.select()}
  />

  <label for="colors-input-rgba">RGBA</label>
  <input
    type="text"
    id="colors-input-rgba"
    bind:value={rgba}
    on:focus={(e) => e.currentTarget.select()}
  />

  <label for="colors-input-hsla">HSLA</label>
  <input
    type="text"
    id="colors-input-hsla"
    bind:value={hsla}
    on:focus={(e) => e.currentTarget.select()}
  />
</Module>
