/* eslint-env node */
const path = require("path");
const webpack = require("webpack");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const chalk = require("chalk");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: [
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
    "./src/index.js",
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1,
              localIdentName: "[local]--[hash:base64:5]",
            },
          },
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              data: "@import 'variables';",
              includePaths: [path.resolve(__dirname, "src")],
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader",
          },
          "svg-react-loader",
        ],
      },
    ],
  },
  plugins: [
    new ProgressBarPlugin({
      format: `webpack building [:bar] ${chalk.green.bold(":percent")}`,
      complete: chalk.hex("#224dff")("="),
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
