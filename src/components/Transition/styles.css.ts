import { styleVariants } from '@vanilla-extract/css';

import type { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';
import type { EmptyObject } from 'type-fest';

export const transitionClassNames = styleVariants({
  appear: {},
  appearActive: {},
  appearDone: {},
  enter: {},
  enterActive: {},
  enterDone: {},
  exit: {},
  exitActive: {},
  exitDone: {},
} satisfies Record<keyof CSSTransitionClassNames, EmptyObject>);
