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
    jest: true
  },
  globals: {
    BlueWare: false
  },
  plugins: [
    'import',
    'react',
    'jsx-a11y',
    'jquery'
  ],
  rules: {
    'class-methods-use-this': 1,
    'comma-dangle': [2, 'never'],
    complexity: [1, 5],
    'consistent-return': 1,
    'import/prefer-default-export': 1,
    'jsx-a11y/label-has-for': 1,
    'jsx-a11y/no-static-element-interactions': 1,
    'jquery/no-bind': 2,
    'jquery/no-html': 2,
    'no-mixed-operators': 1,
    'no-plusplus': 1,
    'no-prototype-builtins': 1,
    'no-restricted-syntax': [2, 'DebuggerStatement', 'LabeledStatement', 'WithStatement'],
    'no-underscore-dangle': 1,
    'operator-assignment': 1,
    'react/forbid-prop-types': 1,
    'react/jsx-closing-bracket-location': [2, { nonEmpty: 'after-props' }],
    'react/jsx-curly-spacing': [2, 'always'],
    'react/jsx-filename-extension': 0,
    'react/jsx-no-bind': 1,
    'react/jsx-no-target-blank': 1,
    'react/no-find-dom-node': 1,
    'react/no-string-refs': 1,
    'react/no-unescaped-entities': 1,
    'react/no-unused-prop-types': 1,
    'react/prefer-stateless-function': 1,
    'react/prop-types': 1
  }
}
