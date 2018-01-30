const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssAutoreset = require('postcss-autoreset');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: [
    `${__dirname}/index.js`,
    `${__dirname}/assets/css/fonts.css`,
    `${__dirname}/assets/css/theme.css`,
    `${__dirname}/assets/css/ui-bundle.css`,
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
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
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              outputStyle: 'expanded',
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
              ],
            },
          },
        ],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { localIdentName: '[local]___[hash:base64:5]' },
          },
          {
            loader: 'postcss-loader',
            options: {
              outputStyle: 'expanded',
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
    new HtmlWebpackPlugin({
      title: 'TodoApp',
      filename: 'index.html',
      template: 'index.template.html',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new StyleLintPlugin({
      configFile: `${__dirname}/.stylelintrc`,
    }),
  ],
};
