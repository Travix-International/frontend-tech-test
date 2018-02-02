const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  bail: true,
  entry: [
    path.resolve(__dirname, './src/styles/index.scss'),
    path.resolve(__dirname, './src/javascript/index.js')
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'travix-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env']
          }
        }
      },
      {
        test: /\.s?css$/i,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer({
                    browsers: ['last 2 versions', 'iOS >= 8', 'Safari >= 8']
                  })
                ]
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin('travix-bundle.css')]
};
