'use strict';

const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index',
    './src/_custom.scss'
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
      {
        test: /\.(scss)$/,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                'css-loader',
                {
                  loader: 'postcss-loader', // Run post css actions
                  options: {
                    plugins: function () { // post css plugins, can be exported to postcss.config.js
                      return [
                        require('precss'),
                        require('autoprefixer')
                      ]
                    }

                  }
                },
                'sass-loader',
            ]
          })
      }
  ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('bundle.css'),
  ],
};
