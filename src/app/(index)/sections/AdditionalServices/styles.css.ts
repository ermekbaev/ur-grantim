import { style } from '@vanilla-extract/css';

import {
  displayTextStyleVariants,
  headlineTextClassVariants,
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

export const additionalServicesSectionStyles = {
  sectionClass,
  headingClass,
} as const;
