/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: { project: true, tsconfigRootDir: __dirname },
  env: { browser: true, es2022: true, es2024: false, node: true },

  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',

    'airbnb-typescript',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',

    'plugin:import/recommended',
    'plugin:import/react',
    'plugin:import/typescript',

    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'next/core-web-vitals',

    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:@eslint-community/eslint-comments/recommended',

    'plugin:prettier/recommended',
  ],

  rules: {
    // ESLint
    'no-console': 'off',
    'no-continue': 'off',
    'consistent-return': 'off',
    'prefer-destructuring': 'off',

    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',

        message:
          'for..in loops iterate over the entire prototype chain, which is ' +
          'virtually never what you want. Use Object.{keys,values,entries}, ' +
          'and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',

        message:
          'Labels are a form of GOTO; using them makes code confusing and ' +
          'hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',

        message:
          '`with` is disallowed in strict mode because it makes code ' +
          'impossible to predict and optimize.',
      },
    ],

    // Typescript
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',

    '@typescript-eslint/no-unused-vars': [
      'warn',
      { ignoreRestSiblings: false },
    ],

    '@typescript-eslint/no-misused-promises': [
      'warn',
      { checksVoidReturn: false },
    ],

    '@typescript-eslint/no-empty-interface': [
      'warn',
      { allowSingleExtends: true },
    ],

    '@typescript-eslint/no-confusing-void-expression': [
      'warn',
      { ignoreArrowShorthand: true },
    ],

    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowNumber: true },
    ],

    // Import
    'import/prefer-default-export': 'off',

    'import/order': [
      'warn',
      {
        distinctGroup: false,
        'newlines-between': 'always',
        alphabetize: { order: 'asc', orderImportKind: 'asc' },

        groups: [
          ['builtin', 'external', 'internal'],
          ['index', 'sibling', 'parent'],
          ['type', 'unknown'],
        ],

        pathGroups: [
          { pattern: '~/**', group: 'parent', position: 'before' },
          { pattern: '../**', group: 'parent', position: 'before' },
          { pattern: './**', group: 'sibling', position: 'after' },
        ],
      },
    ],

    // React
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',

    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    // Unicorn
    'unicorn/no-null': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-negated-condition': 'off',
    'unicorn/prevent-abbreviations': 'off',

    // Comments
    '@eslint-community/eslint-comments/disable-enable-pair': [
      'warn',
      { allowWholeFile: true },
    ],

    // Prettier
    'prettier/prettier': 'warn',
  },
};
