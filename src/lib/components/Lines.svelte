<script lang="ts">
  import { colors } from '$lib'
  import {
    AlphaFilter,
    Application,
    BlurFilter,
    Graphics,
    type TickerCallback,
  } from 'pixi.js'
  import 'pixi.js/unsafe-eval'
  import { createNoise3D } from 'simplex-noise'
  import { onMount } from 'svelte'

  const app = new Application()
  const color = [colors.orange, colors.yellow, colors.gray]
  const noise = createNoise3D()
  const filters = [
    new AlphaFilter({ alpha: 0.3 }),
    new BlurFilter({ strength: 48, quality: 12, antialias: true }),
  ]

  let canvas: HTMLCanvasElement
  let observer: ResizeObserver
  let graphics: Graphics[] = []
  let nt = 0
  let w: number
  let h: number

  const update: TickerCallback<undefined> = () => {
    nt += 3e-4
    for (let i = 0; i < graphics.length; i++) {
      const g = graphics[i]!
      g.clear()
        .setStrokeStyle({ width: 80, color: color[i] })
        .moveTo(0, noise(0, 0.25 * i, nt) * 100 + (3 * h) / 4)
      for (let x = 0; x < w; x += 5) {
        g.lineTo(x, noise(x / 800, 0.25 * i, nt) * 100 + (3 * h) / 4).stroke()
      }
    }
  }

  const resize: ResizeObserverCallback = (entries) => {
    const box = entries[0]?.contentBoxSize[0]
    if (box === undefined) return
    w = box.inlineSize
    h = box.blockSize
    app.renderer.resize(w, h)
  }

  onMount(async () => {
    await app.init({
      canvas,
      width: document.body.clientWidth,
      height: document.body.clientHeight,
      antialias: true,
      autoDensity: true,
      backgroundAlpha: 0,
      sharedTicker: true,
    })

    observer = new ResizeObserver(resize)
    observer.observe(document.body)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _ of color) {
      graphics.push(new Graphics({ filters }))
    }

    app.stage.addChild(...graphics)
    app.ticker.add(update)
  })

  onMount(() => () => {
    observer.disconnect()
    app.ticker.remove(update)
    app.destroy(false, { children: true })

    for (const filter of filters) {
      filter.destroy()
    }
  })
</script>

<svelte:window bind:innerWidth={w} bind:innerHeight={h} />

<canvas bind:this={canvas} class="absolute top-0 -z-10"></canvas>
