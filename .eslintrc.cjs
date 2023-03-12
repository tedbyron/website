/** @type {import('@typescript-eslint/utils').TSESLint.Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['standard-with-typescript', 'prettier'],
  plugins: ['svelte3', '@typescript-eslint'],
  ignorePatterns: ['*.cjs', 'svelte.config.js'],
  settings: { 'svelte3/typescript': () => require('typescript') },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/first': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaFeatures: { impliedStrict: true },
    ecmaVersion: 'latest',
    extraFileExtensions: ['.svelte'],
    project: './tsconfig.json',
    sourceType: 'module'
  },
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          ['internal', 'parent', 'sibling', 'index'],
          ['object', 'type']
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc'
        }
      }
    ]
  }
}