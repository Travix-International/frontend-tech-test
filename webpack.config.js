const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    entry: './client/src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(`${__dirname}/dist`),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.join(__dirname),
            verbose: true,
            dry: false
        }),
        new HtmlWebpackPlugin({
            template: 'index.hbs',
            title: 'Travix International Test',
            inject: false,
            filename: 'index.html'
        }),
    ],
    resolve: {
        modules: [
            path.resolve(__dirname),
            'node_modules'
        ],
        alias: {
        }
    }
};

module.exports = config;
