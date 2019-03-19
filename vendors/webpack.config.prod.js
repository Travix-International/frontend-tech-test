const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    vendor: path.resolve(__dirname, 'vendor.js')
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
      },
    })
  ],
  output: {
    path: path.resolve(__dirname, '../build/js'),
    filename: '[name].js'
  }
};
