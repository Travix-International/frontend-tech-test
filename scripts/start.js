const Webpack = require("webpack"),
      WebpackDevServer = require("webpack-dev-server"),
      webpackConfig = require("../webpack.config"),
      config = require("../config.json").client;

require("../rest-api/bootstrap");
require("../bff/bootstrap");


const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
  stats: {
    colors: true
  }
});

server.listen(config.port, '127.0.0.1', () => {
  console.log(`Frontend server running on http://localhost:${config.port}`);
});
