const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ['style-loader','css-loader','postcss-loader', 'sass-loader']
      },
    ],
  },
  plugins: [
    new TransferWebpackPlugin(
      [{ from: 'static' }],
      path.resolve(__dirname, 'src')
    ),
  ],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
