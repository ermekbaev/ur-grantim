import { style } from '@vanilla-extract/css';

import { iconSizeVar } from '~/icons/styles.css';
import {
  bodyTextClassVariants,
  bodyTextStyleVariants,
  titleTextClassVariants,
  titleTextStyleVariants,
} from '~/styles/text.css';
import { themeVars } from '~/styles/theme.css';

const listClass = style({
  display: 'grid',
  gap: '1rem',

  marginBlockStart: '1rem',

  '@media': {
    [themeVars.media.minWidth.sm]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      marginBlockStart: '1.5rem',
    },

    [themeVars.media.minWidth.lg]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
      marginBlockStart: '2rem',
    },
  },
});

const listItemClass = style({
  display: 'flex',
  gap: '1rem',

  padding: '1rem',

  border: `0.0625rem solid ${themeVars.colors.outlineVariant}`,
  borderRadius: '0.75rem',

  '@media': {
    [themeVars.media.minWidth.lg]: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem',

      textAlign: 'center',
    },
  },
});

const listItemIconClass = style({
  vars: { [iconSizeVar]: '2.5rem' },

  flexShrink: 0,

  color: themeVars.colors.onSurfaceVariant,

  '@media': {
    [themeVars.media.minWidth.md]: { vars: { [iconSizeVar]: '3.125rem' } },
    [themeVars.media.minWidth.lg]: { vars: { [iconSizeVar]: '3.75rem' } },
  },
});

const listItemPriceClass = style([
  titleTextClassVariants.md,
  { '@media': { [themeVars.media.minWidth.md]: titleTextStyleVariants.lg } },
]);

const listItemNameClass = style([
  bodyTextClassVariants.md,
  { '@media': { [themeVars.media.minWidth.md]: bodyTextStyleVariants.lg } },
]);

export const additionalServicesSectionStyles = {
  listClass,
  listItemClass,
  listItemIconClass,
  listItemPriceClass,
  listItemNameClass,
} as const;
