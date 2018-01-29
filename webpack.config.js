const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: `${__dirname}/index.js`,
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
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
  ],
};
