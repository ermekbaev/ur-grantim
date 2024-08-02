import { createGlobalTheme, createTheme } from '@vanilla-extract/css';

import theme from './theme.json';

import type { IterableElement, ReadonlyDeep, ValueOf } from 'type-fest';

//* =============================== Global theme ===============================

const globalThemeVars = createGlobalTheme(':root', {
  lh: '1.15em' as string,
  layoutWidth: '77.5rem',

  motion: {
    easing: {
      default: 'cubic-bezier(0.2, 0, 0, 1)',
      decelerate: 'cubic-bezier(0.05, 0.7, 0.1, 1)',
      accelerate: 'cubic-bezier(0.3, 0, 0.8, 0.15)',
    },

    duration: {
      sm: { 1: '50ms', 2: '100ms', 3: '150ms', 4: '200ms' },
      md: { 1: '250ms', 2: '300ms', 3: '350ms', 4: '400ms' },
      lg: { 1: '450ms', 2: '500ms', 3: '550ms', 4: '600ms' },
      xl: { 1: '700ms', 2: '800ms', 3: '900ms', 4: '1000ms' },
    },
  },
} as const);

//* =============================== Color utils ================================

type ColorScheme = ValueOf<typeof theme.schemes>;
type ColorName = keyof ColorScheme;

const OPACITY_OPTIONS = [0.08, 0.12, 0.16, 0.38] as const;
type OpacityOption = IterableElement<typeof OPACITY_OPTIONS>;

function addTransparentColorOptions(colorScheme: ColorScheme) {
  const newScheme = {} as {
    [N in ColorName | `${ColorName}-${OpacityOption}`]: string;
  };

  for (const [name, color] of Object.entries(colorScheme)) {
    newScheme[name as ColorName] = color;

    for (const opacity of OPACITY_OPTIONS) {
      const hexAlpha = Math.round(opacity * 255)
        .toString(16)
        .padStart(2, '0');

      newScheme[`${name as ColorName}-${opacity}`] = `${color}${hexAlpha}`;
    }
  }

  return newScheme;
}

//* =============================== Light theme ================================

const [lightThemeClass, themeContract] = createTheme({
  colors: addTransparentColorOptions(theme.schemes.light),

  elevation: {
    lvl1: '0 1px 2px 0 rgba(0, 0, 0, 0.3), 1px 1px 3px 1px rgba(0, 0, 0, 0.15)',
    lvl2: '0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 2px 6px 2px rgba(0, 0, 0, 0.15)',
    lvl3: '4px 4px 8px 3px rgba(0, 0, 0, 0.15), 0 1px 3px 0 rgba(0, 0, 0, 0.3)',
    lvl4: '0 6px 10px 4px rgba(0, 0, 0, 0.15), 0 2px 3px 0 rgba(0, 0, 0, 0.3)',
    lvl5: '0 8px 12px 6px rgba(0, 0, 0, 0.15), 0 4px 4px 0 rgba(0, 0, 0, 0.3)',
  },
});

//* ================================ Dark theme ================================

const darkThemeClass = createTheme(themeContract, {
  colors: addTransparentColorOptions(theme.schemes.dark),

  elevation: {
    lvl1: '0 1px 3px 1px rgba(0, 0, 0, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    lvl2: '0 2px 6px 2px rgba(0, 0, 0, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    lvl3: '0 4px 8px 3px rgba(0, 0, 0, 0.15), 0 1px 3px 0 rgba(0, 0, 0, 0.3)',
    lvl4: '0 6px 10px 4px rgba(0, 0, 0, 0.15), 0 2px 3px 0 rgba(0, 0, 0, 0.3)',
    lvl5: '0 8px 12px 6px rgba(0, 0, 0, 0.15), 0 4px 4px 0 rgba(0, 0, 0, 0.3)',
  },
});

//* ================================== Media ===================================

const breakpointValues = { sm: 640, md: 768, lg: 1024, xl: 1280 } as const;
type BreakpointValues = typeof breakpointValues;

type MediaMinWidth = {
  [K in keyof BreakpointValues]: `(min-width: ${BreakpointValues[K]}px)`;
};

const mediaMinWidth = Object.fromEntries(
  Object.entries(breakpointValues).map(([key, value]) => [
    key,
    `(min-width: ${value}px)`,
  ]),
) as MediaMinWidth;

type MediaMaxWidth = {
  [K in keyof MediaMinWidth]: `not all and ${MediaMinWidth[K]}`;
};

const mediaMaxWidth = Object.fromEntries(
  Object.entries(mediaMinWidth).map(([key, query]) => [
    key,
    `not all and ${query}`,
  ]),
) as MediaMaxWidth;

//* ================================ Theme vars ================================

const themeVars = {
  ...(themeContract as ReadonlyDeep<typeof themeContract>),
  ...(globalThemeVars as ReadonlyDeep<typeof globalThemeVars>),

  media: {
    minWidth: mediaMinWidth,
    maxWidth: mediaMaxWidth,
    prefersDarkTheme: '(prefers-color-scheme: dark)',
    prefersReducedMotion: '(prefers-reduced-motion: reduce)',
  },
} as const;

//* ================================= Exports ==================================

export { themeVars, darkThemeClass, lightThemeClass };
