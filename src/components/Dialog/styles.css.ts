import { keyframes, style } from '@vanilla-extract/css';

import { layoutPaddingInlineVar } from '~/app/global.css';
import {
  bodyTextClassVariants,
  bodyTextStyleVariants,
  headlineTextClassVariants,
  headlineTextStyleVariants,
} from '~/styles/text.css';
import { themeVars } from '~/styles/theme.css';

const dialogOpeningKeyframes = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const dialogClosingKeyframes = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

export const dialogOverlayClass = style({
  position: 'fixed',
  inset: 0,
  zIndex: 1,

  display: 'grid',
  gridTemplateColumns: 'minmax(auto, 35rem)',
  alignItems: 'center',
  justifyContent: 'center',

  paddingInline: layoutPaddingInlineVar,
  overflowY: 'auto',

  backgroundColor: themeVars.colors['scrim-0.38'],

  animationTimingFunction: themeVars.motion.easing.default,

  selectors: {
    '&[data-state="open"]': {
      animation: `${dialogOpeningKeyframes} ${themeVars.motion.duration.md[4]}`,
    },

    '&[data-state="closed"]': {
      opacity: 0,
      animation: `${dialogClosingKeyframes} ${themeVars.motion.duration.sm[4]}`,
    },
  },
});

export const dialogContentClass = style({
  padding: '1.5rem',

  backgroundColor: themeVars.colors.surfaceContainerHigh,
  borderRadius: '1.75rem',
});

export const dialogTitleClass = style([
  headlineTextClassVariants.sm,
  {
    color: themeVars.colors.onSurface,

    '@media': { [themeVars.media.minWidth.md]: headlineTextStyleVariants.md },
  },
]);

export const dialogDescriptionClass = style([
  bodyTextClassVariants.md,
  {
    color: themeVars.colors.onSurfaceVariant,

    '@media': { [themeVars.media.minWidth.md]: bodyTextStyleVariants.lg },
  },
]);
