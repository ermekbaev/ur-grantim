import { createVar, style } from '@vanilla-extract/css';

import { themeVars } from '~/styles/theme.css';

export const FOCUSED_OR_ACTIVE_BUTTON_SELECTOR =
  '&:is(:focus-visible, :active)';

export const DISABLED_BUTTON_SELECTOR =
  '&:is(:disabled, [aria-disabled="true"])';

export const buttonStateLayerColorVar = createVar();
export const buttonStateLayerOpacityVar = createVar();

export const buttonOutlineWidthVar = createVar();
export const buttonOutlineStyleVar = createVar();
export const buttonOutlineColorVar = createVar();

export const baseButtonClass = style({
  vars: {
    [buttonStateLayerOpacityVar]: '0',
    [buttonStateLayerColorVar]: 'inherit',

    [buttonOutlineWidthVar]: '0',
    [buttonOutlineStyleVar]: 'solid',
    [buttonOutlineColorVar]: 'transparent',
  },

  position: 'relative',
  zIndex: 0,

  cursor: 'pointer',
  border: 'none',
  textDecoration: 'none',

  transition: `${themeVars.motion.duration.sm[4]} ${themeVars.motion.easing.default}`,
  transitionProperty: 'background-color, box-shadow, color',

  selectors: {
    '&:hover': { vars: { [buttonStateLayerOpacityVar]: '0.08' } },

    [FOCUSED_OR_ACTIVE_BUTTON_SELECTOR]: {
      vars: { [buttonStateLayerOpacityVar]: '0.12' },
      outline: 'none',
    },

    [DISABLED_BUTTON_SELECTOR]: {
      vars: { [buttonStateLayerOpacityVar]: '0' },
      cursor: 'default',
    },
  },
});

export const buttonStateLayerClass = style({
  position: 'absolute',
  inset: 0,
  zIndex: -1,

  backgroundColor: 'currentColor',
  borderRadius: 'inherit',
  opacity: buttonStateLayerOpacityVar,

  color: buttonStateLayerColorVar,

  transition: 'inherit',
  transitionProperty: 'opacity, color',
});

export const buttonOutlineClass = style({
  position: 'absolute',
  inset: 0,
  zIndex: 0,

  border: `${buttonOutlineWidthVar} ${buttonOutlineStyleVar} currentColor`,
  borderRadius: 'inherit',

  color: buttonOutlineColorVar,

  transition: 'inherit',
  transitionProperty: 'border, color',
});
