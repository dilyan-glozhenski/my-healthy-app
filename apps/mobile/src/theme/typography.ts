/**
 * My Healthy App – typography tokens
 * Taken from the logged-out home screen design.
 * Fonts: Space Grotesk (headings, numbers), Inter (everything else).
 */

import {colors} from './colors';

export const fontWeights = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

/**
 * React Native loads each weight of a custom font as its own family name.
 * These names match @expo-google-fonts/inter and @expo-google-fonts/space-grotesk.
 */
export const fontFamilies = {
  body: 'Inter_400Regular',
  bodyMedium: 'Inter_500Medium',
  bodySemibold: 'Inter_600SemiBold',
  heading: 'SpaceGrotesk_700Bold',
  headingSemibold: 'SpaceGrotesk_600SemiBold',
} as const;

export const fontSizes = {
  xs: 12, // tags, chart labels
  sm: 13, // footer links
  md: 14, // card text, secondary copy
  base: 15, // steps, text links
  lg: 16, // body, buttons, card titles
  xl: 18, // logo text
  '2xl': 22, // section titles
  '3xl': 24, // CTA block title
  '4xl': 36, // hero headline
} as const;

/** Pixel values, as React Native expects. */
export const lineHeights = {
  tight: 29, // 3xl
  heading: 28, // 2xl
  hero: 40, // 4xl
  compact: 20, // md
  body: 24, // lg
} as const;

export const textStyles = {
  hero: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes['4xl'],
    lineHeight: lineHeights.hero,
    letterSpacing: -0.5,
    color: colors.primaryDark,
  },
  sectionTitle: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes['2xl'],
    lineHeight: lineHeights.heading,
  },
  ctaTitle: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes['3xl'],
    lineHeight: lineHeights.tight,
  },
  logo: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.xl,
  },
  body: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.body,
  },
  bodySmall: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.md,
    lineHeight: lineHeights.compact,
  },
  cardTitle: {
    fontFamily: fontFamilies.bodySemibold,
    fontSize: fontSizes.lg,
  },
  button: {
    fontFamily: fontFamilies.bodySemibold,
    fontSize: fontSizes.lg,
  },
  link: {
    fontFamily: fontFamilies.bodySemibold,
    fontSize: fontSizes.base,
  },
  caption: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.xs,
  },
} as const;

export type TextStyleName = keyof typeof textStyles;
