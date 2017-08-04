/* eslint-disable import/no-extraneous-dependencies */
'use strict'

const path = require('path')
const webpack = require('webpack')
const DashboardPlugin = require('webpack-dashboard/plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin')
const merge = require('webpack-merge')
// const webpackHotDevClient = require('react-dev-utils/webpackHotDevClient')

const CONFIGS = require('../configs')
const webpackCommon = require('./webpack.common')

const sassCSStyleLoaders = {
  test: /\.(scss|sass)$/,
  use: [
    { loader: "style-loader" },
    {
      loader: 'css-loader',
      options: {
        // minimize: true,
        // CSS Loader https://github.com/webpack/css-loader
        sourceMap: true,
        importLoaders: 1,
        // CSS Modules https://github.com/css-modules/css-modules
        // modules: true,
        // localIdentName: '[name]_[local]__[hash:base64:5]',
        // CSS Nano http://cssnano.co/options/
        // minimize: true,
        // discardComments: { removeAll: true },
      },
    },
    {
      loader: 'sass-loader',
      options: {
        noIeCompat: true,
        sourceMap: true,
      }
    },
  ],
}


const webpackDev = merge.smartStrategy(
  {
    entry: 'prepend',
    plugins: 'prepend',
  }
)(webpackCommon, {
  devtool: 'source-map', //cheap-module-source-map

  devServer: {
    host: CONFIGS.HOST,
    port: CONFIGS.PORT,
    historyApiFallback: true,
    contentBase: CONFIGS.PATH.build,
    compress: true,
    overlay: true,
    hot: true,
    stats: "errors-only",
  },

  entry: {
    main: [
      // activate HMR for React
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?overlay=true',  //?reload=true
      'react-dev-utils/webpackHotDevClient',
    ],
  },

  module: {
    rules: [
      sassCSStyleLoaders,
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: true,
    }),

    // 'react-hot-loader/babel',

    // enable cli dashboard
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin(),

    // Extract all 3rd party modules into a separate 'vendor' chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: "vendor.[hash:5].js",
      minChunks: ({ resource }) => /node_modules/.test(resource),
    }),


    // Watcher doesn't work well if you mistype casing in a path so we use
    // a plugin that prints an error when you attempt to do this.
    // See https://github.com/facebookincubator/create-react-app/issues/240
    new CaseSensitivePathsPlugin(),

    // If you require a missing module and then `npm install` it, you still have
    // to restart the development server for Webpack to discover it. This plugin
    // makes the discovery automatic so you don't have to restart.
    // See https://github.com/facebookincubator/create-react-app/issues/186
    new WatchMissingNodeModulesPlugin(CONFIGS.PATH.nodeModules),
  ],

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },

  stats: {
    colors: true,
    reasons: true,
    hash: false,
    version: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    cached: false,
    cachedAssets: false,
  },

})

module.exports = webpackDev
