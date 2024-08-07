import { style } from '@vanilla-extract/css';

import { iconSizeVar } from '~/icons/styles.css';
import {
  bodyTextClassVariants,
  bodyTextStyleVariants,
  displayTextStyleVariants,
  headlineTextClassVariants,
  titleTextClassVariants,
} from '~/styles/text.css';
import { themeVars } from '~/styles/theme.css';

const sectionClass = style({
  paddingBlock: '2rem',

  '@media': {
    [themeVars.media.minWidth.sm]: { paddingBlock: '3rem' },
    [themeVars.media.minWidth.lg]: { paddingBlock: '4rem' },
  },
});

const headingClass = style([
  headlineTextClassVariants.md,
  {
    fontWeight: 700,

    '@media': {
      [themeVars.media.minWidth.sm]: displayTextStyleVariants.sm,
      [themeVars.media.minWidth.md]: { textAlign: 'center' },
      [themeVars.media.minWidth.lg]: displayTextStyleVariants.md,
    },
  },
]);

const listClass = style({
  display: 'grid',
  gap: '1rem',

  marginTop: '1rem',

  '@media': {
    [themeVars.media.minWidth.sm]: { gridTemplateColumns: 'repeat(2, 1fr)' },
    [themeVars.media.minWidth.md]: { marginTop: '2rem' },
    [themeVars.media.minWidth.lg]: { gridTemplateColumns: 'repeat(4, 1fr)' },
  },
});

const listItemClass = style({
  display: 'flex',
  gap: '0.75rem',

  padding: '0.75rem',

  border: `1px solid ${themeVars.colors.outlineVariant}`,
  borderRadius: '0.75rem',

  '@media': {
    [themeVars.media.minWidth.lg]: {
      flexDirection: 'column',
      alignItems: 'center',

      textAlign: 'center',
    },
  },
});

const listItemIconClass = style({
  vars: { [iconSizeVar]: '3rem' },

  flexShrink: 0,

  '@media': {
    [themeVars.media.minWidth.lg]: { vars: { [iconSizeVar]: '4rem' } },
  },
});

const listItemPriceClass = style([
  titleTextClassVariants.md,
  { '@media': { [themeVars.media.minWidth.lg]: { fontSize: '1.125rem' } } },
]);

const listItemNameClass = style([
  bodyTextClassVariants.md,
  { '@media': { [themeVars.media.minWidth.lg]: bodyTextStyleVariants.lg } },
]);

export const additionalServicesSectionStyles = {
  sectionClass,
  headingClass,

  listClass,
  listItemClass,
  listItemIconClass,
  listItemPriceClass,
  listItemNameClass,
} as const;
