import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { layoutPaddingInlineVar } from '~/app/global.css';
import { iconSizeVar } from '~/icons/styles.css';
import {
  bodyTextClassVariants,
  displayTextStyleVariants,
  headlineTextClassVariants,
  headlineTextStyleVariants,
  titleTextStyleVariants,
} from '~/styles/text.css';
import { themeVars } from '~/styles/theme.css';

const sectionClass = style({
  paddingBlock: '2rem',

  '@media': {
    [themeVars.media.minWidth.sm]: { paddingBlock: '3rem' },
    [themeVars.media.minWidth.lg]: { paddingBlock: '4rem' },
  },
});

export const headerClass = style({
  marginInline: calc.negate(layoutPaddingInlineVar),
  paddingBlock: '0.875rem 1rem',
  paddingInline: layoutPaddingInlineVar,

  backgroundColor: themeVars.colors.primaryContainer,

  '@media': {
    [themeVars.media.minWidth.sm]: { paddingBlock: '1.3125rem 1.5rem' },
    [themeVars.media.minWidth.md]: { textAlign: 'center' },
    [themeVars.media.minWidth.lg]: { paddingBlock: '1.75rem 2rem' },
  },
});

const headingClass = style([
  headlineTextClassVariants.md,
  {
    marginBottom: '0.25rem',

    fontWeight: 700,

    '@media': {
      [themeVars.media.minWidth.sm]: {
        marginBottom: '0.375rem',
        ...displayTextStyleVariants.sm,
      },

      [themeVars.media.minWidth.lg]: {
        marginBottom: '0.5rem',
        ...displayTextStyleVariants.md,
      },
    },
  },
]);

const headerTextClass = style([
  bodyTextClassVariants.lg,
  {
    '@media': {
      [themeVars.media.minWidth.sm]: titleTextStyleVariants.lg,
      [themeVars.media.minWidth.lg]: headlineTextStyleVariants.sm,
    },
  },
]);

const listClass = style({
  display: 'grid',
  gap: '1rem',

  marginBlockStart: '1.5rem',

  '@media': {
    [themeVars.media.minWidth.sm]: { gridTemplateColumns: 'repeat(2, 1fr)' },

    [themeVars.media.minWidth.lg]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1.25rem',

      marginBlockStart: '2rem',
    },
  },
});

const listItemClass = style([
  bodyTextClassVariants.lg,
  {
    display: 'flex',
    gap: '0.75rem',

    padding: '0.75rem',

    backgroundColor: themeVars.colors.surfaceContainerLow,
    borderRadius: '0.75rem',
    boxShadow: themeVars.elevation.lvl1,

    '@media': {
      [themeVars.media.minWidth.sm]: {
        flexDirection: 'column',
        alignItems: 'center',

        textAlign: 'center',
      },

      [themeVars.media.minWidth.lg]: { padding: '1rem 1rem 1.25rem' },
    },
  },
]);

const listItemIconClass = style({
  vars: { [iconSizeVar]: '3rem' },

  flexShrink: 0,

  '@media': {
    [themeVars.media.minWidth.lg]: { vars: { [iconSizeVar]: '4rem' } },
  },
});

export const simpleAndCheapSectionStyles = {
  sectionClass,

  headerClass,
  headingClass,
  headerTextClass,

  listClass,
  listItemClass,
  listItemIconClass,
} as const;
