import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx/lite';

import type { PropsWithAsChild } from '~/types/components';
import { sectionStyles as styles } from './styles.css';

import type { FC, HTMLAttributes, Ref } from 'react';

//* =================================== Root ===================================

export interface SectionRootProps extends HTMLAttributes<HTMLElement> {
  ref?: Ref<HTMLElement>;
}

const Root: FC<PropsWithAsChild<SectionRootProps>> = ({
  asChild,
  className,
  ...props
}) => {
  const Component = asChild ? Slot : 'section';
  return <Component className={clsx(styles.rootClass, className)} {...props} />;
};

Root.displayName = 'Section.Root';

//* ================================= Heading ==================================

export interface SectionHeadingProps
  extends HTMLAttributes<HTMLHeadingElement> {
  ref?: Ref<HTMLHeadingElement>;
}

const Heading: FC<PropsWithAsChild<SectionHeadingProps>> = ({
  asChild,
  className,
  ...props
}) => {
  const Component = asChild ? Slot : 'h2';

  return (
    <Component className={clsx(styles.headingClass, className)} {...props} />
  );
};

Heading.displayName = 'Section.Heading';

//* ================================== Export ==================================

export const Section = { Root, Heading } as const;
