'use strict';

const webpack = require("webpack");
const path = require("path");

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
 ],

 output: {
   path: path.resolve(__dirname, 'static'),
   publicPath: '/static',
   filename: 'bundle.js'
 },

  module: {

    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
      },

    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
};
