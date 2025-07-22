import js from '@eslint/js'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'

export default defineConfig([
  globalIgnores(['dist', 'build', 'node_modules']),

  // Global JS kuralları
  {
    files: ['**/*.{js,mjs,cjs}'],
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
    plugins: { js, prettier },
    extends: [
      //  @eslint/js paketi, ESLint’in yerleşik (built-in) "eslint:recommended" kurallarını configs.recommended altında sunar
      js.configs.recommended,
      // eslint-plugin-prettier (Kod formatlama uyumluluğu)
      // prettier/prettier kuralını etkinleştirir.
      // Çakışan ESLint formatlama kurallarını pasifleştirir via eslint-config-prettier.
      eslintPluginPrettierRecommended,
    ],
    rules: {
      eqeqeq: 'error',
      'prefer-const': 'warn',
      'no-extra-semi': 'warn',
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],
      'prettier/prettier': 'error',
    },
    settings: {
      react: { version: 'detect' },
    },
  },

  // React özel kuralları
  {
    files: ['**/*.jsx'],
    plugins: {
      // react: reactPlugin,
      // 'react-hooks': reactHooks,
      // 'react-refresh': reactRefresh,
      // 'jsx-a11y': jsxA11y,
    },
    extends: [
      // eslint-plugin-react (React kodlama kuralları)
      // React’e özgü en iyi uygulama kurallarını (jsx-a11y/… hariç) flat config formatında sunar.
      reactPlugin.configs.flat.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      jsxA11y.flatConfigs.recommended,
      eslintPluginPrettierRecommended,
    ],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'warn',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'jsx-a11y/alt-text': 'warn',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
])
