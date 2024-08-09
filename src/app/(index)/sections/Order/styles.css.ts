import { createVar, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { layoutPaddingInlineVar } from '~/app/global.css';
import {
  bodyTextClassVariants,
  bodyTextStyleVariants,
} from '~/styles/text.css';
import { themeVars } from '~/styles/theme.css';
import { sectionVars } from '../Section/styles.css';

const sectionPaddingInlineVar = createVar();

const sectionClass = style({
  vars: { [sectionPaddingInlineVar]: layoutPaddingInlineVar },

  marginBlock: calc.divide(sectionVars.paddingBlockVar, 2),
  marginInline: calc.negate(sectionPaddingInlineVar),
  paddingInline: sectionPaddingInlineVar,

  backgroundColor: themeVars.colors.primaryContainer,
  color: themeVars.colors.onPrimaryContainer,

  '@media': {
    [themeVars.media.minWidth.md]: {
      vars: {
        [sectionPaddingInlineVar]: `min(${[
          calc.divide(layoutPaddingInlineVar, 2),
          sectionVars.paddingBlockVar,
        ].join(', ')})`,
      },

      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '2rem',

      borderRadius: '1rem',
    },

    [themeVars.media.minWidth.lg]: { gap: '6rem' },
    [themeVars.media.minWidth.xl]: { borderRadius: '1.5rem' },
  },
});

const headingClass = style({ textAlign: 'start' });

const subheadingClass = style([
  bodyTextClassVariants.lg,
  {
    marginBlockStart: '0.25rem',

    '@media': { [themeVars.media.minWidth.md]: bodyTextStyleVariants.xl },
  },
]);

export const formClass = style({
  marginBlockStart: '1rem',
  marginInline: calc.divide(sectionPaddingInlineVar, -2),
  paddingBlock: calc.multiply(sectionPaddingInlineVar, 1.5),
  paddingInline: sectionPaddingInlineVar,

  backgroundColor: themeVars.colors.surface,
  borderRadius: '1.5rem',

  color: themeVars.colors.onSurface,

  '@media': {
    [themeVars.media.minWidth.md]: {
      margin: 0,

      paddingBlock: '1.5rem',
      paddingInline: '1rem',
    },

    [themeVars.media.minWidth.lg]: {
      paddingBlock: '2rem',
      paddingInline: '1.5rem',
    },
  },
});

export const orderSectionStyles = {
  sectionClass,
  headingClass,
  subheadingClass,

  formClass,
} as const;
