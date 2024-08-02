import { createVar, globalStyle } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { themeVars } from '~/styles/theme.css';

globalStyle('*, *::before, *::after', {
  margin: 0,
  padding: 0,

  lineHeight: `${themeVars.lh} !important`,
});

globalStyle(':root', {
  scrollBehavior: 'smooth',

  fontSize: 16,

  '@media': {
    [themeVars.media.prefersReducedMotion]: { scrollBehavior: 'auto' },
  },
});

export const layoutPaddingBlockVar = createVar();
export const layoutPaddingInlineVar = createVar();

globalStyle('body', {
  vars: { [layoutPaddingBlockVar]: '0', [layoutPaddingInlineVar]: '1rem' },

  display: 'flex',
  flexDirection: 'column',

  minHeight: '100vh',

  backgroundColor: themeVars.colors.surface,
  color: themeVars.colors.onSurface,

  '@media': {
    [themeVars.media.minWidth.md]: {
      vars: {
        [layoutPaddingInlineVar]: `max(${calc('100vw')
          .subtract(themeVars.layoutWidth)
          .divide(2)
          .toString()}, 2rem)`,
      },
    },
  },
});

globalStyle('main', {
  flexGrow: 1,

  paddingBlock: layoutPaddingBlockVar,
  paddingInline: layoutPaddingInlineVar,
});

globalStyle('sub, sup', { vars: { [themeVars.lh]: '0' } });
