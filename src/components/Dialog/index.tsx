'use client';

import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
  type DialogCloseProps as RadixDialogCloseProps,
  type DialogContentProps as RadixDialogContentProps,
  type DialogDescriptionProps as RadixDialogDescriptionProps,
  type DialogProps as RadixDialogRootProps,
  type DialogTitleProps as RadixDialogTitleProps,
  type DialogTriggerProps as RadixDialogTriggerProps,
} from '@radix-ui/react-dialog';
import { clsx } from 'clsx/lite';
import { createContext, use, useMemo, useRef, type FC } from 'react';

import { useControllableState } from '~/hooks/useControllableState';
import type { PropsWithAsChild } from '~/types/components';
import { Transition, type TransitionProps } from '../Transition';
import * as styles from './styles.css';

import type { Except } from 'type-fest';

//* ================================= Context ==================================

interface DialogContextValue {
  isOpen: boolean;
}

const DialogContext = createContext<DialogContextValue>({ isOpen: false });

//* =================================== Root ===================================

export interface DialogRootProps
  extends Except<RadixDialogRootProps, 'defaultOpen'> {
  defaultOpen?: boolean | (() => boolean);
}

export const DialogRoot: FC<DialogRootProps> = ({
  open: openProp,
  defaultOpen,
  onOpenChange,
  ...props
}) => {
  const [isOpen = false, setIsOpen] = useControllableState(
    openProp,
    defaultOpen,
    onOpenChange,
  );

  const contextValue: DialogContextValue = useMemo(
    () => ({ isOpen }),
    [isOpen],
  );

  return (
    <DialogContext value={contextValue}>
      <Root open={isOpen} onOpenChange={setIsOpen} {...props} />
    </DialogContext>
  );
};

//* ================================= Trigger ==================================

export interface DialogTriggerProps
  extends Except<RadixDialogTriggerProps, 'asChild'> {}

export const DialogTrigger = Trigger as FC<
  PropsWithAsChild<DialogTriggerProps>
>;

//* ================================= Content ==================================

export interface DialogContentProps
  extends Except<RadixDialogContentProps, 'asChild'> {
  transitionProps?: Except<
    TransitionProps,
    'children' | 'in' | 'mountOnEnter' | 'nodeRef' | 'unmountOnExit'
  >;
}

export const DialogContent: FC<DialogContentProps> = ({
  className,
  transitionProps,
  ...props
}) => {
  const { isOpen } = use(DialogContext);
  const overlayRef = useRef<HTMLDivElement>(null);

  return (
    <Transition
      in={isOpen}
      nodeRef={overlayRef}
      mountOnEnter
      unmountOnExit
      {...transitionProps}
    >
      <Portal forceMount>
        <Overlay ref={overlayRef} className={styles.dialogOverlayClass}>
          <Content
            className={clsx(styles.dialogContentClass, className)}
            {...props}
          />
        </Overlay>
      </Portal>
    </Transition>
  );
};

//* ================================== Title ===================================

export interface DialogTitleProps
  extends Except<RadixDialogTitleProps, 'asChild'> {}

export const DialogTitle: FC<PropsWithAsChild<DialogTitleProps>> = ({
  className,
  ...props
}) => <Title className={clsx(styles.dialogTitleClass, className)} {...props} />;

//* =============================== Description ================================

export interface DialogDescriptionProps
  extends Except<RadixDialogDescriptionProps, 'asChild'> {}

export const DialogDescription: FC<
  PropsWithAsChild<DialogDescriptionProps>
> = ({ className, ...props }) => (
  <Description
    className={clsx(styles.dialogDescriptionClass, className)}
    {...props}
  />
);

//* ================================== Close ===================================

export interface DialogCloseProps
  extends Except<RadixDialogCloseProps, 'asChild'> {}

export const DialogClose = Close as FC<PropsWithAsChild<RadixDialogCloseProps>>;
