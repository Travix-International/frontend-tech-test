var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/js');
var APP_DIR = path.resolve(__dirname, 'src/client');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  resolve: {
      alias: {
          '~': path.join(__dirname, 'src/client')
      },
      extensions: ['.js', '.jsx']
  },

  module : {
    loaders : [
      {
        test: /\.js?$/,
        include : APP_DIR,
        loader: 'babel-loader',
        query:
        {
            presets:['es2015','react','stage-0'],
            plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
        }
      },
      {
        test: /\.scss$/,
        include: APP_DIR,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};

module.exports = config;