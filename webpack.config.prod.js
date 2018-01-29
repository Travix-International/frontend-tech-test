const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: `${__dirname}/index.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      enforce: "pre",
      loader: "eslint-loader",
    },
    {
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      query: {
        presets: [
          'travix',
        ],
      },
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      title: 'TodoApp',
      filename: 'index.html',
      template: 'index.template.html',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
      },
    }),
  ],
};
