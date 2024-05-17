/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:unicorn/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@next/next/no-img-element': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    'jsx-a11y/alt-text': 0,
    'unicorn/prefer-node-protocol': 0,
    'unicorn/no-null': 0,
    'unicorn/filename-case': 0,

    curly: 2,
  },
}
