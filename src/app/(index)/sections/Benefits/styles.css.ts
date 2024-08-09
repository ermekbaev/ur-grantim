import { style } from '@vanilla-extract/css';

import { iconSizeVar } from '~/icons/styles.css';
import { bodyTextClassVariants } from '~/styles/text.css';
import { themeVars } from '~/styles/theme.css';

const sectionClass = style({
  '@media': {
    [themeVars.media.minWidth.sm]: { display: 'grid', justifyItems: 'center' },

    [themeVars.media.minWidth.md]: {
      gridTemplateColumns: 'repeat(2, 1fr)',

      rowGap: '1.5rem',
      columnGap: '2rem',
    },

    [themeVars.media.minWidth.lg]: { rowGap: '2rem', columnGap: '4rem' },
  },
});

const listClass = style({
  marginBlock: '0.5rem 1rem',

  '@media': { [themeVars.media.minWidth.md]: { marginBlock: 0 } },
});

const listItemClass = style([
  bodyTextClassVariants.lg,
  {
    display: 'flex',
    gap: '0.5rem',

    selectors: { '& + &': { marginBlockStart: '0.5rem' } },
  },
]);

const listItemMarkerClass = style({
  vars: { [iconSizeVar]: themeVars.lh },

  flexShrink: 0,

  color: themeVars.colors.onSurfaceVariant,
});

const imgClass = style({
  width: '100%',
  height: '100%',

  objectFit: 'cover',
  borderRadius: '1rem',

  '@media': {
    [themeVars.media.minWidth.sm]: {
      maxWidth: '38rem',
      borderRadius: '1.5rem',
    },

    [themeVars.media.minWidth.md]: { maxWidth: 'auto' },
  },
});

export const benefitsSectionStyles = {
  sectionClass,
  listClass,
  listItemClass,
  listItemMarkerClass,
  imgClass,
} as const;
