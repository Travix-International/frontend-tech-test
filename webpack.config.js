const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/src/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    path: path.resolve('./client/static'),
    filename: 'todo.bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:9001',
    },
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [HtmlWebpackPluginConfig],
};
