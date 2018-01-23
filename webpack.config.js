const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: `${__dirname}/index.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './build',
    hot: true,
  },
  module: {
    rules: [{
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
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'TodoApp',
      filename: 'index.html',
      template: 'index.template.html',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
