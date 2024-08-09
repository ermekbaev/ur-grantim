import { CSSTransition } from 'react-transition-group';

import { transitionClassNames } from './styles.css';

import type { FC, RefObject } from 'react';
import type { CSSTransitionProps } from 'react-transition-group/CSSTransition';
import type { EndHandler } from 'react-transition-group/Transition';
import type { OmitIndexSignature, SetRequired } from 'type-fest';

const TRANSITION_END_EVENTS = [
  'animationcancel',
  'animationend',
  'transitioncancel',
  'transitionend',
] satisfies (keyof HTMLElementEventMap)[];

type BaseTransitionProps = SetRequired<
  Pick<
    OmitIndexSignature<CSSTransitionProps<HTMLElement>>,
    | 'addEndListener'
    | 'children'
    | 'in'
    | 'mountOnEnter'
    | 'nodeRef'
    | 'onEnter'
    | 'onEntered'
    | 'onEntering'
    | 'onExit'
    | 'onExited'
    | 'onExiting'
    | 'unmountOnExit'
  >,
  'children' | 'in' | 'nodeRef'
>;

export interface TransitionProps extends BaseTransitionProps {
  nodeRef: RefObject<HTMLElement | null>;

  exit?: boolean;
  enter?: boolean;
  appear?: boolean;
}

export const Transition: FC<TransitionProps> = ({ nodeRef, ...props }) => {
  const defaultAddEndListener: EndHandler<HTMLElement> = (done) => {
    const listener = (event: AnimationEvent | TransitionEvent) => {
      if (event.target === event.currentTarget) done();
    };

    for (const event of TRANSITION_END_EVENTS)
      nodeRef.current?.addEventListener(event, listener, { once: true });
  };

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <CSSTransition
      nodeRef={nodeRef}
      addEndListener={defaultAddEndListener}
      classNames={transitionClassNames}
      {...props}
    />
  );
};
