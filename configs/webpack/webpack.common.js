/* eslint-disable import/no-extraneous-dependencies */
'use strict'

const chalk = require('chalk')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const git = require('git-rev-sync')


const CONFIGS = require('../configs')

const eslintPreLoader = {
  enforce: 'pre', // preloader
  test: /\.(js|jsx)$/,
  loader: 'eslint-loader',
  include: CONFIGS.PATH.src,
  exclude: CONFIGS.PATH.node_modules,
  options: {
    emitWarning: true,
    failOnError: false,
  },
}

const othersURLLoader = {
  exclude: [
    /\.html$/,
    /\.(js|jsx)$/,
    /\.(scss|sass)$/,
    /\.json$/,
    /\.svg$/,
  ],
  use: {
    loader: 'url-loader',
    query: {
      limit: 10000,
      name: 'static/[name].[hash:8].[ext]',
    },
  },
}

const babelLoader = {
  test: /\.(js|jsx)$/,
  include: CONFIGS.PATH.src,
  use: {
    loader: 'babel-loader',
    options: {
      // This is a feature of `babel-rule` for webpack (not Babel itself).
      // It enables caching results in ./node_modules/.cache/babel-rule/
      // directory for faster rebuilds.
      cacheDirectory: true,
    },
  },
}

const jsonLoader = {
  test: /\.json$/,
  use: 'json-loader',
}

const svgLoader = {
  test: /\.svg$/,
  use: {
    loader: 'file-loader',
    query: {
      name: 'static/media/[name].[hash:8].[ext]',
    },
  },
}

module.exports = {
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test

  devtool: 'hidden-source-map',

  context: CONFIGS.PATH.src,

  entry: {
    main: [
      // source index
      CONFIGS.PATH.srcIndex,
    ],
  },

  output: {
    path: CONFIGS.PATH.build,
    pathinfo: true,
    publicPath: '/',
    filename: 'main.[hash:8].js',
    chunkFilename: '[name]-[id].[hash:8].js',
  },

  resolve: {
    modules: [
      CONFIGS.PATH.src,
      'node_modules',
    ],

    extensions: ['*', '.js', '.json', '.jsx'],

    alias: {
      SRC: CONFIGS.PATH.src,
    },
  },

  module: {
    rules: [
      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      eslintPreLoader,
      othersURLLoader,
      babelLoader,
      jsonLoader,
      svgLoader,
      // ** STOP ** Are you adding a new rule?
      // Remember to add the new extension(s)
      // to the "othersURLLoader" rule exclusion list.
    ],
  },

  plugins: [
    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),

    new webpack.NoEmitOnErrorsPlugin(),

    // clean build dir
    new CleanWebpackPlugin(['build'], {
      root: CONFIGS.PATH.projectRoot,
    }),

    // html
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: 'favicon.ico',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),

    new webpack.DefinePlugin({
      GITREV: {
        branch: JSON.stringify(git.branch()),
        date: JSON.stringify(git.date()),
        long: JSON.stringify(git.long()),
        short: JSON.stringify(git.short()),
        tag: JSON.stringify(git.tag()),
      },
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: false,
      // debug: true,
      noInfo: true, // set to false to see a list of every file being bundled.
      state: false,
      options: {
        // eslint: {
        //   failOnWarning: false,
        //   failOnError: false,
        // },
        // sassLoader: {
        //   includePaths: [path.resolve(__dirname, 'src', 'sass')]
        // },
        // context: '/',
        postcss: () => ['autoprefixer'],
      },
    }),

    // new ProgressBarPlugin({
    //   complete: '❚',
    //   format: `  build［:bar］${chalk.green.bold(':percent')} (:elapsed seconds)`,
    //   clear: false,
    // }),

    new SimpleProgressWebpackPlugin({ format: 'compact' }),
  ],

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },

  stats: {
    colors: true,
    reasons: true,
    hash: true,
    version: true,
    timings: true,
    chunks: true,
    chunkModules: true,
    cached: true,
    cachedAssets: true,
  },

}
