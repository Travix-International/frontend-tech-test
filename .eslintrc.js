const CONFIGS = require('./configs/configs')

module.exports = {
  'rules': {
    // enable additional rules
    // 'arrow-body-style': ['error', 'as-needed', { "requireReturnForObjectLiteral": true }],
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'import/prefer-default-export': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'linebreak-style': ['error', 'unix'],
    'no-underscore-dangle': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-tag-spacing': 'off',
    'semi': ['error', 'never'],
    'no-use-before-define': ['error', { 'functions': false, 'classes': false }],
  },
  'extends': [
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    // 'plugin:flowtype/recommended',
    'airbnb',
  ],
  'plugins': [
    // 'flowtype',
    'import',
  ],
  'settings': {
    'flowtype': {
        'onlyFilesWithFlowAnnotation': true,
    },
    'import/resolver': {
      'webpack': {
        'config': {
          'resolve': {
            'alias': {
              'SRC': CONFIGS.PATH.src,
            },
          },
        }
      }
    },
  },
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true,
  },
  'parser': 'babel-eslint',
  'root': true,
}
