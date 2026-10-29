<script lang="ts" module>
  import grainShader from '#lib/assets/shaders/grain.glsl?raw'
  import lavaLampShader from '#lib/assets/shaders/lava-lamp.glsl?raw'

  type Rgb = [number, number, number]

  const blobCount = 10
  // At most about 1920x1080, stretched to fill bigger screens.
  const maxPixels = 2_000_000
  const fps = 24
  const speed = 0.5
  // How much of each color is mixed into the background. Above 0.33, body text
  // drops below 4.5:1 contrast over orange in dark mode.
  const strength = 0.2

  // A triangle covering the whole canvas.
  const vertexShader = `#version 300 es
  void main() {
    gl_Position = vec4(4. * vec2(gl_VertexID & 1, gl_VertexID >> 1) - 1., 0., 1.);
  }`

  function createProgram(gl: WebGL2RenderingContext, fragmentShader: string) {
    const program = gl.createProgram()
    const sources = [
      [gl.VERTEX_SHADER, vertexShader],
      [
        gl.FRAGMENT_SHADER,
        `#version 300 es\n#define BLOB_COUNT ${blobCount}\n${fragmentShader}`,
      ],
    ] as const
    for (const [type, source] of sources) {
      const shader = gl.createShader(type)
      if (shader === null) throw new Error('Grain: could not create a shader')
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(`Grain: ${gl.getShaderInfoLog(shader)}`)
      }
      gl.attachShader(program, shader)
    }
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw new Error(`Grain: ${gl.getProgramInfoLog(program)}`)
    }
    return program
  }

  /** A `#rrggbb` color as RGB from 0 to 1. */
  const rgb = (hex: string): Rgb => [
    parseInt(hex.slice(1, 3), 16) / 255,
    parseInt(hex.slice(3, 5), 16) / 255,
    parseInt(hex.slice(5, 7), 16) / 255,
  ]

  /** Theme colors from the CSS variables in app.css, muted. */
  function themeColors(dark: boolean) {
    const style = getComputedStyle(document.documentElement)
    const color = (name: string) =>
      rgb(style.getPropertyValue(`--color-${dark ? '' : 'light-'}${name}`))
    const background = color('bg')
    const mix = (c: number, back: number) => back + (c - back) * strength
    const colors = [color('gray'), color('orange'), color('yellow')].flatMap(
      ([r, g, b]) => [
        mix(r, background[0]),
        mix(g, background[1]),
        mix(b, background[2]),
      ],
    )
    return { background, colors }
  }
</script>

