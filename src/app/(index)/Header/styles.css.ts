import { createVar, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { recipe } from '@vanilla-extract/recipes';

import { iconSizeVar } from '~/icons/styles.css';
import { bodyTextClassVariants } from '~/styles/text.css';
import { themeVars } from '~/styles/theme.css';

const minHeaderPaddingInlineVar = createVar();

export const headerRecipe = recipe({
  base: {
    vars: { [minHeaderPaddingInlineVar]: '0.5rem' },

    position: 'sticky',
    inset: 0,
    zIndex: 1,

    padding: `0.5rem max(${calc.subtract('50%', '44rem')}, ${minHeaderPaddingInlineVar}) 0`,

    transition: 'transform 300ms ease-in 30ms',

    '@media': {
      [themeVars.media.minWidth.md]: {
        vars: { [minHeaderPaddingInlineVar]: '1rem' },
      },
    },
  },

  variants: {
    hidden: {
      true: {
        transform: 'translateY(-100%)',
        transitionTimingFunction: 'ease-in-out',
      },
    },
  },
});

export const headerContentClass = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: `0.75rem max(${calc.subtract('50%', calc.divide(themeVars.layoutWidth, 2))}, 1rem)`,

  backgroundColor: themeVars.colors.surface,
  borderRadius: '0.75rem',
  boxShadow: `0 0 8px 0 ${themeVars.colors['onSurface-0.16']}`,

  '@media': {
    [themeVars.media.minWidth.md]: {
      paddingTop: '1rem',
      paddingBottom: '1rem',
    },
  },
});

export const headerLogoClass = style({
  height: '2.25rem',

  color: themeVars.colors.primary,

  '@media': { [themeVars.media.minWidth.md]: { height: '2.5rem' } },
});

export const headerMenuBtnClass = style({
  '@media': { [themeVars.media.minWidth.md]: { display: 'none' } },
});

export const headerScreenHeightVar = createVar();

export const headerMenuRecipe = recipe({
  base: {
    display: 'flex',
    gap: '0.5rem',

    '@media': {
      [themeVars.media.maxWidth.md]: {
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        zIndex: -1,

        flexDirection: 'column',

        height: headerScreenHeightVar,
        padding: `5rem ${minHeaderPaddingInlineVar} 0`,

        backgroundColor: themeVars.colors.surfaceContainer,

        transition: '300ms ease-in',
        transitionProperty: 'visibility, opacity',
      },
    },
  },

  variants: {
    isOpen: {
      false: {
        '@media': {
          [themeVars.media.maxWidth.md]: {
            visibility: 'hidden',
            opacity: 0,
            transitionTimingFunction: 'ease-in-out',
          },
        },
      },
    },
  },
});

export const headerMenuListClass = style({
  display: 'contents',
});

export const headerMenuListItemClass = style({
  display: 'contents',
  '::marker': { fontSize: 0 },
});

export const headerMenuLinkClass = style([
  bodyTextClassVariants.lg,
  {
    padding: '0.5rem',

    color: themeVars.colors.onSurface,
    textDecoration: 'none',

    transition: 'color 150ms',

    ':hover': { color: themeVars.colors.primary },

    '@media': {
      [themeVars.media.maxWidth.md]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        padding: '1rem',

        backgroundColor: themeVars.colors.surface,
        borderRadius: '0.75rem',
      },
    },
  },
]);

export const headerMenuLinkIconClass = style({
  vars: { [iconSizeVar]: '1.5rem' },
  color: themeVars.colors.onSurfaceVariant,
  '@media': { [themeVars.media.minWidth.md]: { display: 'none' } },
});
