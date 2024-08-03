import { style } from '@vanilla-extract/css';

import {
  bodyTextClassVariants,
  displayTextStyleVariants,
  headlineTextClassVariants,
} from '~/styles/text.css';
import { themeVars } from '~/styles/theme.css';

export const aboutSectionClass = style({
  display: 'grid',
  gap: '2rem',
  paddingBlock: '2rem',

  '@media': {
    [themeVars.media.minWidth.sm]: {
      justifyItems: 'center',
      paddingBlock: '3rem',
    },

    [themeVars.media.minWidth.lg]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      alignItems: 'center',
      gap: '6rem',

      paddingBlock: '4rem',
    },
  },
});

export const aboutSectionContentClass = style({
  '@media': {
    [themeVars.media.minWidth.sm]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      textAlign: 'center',
    },

    [themeVars.media.minWidth.lg]: { alignItems: 'start', textAlign: 'start' },
  },
});

export const aboutSectionHeadingClass = style([
  headlineTextClassVariants.md,
  {
    fontWeight: 700,

    '@media': {
      [themeVars.media.minWidth.sm]: displayTextStyleVariants.sm,
      [themeVars.media.minWidth.lg]: displayTextStyleVariants.md,
    },
  },
]);

export const aboutSectionTextClass = style([
  bodyTextClassVariants.lg,
  {
    marginBlock: '0.5rem 1rem',

    '@media': {
      [themeVars.media.minWidth.lg]: { marginBlock: '0.75rem 1.5rem' },
    },
  },
]);

export const aboutSectionImgClass = style({
  width: '100%',
  height: 'auto',

  '@media': { [themeVars.media.minWidth.sm]: { maxWidth: '38rem' } },
});
