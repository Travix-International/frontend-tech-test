const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: [
    './src/index.js'
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './../dist'),
  },
  resolve: {
    extensions: ['*', '.js', '.jsx','.ts','.tsx','.es6'],
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],  
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['awesome-typescript-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Travix',
      // file:'./../src/index.html',
      template:path.resolve(__dirname, './../src/index.html'),
      chunksSortMode:'none'
    }),
    new CleanWebpackPlugin(['./../dist']),
  ],
};