import { createVar, style } from '@vanilla-extract/css';

export const iconSizeVar = createVar();
export const iconClass = style({ width: iconSizeVar, height: iconSizeVar });
