const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader',
        ],
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?minimize!sass-loader',
        }),
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '',
    filename: '[name]-[hash].js',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ExtractTextPlugin('index-[contenthash].css'),
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
      compress: {
        unused: true,
        dead_code: true, // eslint-disable-line camelcase
        warnings: false,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.js$/,
      options: {
        eslint: {
          emitError: true,
          failOnError: true,
          configFile: '.eslintrc.json',
          fix: false,
        },
        resolve: {
          extensions: ['', '.js', '.json'],
        },
      },
    }),
  ],
};
