import { createVar, style } from '@vanilla-extract/css';

import {
  displayTextStyleVariants,
  headlineTextClassVariants,
} from '~/styles/text.css';
import { themeVars } from '~/styles/theme.css';

const paddingBlockVar = createVar();

const rootClass = style({
  vars: { [paddingBlockVar]: '2rem' },

  paddingBlock: paddingBlockVar,

  '@media': {
    [themeVars.media.minWidth.md]: { vars: { [paddingBlockVar]: '2.5rem' } },
    [themeVars.media.minWidth.lg]: { vars: { [paddingBlockVar]: '3rem' } },
    [themeVars.media.minWidth.xl]: { vars: { [paddingBlockVar]: '3.75rem' } },
  },
});

const headingClass = style([
  headlineTextClassVariants.md,
  {
    gridColumn: '1 / -1',

    fontWeight: 700,

    '@media': {
      [themeVars.media.minWidth.sm]: { textAlign: 'center' },
      [themeVars.media.minWidth.md]: displayTextStyleVariants.sm,
      [themeVars.media.minWidth.xl]: displayTextStyleVariants.md,
    },
  },
]);

export const sectionVars = { paddingBlockVar } as const;
export const sectionStyles = { rootClass, headingClass } as const;
