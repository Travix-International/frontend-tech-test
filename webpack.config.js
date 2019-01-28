const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('frint-config');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    core: path.resolve(__dirname, 'core/index.js'),
  },
  // devtool: 'source-map',
  devtool: 'inline-source-map',
  node: {
    fs: 'empty',
  },
  devServer: {
    contentBase: './build',
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'js/[name].js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        // loader: 'babel-loader',
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],

        // query: {
        //   presets: [
        //     'travix',
        //   ],
        // },
      },
      {
        test: /\.(jpe?g|png|gif|ico|svg)$/i,
        exclude: [
          /node_modules/,
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
              publicPath: './',
            },
          },

        ],

      },
      {
        test: /\.(s*)css$/,
        exclude: [/node_modules/],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'layouts/index.ejs'),
      excludeChunks: ['base'],
      filename: path.resolve(__dirname, 'build/index.html'),
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      output: {
        comments: false,
      },
    }),
    new ExtractTextPlugin('styles.css'),
  ],
  externals: []
    .concat(config.lodashExternals)
    .concat(config.rxjsExternals)
    .concat(config.thirdPartyExternals)
    .concat(config.frintExternals),
};
