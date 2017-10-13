const path = require('path');

module.exports = {
  entry: [
    './app/app',
  ],
  output: {
    publicPath: '/',
    filename: 'main.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
    ]
  }
}
