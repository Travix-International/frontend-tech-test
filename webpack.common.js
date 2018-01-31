const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: '[name].build.css'
});

module.exports = {
  context: __dirname,
  entry: {
    app: [
      './src/app.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].build.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*.*']),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    extractSass
  ],
  module: {
    loaders: [
      {
       test: /\.scss$/,
       use: extractSass.extract({
           use: [{
               loader: 'css-loader',
           }, {
               loader: 'sass-loader'
           }],
           fallback: 'style-loader'
       })
      },
      {
       test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
       use: [
         'file-loader'
       ]
      },
      {
       test: /\.(html)$/,
       use: [
         'html-loader'
       ]
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: [
            ["env", {"targets": {"browsers": ["last 2 versions"]}}],
            'react'
          ],
          plugins: [
            'react-html-attrs',
            'transform-object-rest-spread'
          ]
        }
      },
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader',
        options: {
          cache: true,
          formatter: require('eslint-friendly-formatter')
        }
      }
    ]
  }
};
