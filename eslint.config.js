import js from '@eslint/js'
import prettier from 'eslint-plugin-prettier'
import globals from 'globals'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import { defineConfig, globalIgnores } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'

export default defineConfig([
  globalIgnores(['dist', 'build', 'node_modules']),
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    plugins: { js, prettier },
    extends: [eslintConfigPrettier],
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      // 'no-console': 'error',
      eqeqeq: 'error',
      'prefer-const': 'error',
      'no-extra-semi': 'error',
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['**/*.{js,jsx}'],
    settings: {
      react: { version: 'detect' },
    },
    plugins: {
      // react: reactPlugin,
      // 'react-refresh': reactRefresh,
      // 'react-hooks': reactHooks,
      // 'jsx-a11y':jsxA11y,
    },
    extends: [
      reactPlugin.configs.flat.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      jsxA11y.flatConfigs.recommended,
    ],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/react-in-jsx-scope': 'off',
      'jsx-a11y/alt-text': 'warn',
    },
  },
])
