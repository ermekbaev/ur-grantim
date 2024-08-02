declare module 'css-has-pseudo/browser' {
  export interface CssHasPseudoInitOptions {
    /**
     * Determines if `:hover` pseudo-class should be tracked. This is disabled by
     * default because it is an expensive operation.
     * @default false
     * @see https://github.com/csstools/postcss-plugins/tree/main/plugins/css-has-pseudo#hover
     */
    hover?: boolean;

    /**
     * Determines which html attributes are observed. If you do any client side
     * modification of non-standard attributes and use these in combination
     * with `:has()` you should add these here.
     * @default []
     * @see https://github.com/csstools/postcss-plugins/tree/main/plugins/css-has-pseudo#observedattributes
     */
    observedAttributes?: string[];

    /**
     * Determines if the polyfill is used even when the browser has native
     * support. This is needed when you set `preserve: false` in the PostCSS
     * plugin config.
     * @default false
     * @see https://github.com/csstools/postcss-plugins/tree/main/plugins/css-has-pseudo#forcepolyfill
     */
    forcePolyfill?: boolean;

    /**
     * Determines if errors are emitted to the console in browser. By default
     * the polyfill will not emit errors or warnings.
     * @default false
     * @see https://github.com/csstools/postcss-plugins/tree/main/plugins/css-has-pseudo#debug
     */
    debug?: boolean;
  }

  function cssHasPseudoInit(
    document: Document,
    options?: CssHasPseudoInitOptions,
  ): void;

  export default cssHasPseudoInit;
}
