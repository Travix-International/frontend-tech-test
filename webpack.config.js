const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  env = env || {};
  const specifyProp = (add, value) => {
    return add ? value : undefined;
  };
  const ifProd = value => specifyProp(env.prod, value);
  const ifDev = value => specifyProp(!env.prod, value);
  const removeEmpty = (obj) => {
    if (Array.isArray(obj)) {
      return obj.filter(item => !!item);
    }
    for (const name in obj) {
      if (obj[name] === null || obj[name] === undefined) {
        delete obj[name];
      }
    }
    return obj;
  };
  return {
    entry: {
      app: removeEmpty([
        ifDev('webpack-hot-middleware/client?reload=true'),
        path.resolve(__dirname, 'client/index.js'),
      ])
    },
    output: {
      path: path.resolve(__dirname, env.prod ? './build/' : './'),
      filename: env.prod ? 'bundle.[name].[chunkhash].js' : '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          loader: 'babel-loader',
          query: {
            presets: [
              'travix'
            ]
          }
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.scss$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "sass-loader" // compiles Sass to CSS
          }]
        }
      ]
    },
    plugins: removeEmpty([
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'client/layouts/index.ejs'),
        filename: path.resolve(__dirname, env.prod ? 'build/index.html' : 'index.html'),
        NODE_ENV: env.prod ? 'production' : 'development',
        title: 'Todo app',
        vendor: env.prod ? './js/vendor.js' : './vendor.js',
        chunksSortMode({ names }) {
          return names[0] === 'core' ? -1 : 1;
        }
      }),
      ifDev(new webpack.HotModuleReplacementPlugin()),
      ifDev(new webpack.NoEmitOnErrorsPlugin()),
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(env.prod ? 'production' : 'development') }),
    ]),
    externals: {
      'lodash': '_',
      'frint': 'Frint',
      'frint-model': 'FrintModel',
      'frint-react': 'FrintReact',
      'frint-store': 'FrintStore',
      'react': 'React',
      'react-dom': 'ReactDOM',
      'rxjs': 'Rx',
      'isomorphic-fetch': 'fetch',
      'normalizr': 'normalizr'
    }
  };
}
