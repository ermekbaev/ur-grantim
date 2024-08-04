import { globalStyle, style } from '@vanilla-extract/css';

import {
  bodyTextClassVariants,
  displayTextStyleVariants,
  headlineTextClassVariants,
} from '~/styles/text.css';
import { themeVars } from '~/styles/theme.css';

export const contactSectionClass = style({
  display: 'grid',
  gap: '1.5rem',

  paddingBlock: '2rem',

  '@media': {
    [themeVars.media.minWidth.sm]: { paddingBlock: '3rem' },
    [themeVars.media.minWidth.md]: { gridTemplateColumns: 'repeat(2, 1fr)' },

    [themeVars.media.minWidth.lg]: {
      rowGap: '2rem',
      columnGap: '4rem',

      paddingBlock: '4rem',
    },
  },
});

export const contactSectionHeadingClass = style([
  headlineTextClassVariants.md,
  {
    marginBottom: '-0.75rem',
    fontWeight: 700,

    '@media': {
      [themeVars.media.minWidth.sm]: displayTextStyleVariants.sm,

      [themeVars.media.minWidth.md]: {
        gridColumn: '1 / -1',
        marginBottom: 0,

        textAlign: 'center',
      },

      [themeVars.media.minWidth.lg]: displayTextStyleVariants.md,
    },
  },
]);

export const contactSectionAddressClass = style([
  bodyTextClassVariants.lg,
  { fontStyle: 'normal' },
]);

globalStyle(`${contactSectionAddressClass} a`, { color: 'inherit' });

export const contactSectionMapContainerClass = style({
  position: 'relative',
  '::after': { content: '', display: 'block', paddingBottom: '50%' },
});

export const contactSectionMapClass = style({
  position: 'absolute',
  inset: 0,

  width: '100%',
  height: '100%',

  border: `1px solid ${themeVars.colors.outlineVariant}`,
});
