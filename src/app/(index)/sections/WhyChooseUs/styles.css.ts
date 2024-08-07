import { style } from '@vanilla-extract/css';

import {
  bodyTextClassVariants,
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

const listClass = style({
  display: 'grid',
  gap: '0.125rem',

  marginBlock: '0.75rem 1.25rem',
});

const listItemClass = style([
  bodyTextClassVariants.lg,
  { listStyle: 'none', '::before': { content: '— ' } },
]);

const imgClass = style({ width: '100%', height: 'auto', borderRadius: 9999 });

export const whyChooseUsSectionStyles = {
  sectionClass,
  headingClass,

  listClass,
  listItemClass,

  imgClass,
} as const;
