var webpack = require('webpack');
var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {

    node: {
        __dirname: false
    },

    target: 'node',

    externals: [
        nodeExternals({
            modulesDir: '../node_modules'
        }),
        function(context, request, callback) {
            if (/^\.\/Config$/.test(request)){
                return callback(null, 'commonjs ' + request);
            }

            callback();
        }
    ],

    entry: {
        lib: ['./app/index.js'],
    },

    output: {
        path: path.resolve(__dirname, 'build/'),
        filename: 'server.js'
    },

    devServer: {
      contentBase: './',
      host: '0.0.0.0',
      port: 8181,
      allowedHosts: [
        'local.youbim.com',
        'localhost',
        '192.168.0.169'
      ]
    },

    module: {
        loaders: [
            {
                test: /\.js$/,

                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],

                exclude: '/node_modules/*',
            }

        ]
    }
};