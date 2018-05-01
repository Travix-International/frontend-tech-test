const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  resolve: {
    alias: {
      actions: resolve(__dirname, '../src/actions/'),
      configs: resolve(__dirname, '../configs/'),
      components: resolve(__dirname, '../src/components/'),
      scss: resolve(__dirname, '../src/scss/'),
      constants: resolve(__dirname, '../src/constants/')
    }
  },
  entry: [
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    resolve(__dirname, 'hotReload'),
    resolve(__dirname, '../src/scss/index.scss')
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname),
    publicPath: '/'
  },
  context: resolve(__dirname, '../src'),
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    contentBase: resolve(__dirname, '../assets'),
    publicPath: '/',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [resolve(__dirname, '../src'), resolve(__dirname)],
        use: 'babel-loader'
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=public/fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      title: 'task-manager',
      template: '../webpack/template.html'
    }),
    new ExtractTextPlugin('bundle.css')
  ],
  performance: { hints: false }
}
