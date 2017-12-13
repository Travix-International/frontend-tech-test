const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    filename: 'index.html',
    inject: 'body',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    },
    hash: true,
  }),
  new CircularDependencyPlugin({
    exclude: /a\.js|node_modules/,
    failOnError: false,
  }),
]

module.exports = require('./webpack.base')({
  devtool: 'eval-source-map',

  entry: [
    'react-hot-loader/patch',
    path.join(process.cwd(), 'src/app.js'),
  ],

  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  plugins,

  performance: {
    hints: false,
  },

  devServer: {
    contentBase: path.join(process.cwd(), 'dist'),
    hot: true,
    inline: true,
    port: 8080,
  },
})
