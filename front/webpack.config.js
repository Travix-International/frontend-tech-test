const path = require('path');

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname)
  },
  output: {
    filename: '[name].js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'application'),
      'node_modules'
    ],
    alias: {
      application: path.resolve(__dirname, 'application'),
      components: path.resolve(__dirname, 'application/components'),
    },
    descriptionFiles: ['package.json'],
    extensions: ['.js', '.less']
  },
  devtool: 'eval-source-map',
  module: {
    rules: [{
      test: /\.less$/,
      include: [ path.resolve(__dirname, 'application')],
      exclude: /(node_modules)/,
      use: ['style-loader', 'css-loader', 'less-loader']
    },
    {
      test: /\.js$/,
      include: path.resolve(__dirname, 'application'),
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      options: {
        presets: ['react'],
        cacheDirectory: true
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.ejs'),
      filename: path.resolve(__dirname, './dist/index.html')
    }),
    new FriendlyErrorsWebpackPlugin(),
    new CaseSensitivePathsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    noInfo: false,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    overlay: {
      errors: true,
      warnings: false
    },
    proxy: {
      '/api/**': {
        target: 'http://localhost:9001',
        pathRewrite: {
          "^/api": ""
        },
        changeOrigin: true
      }
    }
  }
}
