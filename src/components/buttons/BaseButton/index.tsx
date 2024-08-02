'use client';

import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx/lite';

import type { PropsWithAsChild } from '~/types/components';
import { mergeEventHandlers } from '~/utils/mergeEventHandlers';
import * as styles from './styles.css';

import type { ButtonHTMLAttributes, FC, Ref } from 'react';

export interface BaseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: Ref<HTMLButtonElement>;
  softDisabled?: boolean;
}

export const BaseButton: FC<PropsWithAsChild<BaseButtonProps>> = ({
  asChild,
  children,
  type = 'button',

  softDisabled,
  onClickCapture,
  'aria-disabled': ariaDisabled,

  className,
  ...props
}) => {
  const Component = asChild ? Slot : 'button';

  const handleClickCapture = mergeEventHandlers((event) => {
    if (softDisabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, onClickCapture);

  return (
    <Component
      type={asChild ? undefined : type}
      onClickCapture={handleClickCapture}
      aria-disabled={softDisabled || ariaDisabled}
      className={clsx(styles.baseButtonClass, className)}
      {...props}
    >
      {children}
      <span aria-hidden className={styles.buttonOutlineClass} />
      <span aria-hidden className={styles.buttonStateLayerClass} />
    </Component>
  );
};
