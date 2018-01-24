const path = require('path')
const webpack = require('webpack')
const CircularDependencyPlugin = require('circular-dependency-plugin')

const port = 8080

const plugins = [
  new webpack.optimize.ModuleConcatenationPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.NamedModulesPlugin(),
  new CircularDependencyPlugin({
    exclude: /a\.js|node_modules/,
    failOnError: false,
  }),
]

module.exports = require('./webpack.base')({
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
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
    historyApiFallback: true,
    hot: true,
    inline: true,
    port,
  },
})
