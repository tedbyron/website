export const themes = ['system', 'light', 'dark'] as const
export type Theme = (typeof themes)[number]

export const appState = $state<{ theme: Theme }>({
  theme: 'system',
})
