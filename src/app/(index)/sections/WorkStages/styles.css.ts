import { createVar, globalStyle, keyframes, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { layoutPaddingInlineVar } from '~/app/global.css';
import { iconSizeVar } from '~/icons/styles.css';
import {
  bodyTextClassVariants,
  bodyTextStyleVariants,
  displayTextStyleVariants,
  headlineTextClassVariants,
  titleTextClassVariants,
  titleTextStyleVariants,
} from '~/styles/text.css';
import { themeVars } from '~/styles/theme.css';

const sectionClass = style({
  marginInline: calc.negate(layoutPaddingInlineVar),
  paddingBlock: '2rem',
  paddingInline: layoutPaddingInlineVar,

  '@media': {
    [themeVars.media.minWidth.sm]: { paddingBlock: '3rem' },
    [themeVars.media.minWidth.lg]: { paddingBlock: '4rem' },
  },
});

const headingClass = style([
  headlineTextClassVariants.md,
  {
    fontWeight: 700,

    '@media': {
      [themeVars.media.minWidth.sm]: displayTextStyleVariants.sm,
      [themeVars.media.minWidth.md]: { textAlign: 'center' },
      [themeVars.media.minWidth.lg]: displayTextStyleVariants.md,
    },
  },
]);

//* ================================ Accordion =================================

const accordionClass = style({
  marginTop: '1rem',
  '@media': { [themeVars.media.minWidth.lg]: { display: 'none' } },
});

const accordionItemClass = style({ '::marker': { fontSize: 0 } });

const accordionTriggerClass = style([
  titleTextClassVariants.lg,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    width: '100%',
    padding: '0.75rem 0',

    cursor: 'pointer',

    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: `0 solid ${themeVars.colors.outlineVariant}`,

    fontSize: '1.25rem',
    fontWeight: 500,
    textAlign: 'left',
    color: themeVars.colors.onSurface,

    selectors: {
      '&[data-state="closed"]': {
        borderWidth: 1,
        transition: 'border-width 0s 250ms',
      },
    },
  },
]);

const accordionTriggerArrowClass = style({
  vars: { [iconSizeVar]: '1.5rem' },

  color: themeVars.colors.onSurfaceVariant,
  transition: 'rotate 250ms',

  selectors: {
    [`${accordionTriggerClass}[data-state="open"] &`]: { rotate: '-0.5turn' },
  },
});

const radixAccordionContentHeightVar = 'var(--radix-accordion-content-height)';

const openingKeyframes = keyframes({
  from: { height: 0, paddingBottom: 0 },
  to: { height: radixAccordionContentHeightVar },
});

const closingKeyframes = keyframes({
  from: { height: radixAccordionContentHeightVar },
  to: { height: 0, paddingBottom: 0 },
});

const accordionContentClass = style([
  bodyTextClassVariants.lg,
  {
    paddingBottom: '0.75rem',
    overflow: 'hidden',

    borderBottom: `1px solid ${themeVars.colors.outlineVariant}`,

    selectors: {
      '&[data-state="open"]': {
        display: 'flex',
        alignItems: 'center',

        animation: `${openingKeyframes} 250ms`,
      },

      '&[data-state="closed"]': { animation: `${closingKeyframes} 250ms` },
    },
  },
]);

const accordionContentIconClass = style({
  flexShrink: 0,

  width: '2.5rem',
  height: '2.5rem',

  marginRight: '1rem',

  color: themeVars.colors.onSurfaceVariant,
});

//* ================================== Scheme ==================================

const schemeListClass = style({
  display: 'none',

  '@media': {
    [themeVars.media.minWidth.lg]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',

      marginTop: '3rem',
    },
  },
});

const schemeListItemClass = style({
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  height: '19.5rem',

  textAlign: 'center',

  '::marker': { fontSize: 0 },

  '@media': { [themeVars.media.minWidth.xl]: { height: '20.5rem' } },
});

const oddListItemSelector = `${schemeListItemClass}:nth-child(odd)`;
const evenListItemSelector = `${schemeListItemClass}:nth-child(even)`;

globalStyle(oddListItemSelector, {
  flexDirection: 'column-reverse',
  marginBottom: '16rem',
});

globalStyle(evenListItemSelector, { marginTop: '16rem' });

const schemeListItemArrowClass = style({
  position: 'relative',

  flexGrow: 1,
  width: '0.125rem',

  backgroundColor: 'currentColor',

  '::after': {
    content: '',

    position: 'absolute',
    left: '50%',

    width: '0.625rem',
    height: '0.625rem',

    backgroundColor: 'currentColor',
    borderRadius: '50%',
  },

  selectors: {
    [`${oddListItemSelector} &::after`]: { top: 0, translate: '-50% -50%' },
    [`${evenListItemSelector} &::after`]: { bottom: 0, translate: '-50% 50%' },
  },
});

const numberSizeVar = createVar();

const schemeListItemNumberClass = style([
  headlineTextClassVariants.sm,
  {
    vars: { [numberSizeVar]: '3.5rem' },

    display: 'inline-flex',

    alignItems: 'center',
    justifyContent: 'center',

    width: numberSizeVar,
    height: numberSizeVar,

    border: '0.125rem solid currentColor',
    borderRadius: '50%',

    fontWeight: 700,

    '::before': { left: 0 },
    '::after': { right: 0 },

    selectors: {
      '&::before, &::after': {
        content: '',
        position: 'absolute',

        width: calc.subtract('50%', calc.divide(numberSizeVar, 2)),
        height: '0.125rem',

        backgroundColor: 'currentColor',
      },
    },

    '@media': {
      [themeVars.media.minWidth.xl]: { vars: { [numberSizeVar]: '4.5rem' } },
    },
  },
]);

const schemeListItemIconClass = style({
  width: '3.5rem',
  height: '3.5rem',

  color: themeVars.colors.primary,

  '@media': {
    [themeVars.media.minWidth.xl]: { width: '4.5rem', height: '4.5rem' },
  },
});

const schemeListItemTitleClass = style([
  titleTextClassVariants.md,
  {
    margin: '1rem -25%',

    selectors: {
      [`${oddListItemSelector} &`]: { marginTop: '0.5rem' },
      [`${evenListItemSelector} &`]: { marginBottom: '0.5rem' },
    },

    '@media': {
      [themeVars.media.minWidth.xl]: {
        ...titleTextStyleVariants.lg,
        fontWeight: 500,
      },
    },
  },
]);

const schemeListItemTextClass = style([
  bodyTextClassVariants.md,
  {
    position: 'absolute',
    inset: 'auto -25%',

    selectors: {
      [`${oddListItemSelector} &`]: { top: '100%', paddingTop: '0.75rem' },

      [`${evenListItemSelector} &`]: {
        bottom: '100%',
        paddingBottom: '0.75rem',
      },
    },

    '@media': { [themeVars.media.minWidth.xl]: bodyTextStyleVariants.lg },
  },
]);

export const workStagesSectionStyles = {
  sectionClass,
  headingClass,

  accordionClass,
  accordionItemClass,
  accordionTriggerClass,
  accordionTriggerArrowClass,
  accordionContentClass,
  accordionContentIconClass,

  schemeListClass,
  schemeListItemClass,
  schemeListItemArrowClass,
  schemeListItemNumberClass,
  schemeListItemIconClass,
  schemeListItemTitleClass,
  schemeListItemTextClass,
} as const;
