const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
    entry: './client/src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(`${__dirname}/dist`),
        filename: 'bundle.js'
    },
    devtool: 'cheap-source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
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
    stats: {
        warnings: false
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
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(false),
            __PROD__: JSON.stringify(true),
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        })
    ],
    resolve: {
        modules: [
            path.resolve(__dirname),
            'node_modules'
        ],
        extensions: ['.js', '.jsx', '.scss'],
        alias: {
            'styled-components$': 'styled-components/lib/index.js',
            'utils': path.resolve('./client/src/utils'),
            'client': path.resolve('./client'),
        }
    },
    externals: {
        'react-addons-test-utils': 'react-dom'
    }
};

module.exports = config;
