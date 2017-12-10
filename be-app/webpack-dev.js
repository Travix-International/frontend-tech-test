const webpack = require('webpack');
const path = require('path');
const StartServerPlugin = require('start-server-webpack-plugin');

module.exports = {
  entry: [
    './src/index',
    'webpack/hot/poll?1000'
  ],
  watch: true,
  devtool: 'sourcemap',
  target: 'node',
  node: {
    __filename: true,
    __dirname: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ]
  },
  plugins: [
    new StartServerPlugin('server.js'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': { BUILD_TARGET: JSON.stringify('server') }
    }),
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false
    })
  ],
  output: { path: path.join(__dirname, 'dist'), filename: 'server.js' },
};
