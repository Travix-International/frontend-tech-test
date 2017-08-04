/* eslint-disable import/no-extraneous-dependencies */
'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const WebpackMd5Hash = require('webpack-md5-hash')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const PreloadWebpackPlugin = require('preload-webpack-plugin')
const Visualizer = require('webpack-visualizer-plugin')

const CONFIGS = require('../configs')
const webpackCommon = require('./webpack.common')

const extractSassCSStyleLoaders = {
  test: /\.(scss|sass)$/,
  use: ExtractTextPlugin
        .extract({
          // fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
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
              },
            },
          ],
        }),
}

const webpackPrd = merge.smartStrategy(
  {
    plugins: 'prepend',
  }
)(webpackCommon, {
  devtool: 'hidden-source-map',

  output: {
    filename: 'main.[chunkhash].js',
    chunkFilename: '[name]-[id].[chunkhash].js',
  },

  module: {
    rules: [
      extractSassCSStyleLoaders,
    ],
  },

  plugins: [

    // Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash(),

    new webpack.BannerPlugin('Cequens Connect 2'),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      global: {},
      'global.TYPED_ARRAY_SUPPORT': false,
      __DEV__: false,
    }),

    // extract styles to file
    new ExtractTextPlugin({
      // allChunks: true,
      filename: '[name].[contenthash].css',
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),

    // Extract all 3rd party modules into a separate 'vendor' chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[chunkhash].js',
      minChunks: ({ resource }) => /node_modules/.test(resource),
    }),

    new Visualizer({
      filename: './statistics.html',
    }),

    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'report.html',
      openAnalyzer: true,
    }),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: 'hidden-source-map',
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
      comments: false,
    }),

    new CompressionPlugin({
      asset: '[path][query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$|\.jpe?g$|\.png$/,
      threshold: 0,
      minRatio: 0.8,
    }),

    new PreloadWebpackPlugin(),
  ],
})

module.exports = webpackPrd
