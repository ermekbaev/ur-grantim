import { keyframes, style } from '@vanilla-extract/css';

import { themeVars } from '~/styles/theme.css';

export const smartSolutionsLogoClass = style({
  vars: { [themeVars.lh]: '1.1em' },

  userSelect: 'none',

  fontSize: 1598.24,
  fontWeight: 500,
  textTransform: 'uppercase',
});

const rotateKeyframes = keyframes({
  from: { transform: 'rotate(0turn)' },
  to: { transform: 'rotate(1turn)' },
});

const clipKeyframes = keyframes({
  '0%': { strokeDasharray: '0 150', strokeDashoffset: 0 },
  '47.5%': { strokeDasharray: '42 150', strokeDashoffset: -16 },
  '95%, 100%': { strokeDasharray: '42 150', strokeDashoffset: -59 },
});

export const spinnerIconCircleClass = style({
  fill: 'none',
  transformOrigin: 'center',
  animation: `1600ms linear infinite ${rotateKeyframes}, 1200ms ease-in-out infinite ${clipKeyframes}`,
});
