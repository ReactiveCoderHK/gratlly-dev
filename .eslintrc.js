module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: { browser: true },
  ignorePatterns: ['node_modules', 'dist', '.eslintrc.js'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'xo/browser',
    'xo-react/space',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    camelcase: 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'lines-between-class-members': 0,
    'capitalized-comments': 0,
    'react/prop-types': 0,
    'react/jsx-tag-spacing': 0,
    'react/jsx-curly-newline': 0,
    'react/jsx-closing-tag-location': 0,
    'react/no-danger': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
  },
};