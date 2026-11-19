/**
 * My Healthy App – color tokens
 * Taken from the logged-out home screen design.
 */
export const colors = {
  // Brand
  primary: '#1B6B45', // buttons, calorie ring, step badges, logo mark
  primaryDark: '#14452C', // final CTA block background
  primaryTint: '#E3F1E8', // icon tiles, ring track
  link: '#1B5E3C', // text links and "Log in"
  accentWarm: '#B4501A', // secondary data color (carbs bar)

  // Surfaces
  background: '#F7F8F4', // screen background
  surface: '#FFFFFF', // cards
  surfaceMuted: '#EEF1EA', // progress tracks, "Example" tag
  border: '#E1E6DD', // card borders
  borderDashed: '#9AA89F', // placeholder outlines

  // Text
  textPrimary: '#16231C',
  textSecondary: '#46564C',
  textMuted: '#5C6C62',
  textOnPrimary: '#FFFFFF',
  textOnPrimaryDark: '#D4E6DA',
} as const;

export type ColorToken = keyof typeof colors;
export type ColorValue = (typeof colors)[ColorToken];