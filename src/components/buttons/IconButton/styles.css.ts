import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { iconSizeVar } from '~/icons/styles.css';
import { themeVars } from '~/styles/theme.css';

export const iconButtonRecipe = recipe({
  base: {
    padding: '0.5rem',
    borderRadius: '50%',

    '::after': {
      content: '',
      position: 'absolute',
      inset: '-0.25rem',
    },
  },

  variants: {
    variant: {
      standard: {
        backgroundColor: 'transparent',
        color: themeVars.colors.onSurfaceVariant,
      },
    },
  },
});

export const iconButtonIconClass = style({ vars: { [iconSizeVar]: '1.5rem' } });
