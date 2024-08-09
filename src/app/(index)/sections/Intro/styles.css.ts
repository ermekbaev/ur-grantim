import { style } from '@vanilla-extract/css';

import {
  bodyTextClassVariants,
  bodyTextStyleVariants,
  displayTextStyleVariants,
  headlineTextClassVariants,
  labelTextStyleVariants,
} from '~/styles/text.css';
import { themeVars } from '~/styles/theme.css';

const sectionClass = style({
  display: 'grid',
  justifyItems: 'start',

  '@media': {
    [themeVars.media.minWidth.sm]: { justifyItems: 'center' },

    [themeVars.media.minWidth.lg]: {
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      gap: '4rem',
    },

    [themeVars.media.minWidth.xl]: { gap: '6rem' },
  },
});

const contentClass = style({
  display: 'contents',

  '@media': {
    [themeVars.media.minWidth.sm]: { textAlign: 'center' },
    [themeVars.media.minWidth.lg]: { display: 'block', textAlign: 'start' },
  },
});

const headingClass = style([
  headlineTextClassVariants.lg,
  {
    fontWeight: 700,

    '@media': {
      [themeVars.media.minWidth.md]: displayTextStyleVariants.md,
      [themeVars.media.minWidth.xl]: displayTextStyleVariants.lg,
    },
  },
]);

const textClass = style([
  bodyTextClassVariants.lg,
  {
    marginBlock: '0.25rem 0.75rem',

    '@media': { [themeVars.media.minWidth.md]: bodyTextStyleVariants.xl },
  },
]);

const buttonClass = style({
  '@media': { [themeVars.media.minWidth.md]: labelTextStyleVariants.xl },
});

const imgClass = style({
  width: '100%',
  height: 'auto',

  marginBlockStart: '1rem',

  '@media': {
    [themeVars.media.minWidth.sm]: { maxWidth: '38rem' },
    [themeVars.media.minWidth.lg]: { maxWidth: 'auto', marginBlockStart: 0 },
  },
});

export const introSectionStyles = {
  sectionClass,
  contentClass,
  headingClass,
  textClass,
  buttonClass,
  imgClass,
} as const;
