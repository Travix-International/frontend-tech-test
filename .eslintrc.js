module.exports = {
  extends: ["travix", "plugin:prettier/recommended"],
  parser: "babel-eslint",
  plugins: ["react-hooks", "babel", "react"],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: "16.8",
    },
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        assert: "either",
        depth: 3,
      },
    ],
  },
  globals: {
    window: true,
    define: true,
    require: true,
    module: true,
  },
};
