const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/src/index.html',
  filename: 'index.html',
  inject: 'body'
})

const config = {
  devtool: 'eval-source-map',
  entry: ['babel-polyfill', './client/src/index.js'],
  mode: 'development',
  output: {
    path: path.resolve(`${__dirname}/client/src`),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  resolve: {
    modules: [path.join(__dirname, 'client/src'), 'node_modules']
  }
}

module.exports = config
