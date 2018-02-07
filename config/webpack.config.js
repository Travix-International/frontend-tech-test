const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssAutoreset = require('postcss-autoreset');

const ROOT_PATH = path.resolve(process.cwd());

const MODULES_PATH = path.resolve(ROOT_PATH, 'node_modules');
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const ASSETS_PATH = path.resolve(ROOT_PATH, 'assets');

module.exports = {
  entry: {
    bundle: [
      path.resolve(APP_PATH, 'index.js'),
      path.resolve(ASSETS_PATH, 'css/theme.css'),
      path.resolve(ASSETS_PATH, 'css/ui-bundle.css')
    ]
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: MODULES_PATH,
        options: {
          compact: false
        }
      },
      {
        test: /\.css$/,
        include: [
          /flexbox/,
          ASSETS_PATH,
          APP_PATH
        ],
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: true,
              plugins: () => [
                autoprefixer({
                  browsers: ['last 2 versions', 'ie 11']
                }),
                postcssFlexbugsFixes,
                postcssAutoreset({
                  reset: {
                    boxSizing: 'border-box'
                  }
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        exclude: MODULES_PATH,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { localIdentName: '[local]___[hash:base64:5]' }
          },
          {
            loader: 'sass-loader',
            options: {
              preferPathResolver: 'webpack'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: true,
              plugins: () => [
                autoprefixer({
                  browsers: ['last 2 versions', 'ie 11']
                }),
                postcssFlexbugsFixes
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};
