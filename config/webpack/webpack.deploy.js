const path = require('path')
const webpack = require('webpack')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const plugins = [
  new webpack.optimize.ModuleConcatenationPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.NamedModulesPlugin(),
  new CircularDependencyPlugin({
    exclude: /a\.js|node_modules/,
    failOnError: false,
  }),
  new UglifyJsPlugin(),
]

module.exports = require('./webpack.base')({
  devtool: undefined,

  entry: [
    path.join(process.cwd(), 'src/app.js'),
  ],

  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  plugins,

  performance: {
    assetFilter: assetFilename => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)),
  },
})
