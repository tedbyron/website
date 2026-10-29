import { fileURLToPath } from 'node:url'

import js from '@eslint/js'
import { defineConfig, includeIgnoreFile } from 'eslint/config'
import prettier from 'eslint-config-prettier'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'
import ts from 'typescript-eslint'

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url))

export default defineConfig(
  includeIgnoreFile(gitignorePath),
  js.configs.recommended,
  ts.configs.eslintRecommended,
  ts.configs.strictTypeChecked,
  ts.configs.stylisticTypeChecked,
  svelte.configs['flat/recommended'],
  prettier,
  svelte.configs['flat/prettier'],
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        App: true,
      },
    },
    rules: {
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/restrict-template-expressions': [
        1,
        {
          allowBoolean: true,
          allowNullish: true,
          allowNumber: true,
          allowRegExp: true,
        },
      ],
    },
  },
  {
    files: ['**/*.svelte', '**/*.svelte.ts'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
        extraFileExtensions: ['.svelte'],
      },
    },
    rules: {
      // Svelte snippets aren't compatible with this.
      '@typescript-eslint/no-confusing-void-expression': 0,
    },
  },
)
