import { style } from '@vanilla-extract/css';

import { layoutPaddingInlineVar } from '~/app/global.css';
import {
  bodyTextClassVariants,
  bodyTextStyleVariants,
} from '~/styles/text.css';
import { themeVars } from '~/styles/theme.css';

const footerClass = style([
  bodyTextClassVariants.md,
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    paddingBlock: '2rem',
    paddingInline: layoutPaddingInlineVar,

    backgroundColor: themeVars.colors.surfaceContainer,

    '@media': { [themeVars.media.minWidth.sm]: bodyTextStyleVariants.lg },
  },
]);

const logoClass = style({
  width: '8rem',
  marginBlockEnd: '0.75rem',
  color: themeVars.colors.primary,

  '@media': {
    [themeVars.media.minWidth.sm]: { width: '9rem' },
    [themeVars.media.minWidth.lg]: { width: '10rem' },
  },
});

export const footerStyles = { footerClass, logoClass } as const;