<script lang="ts">
  import type { Attachment } from 'svelte/attachments'
  import { prefersReducedMotion } from 'svelte/motion'
  import { MediaQuery } from 'svelte/reactivity'

  const dark = new MediaQuery('(prefers-color-scheme: dark)')
  let visible = $state(false)
  // Counts restored WebGL contexts, to start over on a new canvas.
  let restores = $state(0)

  // Random per blob, between .55 and .95, stored as 1 / size for the shader.
  const inverseSizes = Array.from(
    { length: blobCount },
    () => 1 / (0.55 + 0.4 * Math.random()),
  )
  const blobs = new Float32Array(3 * blobCount)

  /** Sets each blob's offset at `time`, mostly rising and sinking. */
  function moveBlobs(time: number) {
    const t = time * 2e-4
    inverseSizes.forEach((inverseSize, i) => {
      blobs[3 * i] = 0.4 * Math.sin(0.3 * t + 2.4 * i)
      blobs[3 * i + 1] =
        0.5 * Math.sin((0.35 + 0.1 * Math.sin(3.7 * i)) * t + 1.3 * i)
      blobs[3 * i + 2] = inverseSize
    })
  }

  const grain: Attachment<HTMLCanvasElement> = (canvas) => {
    // A full-screen gradient gains nothing from antialiasing, alpha or a depth
    // buffer, and low power keeps laptops on the integrated GPU.
    const gl = canvas.getContext('webgl2', {
      alpha: false,
      antialias: false,
      depth: false,
      powerPreference: 'low-power',
    })
    // No WebGL 2: keep the plain background.
    if (gl === null) return

    let grainProgram: WebGLProgram
    let lavaLampProgram: WebGLProgram
    try {
      grainProgram = createProgram(gl, grainShader)
      lavaLampProgram = createProgram(gl, lavaLampShader)
    } catch (error) {
      console.error(error)
      return
    }
    const uniform = (name: string) =>
      gl.getUniformLocation(lavaLampProgram, name)
    const grainResolution = gl.getUniformLocation(grainProgram, 'u_resolution')
    const resolution = uniform('u_resolution')
    const blobsUniform = uniform('u_blobs')
    const background = uniform('u_background')
    const colors = uniform('u_colors')

    // The grain doesn't move, so it's rendered into this texture once per
    // canvas size, and each frame only adds the blobs.
    const grainTexture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, grainTexture)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
    const framebuffer = gl.createFramebuffer()
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer)
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      grainTexture,
      0,
    )
    gl.bindFramebuffer(gl.FRAMEBUFFER, null)
    gl.useProgram(lavaLampProgram)

    // Start somewhere random in the first 10 minutes of the animation.
    let time = Math.random() * 600_000
    let lastFrameTime = performance.now()
    let rafId = 0

    const draw = () => {
      moveBlobs(time)
      gl.uniform3fv(blobsUniform, blobs)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    // Matches until the pixel ratio changes, like when the window moves to
    // another screen, which doesn't always resize the canvas.
    let pixelRatio: MediaQueryList | undefined

    const resize = () => {
      const dpr = window.devicePixelRatio
      pixelRatio?.removeEventListener('change', resize)
      pixelRatio = matchMedia(`(resolution: ${dpr}dppx)`)
      pixelRatio.addEventListener('change', resize)

      const width = canvas.clientWidth * dpr
      const height = canvas.clientHeight * dpr
      const scale = Math.min(1, Math.sqrt(maxPixels / (width * height)))
      if (
        canvas.width === Math.round(width * scale) &&
        canvas.height === Math.round(height * scale)
      ) {
        return
      }
      canvas.width = Math.round(width * scale)
      canvas.height = Math.round(height * scale)
      gl.viewport(0, 0, canvas.width, canvas.height)

      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA8,
        canvas.width,
        canvas.height,
        0,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        null,
      )
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer)
      gl.useProgram(grainProgram)
      gl.uniform2f(grainResolution, canvas.width, canvas.height)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
      gl.bindFramebuffer(gl.FRAMEBUFFER, null)

      gl.useProgram(lavaLampProgram)
      gl.uniform2f(resolution, canvas.width, canvas.height)
      draw()
    }

    // Draw at most 24 frames a second. The blobs move slowly enough that it
    // still looks smooth.
    const tick = (now: number) => {
      rafId = requestAnimationFrame(tick)
      if (now - lastFrameTime < 1000 / fps - 2) return
      // Cap the step so returning to a hidden tab doesn't jump ahead.
      time += Math.min(now - lastFrameTime, 100) * speed
      lastFrameTime = now
      draw()
    }

    // Also runs once right away, for the first frame.
    const observer = new ResizeObserver(resize)
    observer.observe(canvas)

    // The GPU can be lost, like after a driver reset or when a phone reclaims
    // memory from a background tab. Hide until it's back, then start over.
    const listeners = new AbortController()
    canvas.addEventListener(
      'webglcontextlost',
      (event) => {
        // Lets the browser restore the context.
        event.preventDefault()
        visible = false
      },
      { signal: listeners.signal },
    )
    canvas.addEventListener('webglcontextrestored', () => restores++, {
      signal: listeners.signal,
    })
    rafId = requestAnimationFrame(tick)
    // Fade in once the first frame has rendered.
    requestAnimationFrame(() => (visible = !gl.isContextLost()))

    // Swap colors when the color scheme changes.
    $effect(() => {
      const theme = themeColors(dark.current)
      gl.uniform3fv(background, theme.background)
      gl.uniform3fv(colors, theme.colors)
      draw()
    })

    return () => {
      cancelAnimationFrame(rafId)
      observer.disconnect()
      pixelRatio?.removeEventListener('change', resize)
      listeners.abort()
      // Frees the GPU memory now instead of whenever the canvas is collected.
      gl.getExtension('WEBGL_lose_context')?.loseContext()
      visible = false
    }
  }
</script>

<!-- Not shown with reduced motion: without the animation, it's not much to look
at. Sized to the largest viewport so that phones showing or hiding the address
bar while scrolling don't resize it. -->
{#if !prefersReducedMotion.current}
  {#key restores}
    <canvas
      {@attach grain}
      aria-hidden="true"
      class={[
        'fixed top-0 left-0 -z-10 h-lvh w-full transition-opacity duration-1000',
        visible ? 'opacity-100' : 'opacity-0',
      ]}
    ></canvas>
  {/key}
{/if}
