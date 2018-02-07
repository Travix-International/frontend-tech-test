module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "travix/base",
    "travix/react"
  ],
  "rules": {
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "comma-dangle": ["off"],
    "no-confusing-arrow": ["off"],
    "no-func-assign": ["off"],
    "no-trailing-spaces": [
      "error",
      {
        "skipBlankLines": true,
        "ignoreComments": true
      }
    ],
    "react/jsx-no-bind": [
      "error",
      {
        "allowArrowFunctions": true
      }
    ],
    "react/jsx-wrap-multilines": {
      "arrow": "ignore",
      "return": "ignore"
    }
  }
};