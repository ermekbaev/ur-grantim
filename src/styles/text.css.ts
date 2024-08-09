import { styleVariants, type ComplexStyleRule } from '@vanilla-extract/css';

import { themeVars } from './theme.css';

type TextStyleMap = Partial<
  Record<'xl' | 'lg' | 'md' | 'sm', ComplexStyleRule>
>;

//* ================================= Display ==================================

export const displayTextStyleVariants = {
  lg: {
    vars: { [themeVars.lh]: '4rem' },

    fontSize: '3.5625rem',
    letterSpacing: `${-0.25 / 57}em`,
  },

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
  xl: {
    vars: { [themeVars.lh]: '1.75rem' },

    fontSize: '1.375rem',
    fontWeight: 400,
  },

  lg: {
    vars: { [themeVars.lh]: '1.625rem' },

    fontSize: '1.125rem',
    letterSpacing: `${0.2 / 18}em`,
  },

  md: {
    vars: { [themeVars.lh]: '1.5rem' },

    fontSize: '1rem',
    fontWeight: 500,
    letterSpacing: `${0.15 / 16}em`,
  },

  // sm: {
  //   vars: { [themeVars.lh]: '1.25rem' },

  //   fontSize: '0.875rem',
  //   fontWeight: 500,
  //   letterSpacing: `${0.1 / 14}em`,
  // },
} as const satisfies TextStyleMap;

export const titleTextClassVariants = styleVariants(titleTextStyleVariants);

//* ================================== Label ===================================

export const labelTextStyleVariants = {
  xl: {
    vars: { [themeVars.lh]: '1.5rem' },

    fontSize: '1rem',
    fontWeight: 500,
    letterSpacing: `${0.2 / 16}em`,
  },

  lg: {
    vars: { [themeVars.lh]: '1.25rem' },

    fontSize: '0.875rem',
    fontWeight: 500,
    letterSpacing: `${0.1 / 14}em`,
  },

  // md: {
  //   vars: { [themeVars.lh]: '1rem' },

  //   fontSize: '0.75rem',
  //   fontWeight: 500,
  //   letterSpacing: `${0.5 / 12}em`,
  // },

  // sm: {
  //   vars: { [themeVars.lh]: '1rem' },

  //   fontSize: '0.6875rem',
  //   fontWeight: 500,
  //   letterSpacing: `${0.5 / 11}em`,
  // },
} as const satisfies TextStyleMap;

export const labelTextClassVariants = styleVariants(labelTextStyleVariants);

//* =================================== Body ===================================

export const bodyTextStyleVariants = {
  xl: {
    vars: { [themeVars.lh]: '1.625rem' },

    fontSize: '1.125rem',
    letterSpacing: `${0.5 / 18}em`,
  },

  lg: {
    vars: { [themeVars.lh]: '1.5rem' },

    fontSize: '1rem',
    letterSpacing: `${0.5 / 16}em`,
  },

  md: {
    vars: { [themeVars.lh]: '1.25rem' },

    fontSize: '0.875rem',
    letterSpacing: `${0.25 / 14}em`,
  },

  sm: {
    vars: { [themeVars.lh]: '1rem' },

    fontSize: '0.75rem',
    letterSpacing: `${0.4 / 12}em`,
  },
} as const satisfies TextStyleMap;

export const bodyTextClassVariants = styleVariants(bodyTextStyleVariants);
