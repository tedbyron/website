// Adapted from the grain gradient shader in Paper Shaders
// (https://github.com/paper-design/shaders), copyright 2026 Paper, licensed
// under the Apache License 2.0. Changed: the blob shape's four metaballs are
// swapped for more, smaller ones, placed from JavaScript, that mostly rise and
// sink like a lava lamp, with softer edges; the grain is read from the texture
// `grain.glsl` renders; and the sizing and color options are fixed.

precision mediump float;

uniform vec2 u_resolution;
uniform sampler2D u_grain;
// Each blob's offset and 1 / size.
uniform vec3 u_blobs[BLOB_COUNT];
uniform vec3 u_background;
uniform vec3 u_colors[3];

out vec4 fragColor;

const float softness = .5;

void main() {
  // Centered, with the shorter side from -.5 to .5.
  vec2 uv = (gl_FragCoord.xy - .5 * u_resolution) / min(u_resolution.x, u_resolution.y);

  // On portrait screens the blob area is sized to the width, so spread the
  // blobs over the full height and grow them partway to match.
  float tall = max(1., u_resolution.y / u_resolution.x);
  vec2 stretch = vec2(1., tall);
  float shrink = inversesqrt(tall);
  float shape = 0.;
  for (int i = 0; i < BLOB_COUNT; i++) {
    vec3 blob = u_blobs[i];
    float d = 1. - clamp(length(uv + stretch * blob.xy) * shrink * blob.z, 0., 1.);
    shape += .5 * d * d * d * d * d;
  }
  shape = smoothstep(0., .9, shape);
  shape *= smoothstep(.05, .5, shape);

  vec2 grain = texelFetch(u_grain, ivec2(gl_FragCoord.xy), 0).rg;
  shape += 3. * (grain.r + grain.g / 255.) - 1.;

  float aa = fwidth(shape);
  shape = clamp(shape - 1. / 6., 0., 1.);
  float opacity = smoothstep(0., softness + 2. * aa, clamp(3. * shape, 0., 1.));
  float mixer = 2. * shape;

  vec3 color = u_colors[0];
  for (int i = 1; i < 3; i++) {
    float t = clamp(mixer - float(i - 1), 0., 1.);
    t = smoothstep(.5 - .5 * softness - aa, .5 + .5 * softness + aa, t);
    color = mix(color, u_colors[i], t);
  }

  fragColor = vec4(mix(u_background, color, opacity), 1.);
}
