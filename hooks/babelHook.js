require("babel-register")({
  presets: [
    "babel-preset-es2015",
    "babel-preset-react",
    "babel-preset-stage-0"
  ].map(require.resolve),
});
