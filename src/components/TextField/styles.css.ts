import {
  createVar,
  fallbackVar,
  globalStyle,
  style,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import {
  bodyTextClassVariants,
  bodyTextStyleVariants,
} from '~/styles/text.css';
import { themeVars } from '~/styles/theme.css';

const outlineWidthVar = createVar();
const textFieldColorVar = createVar();

export const textFieldClass = style({
  vars: { [outlineWidthVar]: `${1 / 16}rem` },
});

globalStyle(`${textFieldClass} *`, {
  transition: `none ${themeVars.motion.easing.default} ${themeVars.motion.duration.sm[4]}`,
});

export const textFieldInputWrapperClass = style({
  position: 'relative',
  zIndex: 0,
});

export const textFieldInputClass = style([
  bodyTextClassVariants.lg,
  {
    width: '100%',

    margin: outlineWidthVar,
    padding: calc.subtract('1rem', outlineWidthVar),

    caretColor: textFieldColorVar,

    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '0.25rem',

    color: themeVars.colors.onSurface,

    transitionProperty: 'color',

    ':focus': { outline: 'none' },

    '::placeholder': {
      opacity: 1,
      color: themeVars.colors.onSurfaceVariant,
      transition: 'inherit',
    },

    selectors: {
      '&:disabled, &:disabled::placeholder': { color: textFieldColorVar },
    },
  },
]);

const [
  hoveredTextFieldSelector,
  focusedTextFieldSelector,
  invalidTextFieldSelector,
  disabledTextFieldSelector,
  requiredTextFieldSelector,
] = (
  [
    ':hover',
    ':focus',
    '[aria-invalid="true"]',
    ':disabled',
    ':is(:required, [aria-required="true"])',
  ] as const
).map(
  (inputSelector) =>
    `${textFieldClass}:has(${textFieldInputClass}${inputSelector})`,
);

globalStyle(hoveredTextFieldSelector, {
  vars: { [textFieldColorVar]: themeVars.colors.onSurface },
});

globalStyle(focusedTextFieldSelector, {
  vars: {
    [outlineWidthVar]: `${3 / 16}rem`,
    [textFieldColorVar]: themeVars.colors.primary,
  },
});

globalStyle(invalidTextFieldSelector, {
  vars: { [textFieldColorVar]: themeVars.colors.error },
});

globalStyle(disabledTextFieldSelector, {
  vars: { [textFieldColorVar]: themeVars.colors['onSurface-0.38'] },
});

export const textFieldLabelClass = style([
  bodyTextClassVariants.lg,
  {
    position: 'absolute',
    top: '1rem',
    left: '1rem',

    pointerEvents: 'none',
    cursor: 'text',
    userSelect: 'none',

    color: fallbackVar(textFieldColorVar, themeVars.colors.onSurfaceVariant),

    transitionProperty:
      'top, transform, font-size, line-height, letter-spacing',

    selectors: {
      [`${textFieldClass}:has(${textFieldInputClass}:is(:focus, :not(:blank), :placeholder-shown)) &`]:
        {
          top: '0',
          transform: 'translateY(-50%)',

          ...bodyTextStyleVariants.sm,
        },

      [`${requiredTextFieldSelector} &::after`]: { content: '*' },
    },
  },
]);

const outlineColorVar = createVar();

export const textFieldOutlineClass = style({
  vars: {
    [outlineColorVar]: fallbackVar(textFieldColorVar, themeVars.colors.outline),
  },

  position: 'absolute',
  inset: 0,
  zIndex: -1,

  display: 'flex',

  selectors: {
    [`${disabledTextFieldSelector} &`]: {
      vars: { [outlineColorVar]: themeVars.colors['onSurface-0.12'] },
    },
  },
});

const outlineComponentClass = style({
  border: `${outlineWidthVar} solid ${outlineColorVar}`,
  borderRadius: '0.25rem',

  transitionProperty: 'border',
});

export const textFieldOutlineStartClass = style([
  outlineComponentClass,
  {
    flexBasis: '0.75rem',
    flexShrink: 0,

    borderInlineEnd: 'none',
    borderStartEndRadius: 0,
    borderEndEndRadius: 0,
  },
]);

export const textFieldOutlineEndClass = style([
  outlineComponentClass,
  {
    flexGrow: 1,

    borderInlineStart: 'none',
    borderStartStartRadius: 0,
    borderEndStartRadius: 0,
  },
]);

const outlineNotchPartWidthVar = createVar();

export const textFieldOutlineNotchClass = style([
  outlineComponentClass,
  {
    vars: { [outlineNotchPartWidthVar]: '50%' },

    position: 'relative',
    paddingInline: '0.25rem',

    borderBlockStart: 'none',
    borderInline: 'none',
    borderRadius: 0,

    '::after': { left: 0 },
    '::before': { right: 0 },

    selectors: {
      '&::after, &::before': {
        content: '',
        position: 'absolute',
        width: outlineNotchPartWidthVar,

        borderBlockStart: `${outlineWidthVar} solid ${outlineColorVar}`,

        transition: 'inherit',
        transitionProperty: 'width, border',
      },

      [`${textFieldClass}:has(${textFieldInputClass}:is(:focus, :not(:blank), :placeholder-shown)) &`]:
        { vars: { [outlineNotchPartWidthVar]: '0' } },
    },
  },
]);

export const textFieldOutlineLabelClass = style([
  bodyTextClassVariants.sm,
  {
    visibility: 'hidden',
    selectors: { [`${requiredTextFieldSelector} &::after`]: { content: '*' } },
  },
]);

export const textFieldSupportingTextClass = style([
  bodyTextClassVariants.sm,
  {
    paddingBlockStart: '0.25rem',
    paddingInline: '1rem',

    color: themeVars.colors.onSurfaceVariant,
    transitionProperty: 'color',

    selectors: {
      [`:is(${invalidTextFieldSelector}, ${disabledTextFieldSelector}) &`]: {
        color: textFieldColorVar,
      },
    },
  },
]);
