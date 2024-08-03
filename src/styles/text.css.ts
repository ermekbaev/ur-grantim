import { styleVariants, type ComplexStyleRule } from '@vanilla-extract/css';

import { themeVars } from './theme.css';

type TextStyleMap = Record<'lg' | 'md' | 'sm', ComplexStyleRule>;

//* ================================= Display ==================================

export const displayTextStyleVariants = {
  lg: { vars: { [themeVars.lh]: '4rem' }, fontSize: '3.5625rem' },
  md: { vars: { [themeVars.lh]: '3.25rem' }, fontSize: '2.8125rem' },
  sm: { vars: { [themeVars.lh]: '2.75rem' }, fontSize: '2.25rem' },
} as const satisfies TextStyleMap;

export const displayTextClassVariants = styleVariants(displayTextStyleVariants);

//* ================================= Headline =================================

export const headlineTextStyleVariants = {
  lg: { vars: { [themeVars.lh]: '2.5rem' }, fontSize: '2rem' },
  md: { vars: { [themeVars.lh]: '2.25rem' }, fontSize: '1.75rem' },
  sm: { vars: { [themeVars.lh]: '2rem' }, fontSize: '1.5rem' },
} as const satisfies TextStyleMap;

export const headlineTextClassVariants = styleVariants(
  headlineTextStyleVariants,
);

//* ================================== Title ===================================

export const titleTextStyleVariants = {
  lg: {
    vars: { [themeVars.lh]: '1.75rem' },

    fontSize: '1.375rem',
    fontWeight: 400,
  },

  md: {
    vars: { [themeVars.lh]: '1.5rem' },

    fontSize: '1rem',
    fontWeight: 500,
    letterSpacing: `${0.15 / 16}rem`,
  },

  sm: {
    vars: { [themeVars.lh]: '1.25rem' },

    fontSize: '0.875rem',
    fontWeight: 500,
    letterSpacing: `${0.1 / 16}rem`,
  },
} as const satisfies TextStyleMap;

export const titleTextClassVariants = styleVariants(titleTextStyleVariants);

//* ================================== Label ===================================

export const labelTextStyleVariants = {
  lg: {
    vars: { [themeVars.lh]: '1.25rem' },

    fontSize: '0.875rem',
    fontWeight: 500,
    letterSpacing: `${0.1 / 16}rem`,
  },

  md: {
    vars: { [themeVars.lh]: '1rem' },

    fontSize: '0.75rem',
    fontWeight: 500,
    letterSpacing: `${0.5 / 16}rem`,
  },

  sm: {
    vars: { [themeVars.lh]: '1rem' },

    fontSize: '0.6875rem',
    fontWeight: 500,
    letterSpacing: `${0.5 / 16}rem`,
  },
} as const satisfies TextStyleMap;

export const labelTextClassVariants = styleVariants(labelTextStyleVariants);

//* =================================== Body ===================================

export const bodyTextStyleVariants = {
  lg: {
    vars: { [themeVars.lh]: '1.5rem' },

    fontSize: '1rem',
    letterSpacing: `${0.5 / 16}rem`,
  },

  md: {
    vars: { [themeVars.lh]: '1.25rem' },

    fontSize: '0.875rem',
    letterSpacing: `${0.25 / 16}rem`,
  },

  sm: {
    vars: { [themeVars.lh]: '1rem' },

    fontSize: '0.75rem',
    letterSpacing: `${0.4 / 16}rem`,
  },
} as const satisfies TextStyleMap;

export const bodyTextClassVariants = styleVariants(bodyTextStyleVariants);
