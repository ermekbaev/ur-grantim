'use client';

import { useEffect, type FC } from 'react';

export const CssController: FC = () => {
  useEffect(() => {
    if (!CSS.supports('selector(:blank)'))
      import('css-blank-pseudo/browser')
        .then(({ default: cssBlankPseudoInit }) =>
          cssBlankPseudoInit({ replaceWith: '.blank' }),
        )
        // eslint-disable-next-line @typescript-eslint/use-unknown-in-catch-callback-variable
        .catch(console.error);

    if (!CSS.supports('selector(:has(*))'))
      import('css-has-pseudo/browser')
        .then(({ default: cssHasPseudoInit }) =>
          cssHasPseudoInit(document, { hover: true }),
        )
        // eslint-disable-next-line @typescript-eslint/use-unknown-in-catch-callback-variable
        .catch(console.error);
  }, []);

  return null;
};
