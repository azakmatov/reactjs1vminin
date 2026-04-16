/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },

    rules: {
      // База (рекомендуемые)
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
      'no-debugger': 'warn',

      // Ошибки
      'eqeqeq': 'error',
      'no-var': 'error',
      'prefer-const': 'error',

      // Стиль (минимально разумный)
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],

      // Читаемость
      'no-multiple-empty-lines': ['warn', { max: 1 }],
      'eol-last': 'warn'
    }
  }
];