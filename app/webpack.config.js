import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  entry: {
    app: './src/app.js',
    'react.bundle': [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-dom',
      'react-router-redux',
      'redux',
      'redux-thunk',
    ]
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        },
      },
      {
        test: /\.scss|\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }]
        })
      },
      {
        test: /\.svg|.png|.gif|.jpg$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'react.bundle',
      filename: 'react.bundle.js'
    }),
    new HtmlWebpackPlugin({
      template: 'template.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin({
      filename: '[name]-[hash].min.css',
      allChunks: true
    }),
    // These plugins below could be run just in production, for optmization.
    // I did it here because I'd like to show how the files could be small.
    // new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     unused: true,
    //     dead_code: true,
    //     warnings: false
    //   }
    // }),
    // new webpack.optimize.AggressiveMergingPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production')
    //   }
    // })
  ],
};
