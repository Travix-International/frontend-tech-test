const webpack = require("webpack"),
      HtmlWebpackPlugin = require('html-webpack-plugin')
      path = require("path");

const nodeEnv = process.env.NODE_ENV || "development";

let webpackConfig = {
  entry: {
    bundle: path.join(__dirname, "client/src/index.js")
  },
  output: {
    path: path.join(__dirname, "public/bundle"),
    filename: "[name].js"
  },
  devtool: "source-map",
  target: "web",
  resolve: {
    modules: [
      path.join(__dirname, "client/src"),
      //path.join(__dirname, "client/lib"),
      path.join(__dirname, "node_modules")
    ],
    extensions: [".js", ".jsx"],
    alias: {
      lib: path.join(__dirname, "client/lib")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
    //  template: "client/src/index.ejs"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        include: [
          path.join(__dirname, "client/src"),
          path.join(__dirname, "client/lib")
        ],
        query: {
          presets: ["babel-preset-react", "babel-preset-es2015", "babel-preset-stage-0"].map(require.resolve)
        }
      },
      {
        test: /\.json/,
        loader: "json-loader"
      },
      {
        test: /\.(css|pcss)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: (loader) => [

                //this one is for you
                require("precss"),
                require("postcss-cssnext"),
                require("postcss-custom-media"),
                require("lost"),
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: "url-loader?limit=8192"
      }
    ]
  }
};

if (nodeEnv === "production") {
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMaps: true,
      mangle: true,
      screwIe8: true,
      comments: false
    })
  );
}

module.exports = webpackConfig;
