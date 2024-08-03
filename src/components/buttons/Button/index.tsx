import { Slottable } from '@radix-ui/react-slot';
import { clsx } from 'clsx/lite';

import type { Icon } from '~/icons';
import type { PropsWithAsChild } from '~/types/components';
import { BaseButton, type BaseButtonProps } from '../BaseButton';
import * as styles from './styles.css';

import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { FC } from 'react';

type Variants = Required<
  NonNullable<RecipeVariants<typeof styles.buttonRecipe>>
>;

type IconPosition = NonNullable<
  RecipeVariants<typeof styles.buttonIconRecipe>
>['position'];

export interface ButtonProps extends Variants, BaseButtonProps {
  icon?: Icon;
  iconPosition?: IconPosition;
}

export const Button: FC<PropsWithAsChild<ButtonProps>> = ({
  children,
  variant,
  className,
  icon: Icon,
  iconPosition,
  ...props
}) => (
  <BaseButton
    className={clsx(styles.buttonRecipe({ variant }), className)}
    {...props}
  >
    <Slottable>{children}</Slottable>

    {Icon && (
      <Icon
        aria-hidden
        className={styles.buttonIconRecipe({ position: iconPosition })}
      />
    )}
  </BaseButton>
);
