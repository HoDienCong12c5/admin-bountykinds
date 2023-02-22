module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': [2, 2],
    'no-multi-spaces': ['error', { 'ignoreEOLComments': false }],
    'no-undef': 'error',
    'quotes': ['error', 'single'],
    'space-in-brackets': ['off', 'always'],
    'no-unused-vars': 'warn',
    'semi': 'error',
    'space-in-parens': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'react/prop-types': 0,
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
  }
};
