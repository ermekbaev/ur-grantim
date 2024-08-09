import { Slottable } from '@radix-ui/react-slot';
import { clsx } from 'clsx/lite';

import type { Icon } from '~/icons';
import { BaseButton, type BaseButtonProps } from '../BaseButton';
import * as styles from './styles.css';

import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { FC } from 'react';

type Variants = Required<
  NonNullable<RecipeVariants<typeof styles.iconButtonRecipe>>
>;

export interface IconButtonProps extends Variants, BaseButtonProps {
  icon: Icon;
}

export const IconButton: FC<IconButtonProps> = ({
  icon: Icon,
  children,
  variant,
  className,
  ...props
}) => (
  <BaseButton
    className={clsx(styles.iconButtonRecipe({ variant }), className)}
    {...props}
  >
    <Slottable>{children}</Slottable>
    <Icon aria-hidden className={styles.iconButtonIconClass} />
  </BaseButton>
);
