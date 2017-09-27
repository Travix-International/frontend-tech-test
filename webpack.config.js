const path = require('path');
const webpack = require('webpack');

const projectRootPath = path.resolve(__dirname, '..');
const modulesPath = path.resolve(projectRootPath, 'node_modules');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['env', 'react'] }
      },
      {
        test: /\.scss$/, use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader', options: {
              includePaths: [modulesPath, projectRootPath]
            }
          }
        ]
      }
    ]
  }
};