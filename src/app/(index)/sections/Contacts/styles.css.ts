import { style } from '@vanilla-extract/css';

import { bodyTextClassVariants } from '~/styles/text.css';
import { themeVars } from '~/styles/theme.css';

const sectionClass = style({
  '@media': {
    [themeVars.media.minWidth.md]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',

      rowGap: '1rem',
      columnGap: '2rem',
    },

    [themeVars.media.minWidth.lg]: { rowGap: '2rem', columnGap: '4rem' },
  },
});

const addressClass = style([
  bodyTextClassVariants.lg,
  {
    marginBlock: '0.25rem 1rem',

    fontStyle: 'normal',

    '@media': { [themeVars.media.minWidth.md]: { marginBlock: 0 } },
  },
]);

const mapContainerClass = style({
  position: 'relative',

  '::after': { content: '', display: 'block', paddingBottom: '50%' },
});

const mapClass = style({
  position: 'absolute',
  inset: 0,

  width: '100%',
  height: '100%',

  border: `1px solid ${themeVars.colors.outlineVariant}`,
});

export const contactsSectionStyles = {
  sectionClass,
  addressClass,
  mapContainerClass,
  mapClass,
} as const;
