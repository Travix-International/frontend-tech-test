module.exports = {
  "extends": "airbnb",
  "rules": {
    "linebreak-style": 0,
    "comma-dangle": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-underscore-dangle": 0
  },
  "env": {
    "node": true,
    "browser": true,
    "es6": true,
    "jest": true
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ]
};
