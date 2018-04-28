const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: './index',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    devServer: {
        historyApiFallback: true,
    },

    mode: 'none',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        sourceMap: true,
                        module: true,
                        camelCase: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true,
                    }
                }]
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test',
            hash: true,
            template: 'index.html',
        }),
    ],

    watch: true,
};