import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
    
      // Disable specific rules
      'react/prop-types': 'off', // Turn off prop-types validation
      'react/jsx-no-target-blank': 'off', // Already in your config
      'react/react-in-jsx-scope': 'off', // No need to import React in React 17+
      'no-console': 'off', // Allow console.log but show a warning
      'no-unused-vars': [
          'warn',
          {
            varsIgnorePattern: '^React$', // Ignore unused 'React'
            args: 'none',                // Ignore unused function arguments
          },
        ],    
      // Keep this rule as a warning instead of an error
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      
    },
    
  },
]
