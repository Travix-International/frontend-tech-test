const path = require('path');
const webpack = require('webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const merge = require('webpack-merge');
const webpackBase = require('./webpack.config');

module.exports = merge(webpackBase, {
  devtool: 'source-map',
  performance: {
    hints: false
  },
  devServer: {
    contentBase: path.join(process.cwd(), 'dist'),
    historyApiFallback: true,
    hot: true,
    inline: true
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: false
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
});