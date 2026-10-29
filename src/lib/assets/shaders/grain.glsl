// Adapted from the grain gradient shader in Paper Shaders
// (https://github.com/paper-design/shaders), copyright 2026 Paper, licensed
// under the Apache License 2.0. Changed: only the grain is kept, rendered once
// per canvas size into a texture that `lava-lamp.glsl` reads, with a hash in
// place of the noise texture.

precision highp float;

uniform vec2 u_resolution;

out vec4 fragColor;

vec3 permute(vec3 x) { return mod(((x * 34.) + 1.) * x, 289.); }

float snoise(vec2 v) {
  const vec4 C = vec4(.211324865405187, .366025403784439, -.577350269189626, .024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1., 0.) : vec2(0., 1.);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.);
  vec3 p = permute(permute(i.y + vec3(0., i1.y, 1.)) + i.x + vec3(0., i1.x, 1.));
  vec3 m = max(.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.);
  m = m * m;
  m = m * m;
  vec3 x = 2. * fract(p * C.www) - 1.;
  vec3 h = abs(x) - .5;
  vec3 ox = floor(x + .5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - .85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130. * dot(m, g);
}

vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}

float random(vec2 p) {
  p = fract(floor(p) * vec2(.3183099, .3678794)) + .1;
  p += dot(p, p + 19.19);
  return fract(p.x * p.y);
}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = random(i);
  float b = random(i + vec2(1., 0.));
  float c = random(i + vec2(0., 1.));
  float d = random(i + vec2(1., 1.));
  vec2 u = f * f * (3. - 2. * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

vec3 fbm(vec2 n0, vec2 n1, vec2 n2, vec2 n3) {
  float amplitude = .2;
  vec3 total = vec3(0.);
  for (int i = 0; i < 3; i++) {
    n0 = rotate(n0, .3);
    n1 = rotate(n1, .3);
    n2 = rotate(n2, .3);
    n3 = rotate(n3, .3);
    total += amplitude * vec3(valueNoise(n0), valueNoise(n1), valueNoise(n2) + valueNoise(n3));
    n0 *= 1.99;
    n1 *= 1.99;
    n2 *= 1.99;
    n3 *= 1.99;
    amplitude *= .6;
  }
  return total;
}

void main() {
  // From the top left corner, which stays put on the page when the canvas
  // resizes, so the grain doesn't shift.
  vec2 grainUV = .7 * vec2(gl_FragCoord.x, u_resolution.y - gl_FragCoord.y);

  float baseNoise = snoise(.5 * grainUV);
  vec3 fbmValues = fbm(.002 * grainUV + 10., .003 * grainUV, .001 * grainUV, rotate(.4 * grainUV, 2.));
  float grainDist = baseNoise * snoise(.2 * grainUV) - fbmValues.x - fbmValues.y;
  float noise = clamp(.75 * baseNoise - fbmValues.z, 0., 1.);

  // How much the grain pushes this pixel's shape, with the original's 0.75
  // intensity and 0.15 noise over 3 colors.
  float grain = .5 * (grainDist + .5) + .5 * noise;

  // Packed into two 8-bit channels, for values from -1 to 2.
  float packed = 255. * clamp((grain + 1.) / 3., 0., 1.);
  fragColor = vec4(floor(packed) / 255., fract(packed), 0., 1.);
}
