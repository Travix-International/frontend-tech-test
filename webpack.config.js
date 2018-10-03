/* eslint no-use-before-define: 0 */  // --> OFF
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//not required in production build as its by default in webpack 4 for production mode
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var path = require("path");

module.exports = {
  entry: {
    main: [
      './src/index.jsx',
      './src/assets/css/style.scss'
    ],
    vendor: [
      'react',
      'react-dom',
    ],
  },
  output: {
    filename: "[name]-[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name]-[hash].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      chunksSortMode: packageSort(['vendor', 'main']),
      template: __dirname + "/index.html",
    }),
    //Automatically load modules instead of having to import or require them everywhere
    // new webpack.ProvidePlugin({
    //     react: 'react',
    // })
  ],
  mode: "development",
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  devServer: {
    port: 9000,
    compress: true,
    allowedHosts: [
      'localhost',
    ],
    hot: true
  },
  resolve: {
    // Add '.ts' / '.jsx' and '.tsx' as resolvable extensions.
    extensions: [".js", ".jsx", ".json"]
  },
  // optimization: {  // does not required with webpack 4
  //     minimizer: [
  //         // we specify a custom UglifyJsPlugin here to get source maps in production
  //         new UglifyJsPlugin({
  //             cache: true,
  //             parallel: true,
  //             uglifyOptions: {
  //                 compress: false,
  //                 ecma: 6,
  //                 mangle: true
  //             },
  //             sourceMap: true
  //         })
  //     ]
  // },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 16000, // Convert images < 16kb to base64 strings
            name: 'images/[hash]-[name].[ext]'
          }
        }]
      }
    ]
  },
};

function packageSort(packages) {
  return function sort(left, right) {
    var leftIndex = packages.indexOf(left.names[0]);
    var rightIndex = packages.indexOf(right.names[1]);
    if (leftIndex > rightIndex) {
      return 1;
    }
    return -1;
  }
}