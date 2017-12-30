/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import webpack from 'webpack';
import path from 'path';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import baseConfig from './webpack.base';

// env can be e.g 'prod', 'dev', 'hot'
export default function (env) {
  const config = baseConfig('browser', env);

  config.name = 'browser';

  const entry = {
    main: path.resolve(__dirname, 'src/entries/main'),
  };

  config.output = {
    path: path.join(__dirname, '/dist/assets'),
    publicPath: env === 'hot' ? '/' : '/assets/',
    // set fixed filename for hot reload
    filename: env === 'hot' ? '[name].js' : '[name].[chunkhash].js',
  };

  config.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: env === 'hot' ? '[name].js' : '[name].[chunkhash].js',
      minChunks: (module, count) => {
        // This prevents stylesheet resources with the .css or .scss extension
        // from being moved from their original chunk to the vendor chunk
        if (module.resource && (/^.*\.(css|scss)$/).test(module.resource)) {
          return false;
        }
        // check if module used enough time
        // if there are more than 1 entries it has to be used by more than one time
        const enoughCount = Object.keys(config.entry).length === 1 ? true : count > 1;
        // only put module from node_modules
        return module.context && module.context.indexOf('node_modules') !== -1 && enoughCount;
      },
    }),
    // seperate manifest is a must
    // or every time vendor chunk hash would change
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),
    new webpack.DefinePlugin({
      'process.env.PLATFORM': '"browser"',
    }),
  );

  // modify config for hot env
  if (env === 'hot') {
    const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
    // push hotreload to entry
    const devEntry = {};
    Object.keys(entry).forEach((key) => {
      devEntry[key] = [];
      devEntry[key].push('react-hot-loader/patch', entry[key], hotMiddlewareScript);
    });
    config.entry = devEntry;

    config.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
    );
  } else {
    config.entry = entry;
  }

  if (env === 'prod') {
    config.plugins.push(
      new UglifyJsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"',
      }),
    );
  } else {
    // enable source map
    config.devtool = 'cheap-module-eval-source-map';
  }

  return config;
}
