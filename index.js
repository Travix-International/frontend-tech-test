const Express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = require('./server/server');
const { port } = require('./server/config');

const webpackConfig = require('./webpack.config');
const isDeveloping = process.env.NODE_ENV !== 'production';

if (isDeveloping) {
  const compiler = webpack(webpackConfig({ env: { prod: false} }));
  const middleware = webpackDevMiddleware(compiler, { noInfo: true, publicPath: '/' });
  app.use(Express.static(path.resolve(__dirname, 'build/js')));
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  app.get('*', (req, res) => {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'index.html')));
    res.end();
  });
} else {
  app.use(Express.static(path.resolve(__dirname, 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
 });
}
app.listen(port, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});
