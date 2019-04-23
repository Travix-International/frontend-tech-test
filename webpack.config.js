const path = require("path");
const webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry : {
    'todo.js': './src/index.js',
    'App.css': './src/App.scss'
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    publicPath: '/',
    filename: "[name]"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      },{
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1,
              localIdentName: "[local]--[hash:base64:5]",
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin({
    //   verbose:  true,
    //   dry:      false
    // }),
    new ExtractTextPlugin('App.css'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};