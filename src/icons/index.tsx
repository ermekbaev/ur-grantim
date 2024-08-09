import { clsx } from 'clsx/lite';

import * as styles from './styles.css';

import type { CSSProperties, FC, ReactNode, Ref, SVGAttributes } from 'react';
import type { ConditionalPick, Except, Primitive } from 'type-fest';

type SVGProps = SVGAttributes<SVGSVGElement>;

type IconStylingProps = {
  [K in Extract<
    keyof SVGProps,
    keyof CSSProperties
  >]?: CSSProperties[K] extends SVGProps[K] ? CSSProperties[K] : never;
};

export interface IconProps
  extends IconStylingProps,
    Except<SVGProps, 'children' | 'aria-hidden' | keyof IconStylingProps> {
  ref?: Ref<SVGSVGElement>;
  'aria-visible'?: SVGProps['aria-hidden'];
  size?: IconStylingProps['width'] & IconStylingProps['height'];
}

export interface InitialIconProps
  extends ConditionalPick<IconProps, Primitive> {}

export function createIcon(
  name: string,
  children: ReactNode,
  { className: initialClassName, ...initialProps }: InitialIconProps = {},
) {
  const Icon: FC<IconProps> = ({ className, ...props }) => {
    const {
      size,
      'aria-visible': ariaVisible,
      ...mergedProps
    } = { ...initialProps, ...props };

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={ariaVisible === 'false' ? true : !ariaVisible}
        display="block"
        width={size}
        height={size}
        color="inherit"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0}
        className={clsx(styles.iconClass, initialClassName, className)}
        {...mergedProps}
      >
        {children}
      </svg>
    );
  };

  Icon.displayName = `${name}Icon`;
  return Icon;
}

export type Icon = ReturnType<typeof createIcon>;
