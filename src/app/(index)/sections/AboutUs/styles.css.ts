import { style } from '@vanilla-extract/css';

import {
  bodyTextClassVariants,
  displayTextStyleVariants,
  headlineTextClassVariants,
} from '~/styles/text.css';
import { themeVars } from '~/styles/theme.css';

const sectionClass = style({
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

const contentClass = style([
  bodyTextClassVariants.lg,
  {
    '@media': {
      [themeVars.media.minWidth.sm]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        textAlign: 'center',
      },

      [themeVars.media.minWidth.lg]: {
        alignItems: 'start',
        textAlign: 'start',

        fontSize: '1.125rem',
      },
    },
  },
]);

const headingClass = style([
  headlineTextClassVariants.lg,
  {
    fontWeight: 700,

    '@media': {
      [themeVars.media.minWidth.sm]: displayTextStyleVariants.md,
      [themeVars.media.minWidth.lg]: displayTextStyleVariants.lg,
    },
  },
]);

const textClass = style({ marginBlock: '0.5rem 0' });

const listClass = style({
  marginBlock: '0.5rem 1rem',
  paddingInlineStart: '1.25rem',

  listStyleType: 'armenian',

  '@media': { [themeVars.media.minWidth.lg]: { paddingInlineStart: '1.5rem' } },
});

const buttonClass = style({
  '@media': {
    [themeVars.media.minWidth.lg]: {
      vars: { [themeVars.lh]: '1.5rem' },
      fontSize: '1rem',
    },
  },
});

const imgClass = style({
  width: '100%',
  height: 'auto',

  '@media': { [themeVars.media.minWidth.sm]: { maxWidth: '38rem' } },
});

export const aboutUsSectionStyles = {
  sectionClass,
  contentClass,
  headingClass,
  textClass,
  listClass,
  buttonClass,
  imgClass,
} as const;
