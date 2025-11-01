/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Dimensions, Platform } from 'react-native';

/**
 * A palette of colors that are used throughout the application.
 * This is the single source of truth for all colors.
 */
const Palette = {
  // Trust Building Colors (Blues)
  trust100: '#caf0f8',
  trust200: '#ade8f4',
  trust300: '#90e0ef',
  trust400: '#48cae4',
  trust500: '#00b4d8',
  trust600: '#0096c7',
  trust700: '#0077b6',
  trust800: '#023e8a',
  trust900: '#03045e',

  // Accent & Danger Colors (Oranges/Reds)
  accent100: '#ffba08',
  accent200: '#faa307',
  accent300: '#f48c06',
  accent400: '#e85d04',
  accent500: '#dc2f02',
  danger: '#d00000',
  dangerDark: '#9d0208',

  // Success Colors (Greens)
  success: '#38b000',
  successDark: '#006400',

  // Neutral/Greyscale Colors
  grey100: '#f8f9fa', // Lightest
  grey200: '#e9ecef',
  grey300: '#dee2e6',
  grey400: '#ced4da',
  grey500: '#adb5bd',
  grey600: '#6c757d',
  grey700: '#495057', // Darkest

  // Dark Mode Backgrounds
  dark100: '#22007c',
  dark200: '#140152',
  dark300: '#0d00a4',
  dark400: '#04052e',
  dark500: '#02010a', // Darkest
};

export const Colors = {
  light: {
    // Core
    text: Palette.grey700,
    background: Palette.grey100,
    primary: Palette.trust700,
    tint: Palette.trust700,
    card: Palette.grey100,

    // Icons
    icon: Palette.grey600,
    tabIconDefault: Palette.grey600,
    tabIconSelected: Palette.trust700,

    // Semantic
    success: Palette.success,
    danger: Palette.danger,
    overlay: 'rgba(0, 0, 0, 0.4)',
  },
  dark: {
    // Core
    text: Palette.grey200,
    background: Palette.dark500,
    primary: Palette.trust400,
    tint: Palette.trust400,
    card: Palette.dark400,

    // Icons
    icon: Palette.grey500,
    tabIconDefault: Palette.grey500,
    tabIconSelected: Palette.trust400,

    // Semantic
    success: Palette.success,
    danger: Palette.accent500,
    overlay: 'rgba(0, 0, 0, 0.6)',
  },
};

/**
 * A mapping of font families that are used throughout the application.
 * These names correspond to the keys used when loading fonts in `app/_layout.tsx`.
 * Using custom fonts ensures a consistent brand identity across all devices.
 */
export const Fonts = {
  // Main body font - very versatile
  body: 'Jost-VariableFont_wght',
  bodyItalic: 'Jost-Italic-VariableFont_wght',

  // A strong, modern font for titles and UI elements
  heading: 'Gotham-Medium',

  // A classic, elegant serif for display text or special sections
  display: 'Oranienbaum-Regular',

  // A soft, rounded font for a friendly feel
  soft: 'Dosis-VariableFont_wght',
};

/**
 * A collection of pre-defined text styles for use throughout the application.
 * This ensures typographic consistency and makes it easy to manage text styles.
 * These styles can be used in components like ThemedText.
 */
export const Typography = {
  display: {
    fontFamily: Fonts.display,
    fontSize: 48,
    lineHeight: 56,
  },
  title: {
    fontFamily: Fonts.heading,
    fontSize: 32,
    lineHeight: 40,
  },
  subtitle: {
    fontFamily: Fonts.body,
    fontSize: 20,
    lineHeight: 28,
  },
  body: {
    fontFamily: Fonts.body,
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontFamily: Fonts.body,
    fontSize: 12,
    lineHeight: 16,
  },
};

const BASE_UNIT = 4;
export const Spacing = {
  xxs: BASE_UNIT * 1, // 4px
  xs: BASE_UNIT * 2,  // 8px
  sm: BASE_UNIT * 3,  // 12px
  md: BASE_UNIT * 4,  // 16px
  lg: BASE_UNIT * 6,  // 24px
  xl: BASE_UNIT * 8,  // 32px
  xxl: BASE_UNIT * 12, // 48px
};

// --- 4. BORDERS ---
// Consistent border radii, tied to the spacing scale.
export const Borders = {
  radius: {
    sm: Spacing.xs,  // 8px
    md: Spacing.md,  // 16px
    lg: Spacing.lg,  // 24px
    pill: 999,       // For fully rounded "pill" shapes
  },
  width: {
    thin: 1,
    medium: 2,
  },
};

// --- 5. SHADOWS ---
// Pre-defined shadows for creating depth and elevation.
export const Shadows = {
  // Soft shadow for cards and elevated elements
  depth2: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4, // for Android
  },
  // Stronger shadow for modals or active elements
  depth3: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8, // for Android
  },
};

// --- 6. LAYOUT ---
// General layout constants.
export const Layout = {
  window: {
    'width': Dimensions.get('window').width,
    'height': Dimensions.get('window').height,
  },
  screen: {
    'width': Dimensions.get('screen').width,
    'height': Dimensions.get('screen').height,
  },
  isLargeDevice: Dimensions.get('window').width >= 768,
  isPortrait: Dimensions.get('window').height >= Dimensions.get('window').width,
  isLandscape: Dimensions.get('window').width >= Dimensions.get('window').height,
  isSmallDevice: Dimensions.get('window').width < 375,
  isExtraSmallDevice: Dimensions.get('window').height < 667,
};