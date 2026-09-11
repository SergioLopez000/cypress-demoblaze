const { defineConfig } = require('eslint/config');
const tseslint = require('typescript-eslint');
const cypress = require('eslint-plugin-cypress');
const checkFile = require('eslint-plugin-check-file');

module.exports = defineConfig(
  {
    ignores: ['node_modules/**', 'dist/**', 'cypress/videos/**', 'cypress/screenshots/**', 'cypress/downloads/**'],
  },
  {
    files: ['**/*.ts'],
    extends: [...tseslint.configs.recommended],
  },
  {
    files: ['cypress/**/*.ts'],
    extends: [cypress.configs.recommended],
  },
  {
    files: ['cypress/pages/**/*.ts'],
    plugins: { 'check-file': checkFile },
    rules: {
      'check-file/filename-naming-convention': ['error', { '**/*.ts': 'PASCAL_CASE' }],
    },
  },
  {
    files: ['cypress/support/**/*.ts', 'cypress/e2e/**/*.ts'],
    plugins: { 'check-file': checkFile },
    rules: {
      'check-file/filename-naming-convention': [
        'error',
        { '**/*.ts': 'CAMEL_CASE' },
        { ignoreMiddleExtensions: true },
      ],
    },
  },
);
