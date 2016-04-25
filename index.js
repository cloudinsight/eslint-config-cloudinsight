module.exports = {
  extends: 'airbnb',
  root: true,
  parser: 'babel-eslint',
  ext: [
    'js', 'jsx', 'es6'
  ],
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  globals: {
    BlueWare: false
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      spread: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: [
    'react'
  ],
  rules: {
    'no-dupe-keys': 2,
    'no-debugger': 2,
    'no-fallthrough': 2,
    'no-with': 2,
    'id-length': 0,
    'new-cap': 0,
    'consistent-return': 0,
    'no-console': 0,
    'comma-dangle': [2, 'never'],
    complexity: [1, 5],
    'react/prop-types': 1,
    'react/display-name': [1, { ignoreTranspilerName: true }],
    'react/jsx-space-before-closing': 1,
    'react/jsx-curly-spacing': [2, 'always'],
    'react/jsx-no-bind': 0,
    'react/prefer-es6-class': 0,
    'react/sort-comp': 0,
    'react/jsx-closing-bracket-location': [2, { nonEmpty: 'after-props' }]
  }
};
