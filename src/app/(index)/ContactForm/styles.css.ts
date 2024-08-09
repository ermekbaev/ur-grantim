import { style } from '@vanilla-extract/css';

import {
  bodyTextClassVariants,
  bodyTextStyleVariants,
  labelTextClassVariants,
  labelTextStyleVariants,
} from '~/styles/text.css';
import { themeVars } from '~/styles/theme.css';

const formClass = style({ display: 'grid', gap: '1rem' });

const errorMessageClass = style([
  labelTextClassVariants.lg,
  {
    marginBlock: '-0.25rem',

    color: themeVars.colors.error,
    textAlign: 'center',

    '@media': { [themeVars.media.minWidth.md]: labelTextStyleVariants.xl },
  },
]);

const termsClass = style([
  bodyTextClassVariants.sm,
  {
    marginTop: '-0.5rem',

    textAlign: 'center',

    '@media': { [themeVars.media.minWidth.md]: bodyTextStyleVariants.md },
  },
]);

export const contactFormStyles = {
  formClass,
  errorMessageClass,
  termsClass,
} as const;
