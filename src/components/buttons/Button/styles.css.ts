import { createVar } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { recipe } from '@vanilla-extract/recipes';

import { iconSizeVar } from '~/icons/styles.css';
import { labelTextClassVariants } from '~/styles/text.css';
import { themeVars } from '~/styles/theme.css';
import {
  DISABLED_BUTTON_SELECTOR,
  FOCUSED_OR_ACTIVE_BUTTON_SELECTOR,
} from '../BaseButton/styles.css';

const buttonPaddingBlockVar = createVar();
const buttonPaddingInlineVar = createVar();

export const buttonRecipe = recipe({
  base: [
    labelTextClassVariants.lg,
    {
      vars: {
        [buttonPaddingBlockVar]: '0.75rem',
        [buttonPaddingInlineVar]: '1.5rem',
      },

      display: 'flex',
      justifyContent: 'center',

      paddingBlock: buttonPaddingBlockVar,
      paddingInline: buttonPaddingInlineVar,

      borderRadius: 9999,
    },
  ],

  variants: {
    variant: {
      filled: {
        backgroundColor: themeVars.colors.primary,
        color: themeVars.colors.onPrimary,

        selectors: {
          '&:hover': { boxShadow: themeVars.elevation.lvl1 },
          [FOCUSED_OR_ACTIVE_BUTTON_SELECTOR]: { boxShadow: 'none' },

          [DISABLED_BUTTON_SELECTOR]: {
            backgroundColor: themeVars.colors['onSurface-0.12'],
            boxShadow: 'none',

            color: themeVars.colors['onSurface-0.38'],
          },
        },
      },
    },
  },
});

export const buttonIconRecipe = recipe({
  base: { vars: { [iconSizeVar]: themeVars.lh }, flexShrink: 0 },

  variants: {
    position: {
      start: {
        order: -9999,

        marginInlineEnd: '0.5rem',
        marginInlineStart: calc.divide(buttonPaddingInlineVar, -4),
      },

      end: {
        order: 9999,

        marginInlineStart: '0.5rem',
        marginInlineEnd: calc.divide(buttonPaddingInlineVar, -4),
      },
    },
  },

  defaultVariants: { position: 'start' },
});
