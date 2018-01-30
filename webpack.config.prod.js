const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssAutoreset = require('postcss-autoreset');
const cssnano = require('cssnano');

module.exports = {
  entry: `${__dirname}/index.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: "pre",
        loader: "eslint-loader",
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'travix',
          ],
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { localIdentName: '[local]___[hash:base64:5]' },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: () => [
                  autoprefixer({
                    browsers: ['last 2 versions', 'ie 11'],
                  }),
                  postcssFlexbugsFixes,
                  postcssAutoreset({
                    reset: {
                      boxSizing: 'border-box',
                    },
                  }),
                  cssnano({
                    preset: 'default',
                  }),
                ],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                preferPathResolver: 'webpack',
              },
            },
          ],
        }),
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: { limit: 10000, name: '[path][name].[ext]', mimetype: 'application/font-woff' },
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: { limit: 10000, name: '[path][name].[ext]', mimetype: 'application/font-woff' },
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: { limit: 10000, name: '[path][name].[ext]', mimetype: 'application/octet-stream' },
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: { name: '[path][name].[ext]' },
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'url-loader',
            options: { limit: 10000, name: '[path][name].[ext]', mimetype: 'image/svg+xml' },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      title: 'TodoApp',
      filename: 'index.html',
      template: 'index.template.html',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
      },
    }),
  ],
};
