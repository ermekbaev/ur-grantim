import { createVar, fallbackVar, style } from '@vanilla-extract/css';

export const iconSizeVar = createVar();
export const iconWidthVar = createVar();
export const iconHeightVar = createVar();

export const iconClass = style({
  width: fallbackVar(iconWidthVar, iconSizeVar, 'auto'),
  height: fallbackVar(iconHeightVar, iconSizeVar, 'auto'),
});
