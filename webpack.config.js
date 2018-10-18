var webpack = require('webpack'),
    path = require('path');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, args) => {
    let isDev = args.mode === 'development';
    return {
        entry: './public/src/index.js',
        output: {
            path: __dirname + '/public/dist',
            publicPath: '/',
            filename: 'todo.bundle.js'
        },

        devtool: isDev ? "#source-map" : "",
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx'],
            modules: ["node_modules", "./"]
        },
        optimization: {
            minimizer: [new UglifyJsPlugin({
                uglifyOptions: {
                    ie8: false,
                    ecma: 6,
                    mangle: isDev,
                    output: {
                        comments: false,
                        beautify: isDev
                    },
                    compress: true,
                    warnings: false
                }
            })]
        },
        plugins: [
            new webpack.optimize.AggressiveMergingPlugin({
                minSizeReduce: 1.5,
                moveToParents: true
            })
        ],
        performance: {
            hints: false
        }
    }
};