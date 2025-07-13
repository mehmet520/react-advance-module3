import js from '@eslint/js'
import globals from 'globals'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'build', 'node_modules']),
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { js },
    extends: [js.configs.recommended],
    languageOptions: {
      sourceType: 'module',
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      // 'no-console': 'error',
      eqeqeq: 'error',
      'prefer-const': 'error',
      'no-extra-semi': 'error',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
  {
    files: ['**/*.{js,jsx}'],
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
      'jsx-a11y/alt-text': 'error',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
])
