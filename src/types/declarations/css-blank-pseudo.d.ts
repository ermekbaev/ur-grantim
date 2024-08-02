declare module 'css-blank-pseudo/browser' {
  export interface CssBlankPseudoInitOptions {
    /**
     * Determines whether the library runs even if the browser supports the
     * selector or not. By default, it won't run if the browser does support
     * the selector.
     * @default false
     * @see https://github.com/csstools/postcss-plugins/blob/main/plugins/css-blank-pseudo/README.md#force
     */
    force?: boolean;

    /**
     * Determines the attribute or class to apply to an element when it's
     * considered to be `:blank`.
     * @default '[blank]'
     * @see https://github.com/csstools/postcss-plugins/blob/main/plugins/css-blank-pseudo/README.md#replacewith-1
     */
    replaceWith?: string;
  }

  function cssBlankPseudoInit(options?: CssBlankPseudoInitOptions): void;
  export default cssBlankPseudoInit;
}
