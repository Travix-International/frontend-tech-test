/**
 * define the most common webpack configs
 * shared between browser/server
 *
 */
import path from 'path';

function baseConfig(platform) {
  if (!platform) {
    platform = 'browser';
  }

  return {
    context: path.resolve(__dirname),

    plugins: [],

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: 'babel-loader',
            },
            {
              loader: 'eslint-loader',
            },
          ],
        },
      ],
    },
  };
};

export default baseConfig;
