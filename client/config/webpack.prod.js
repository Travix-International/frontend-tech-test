const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');


const cssModuleLoaderProd = {
    loader: require.resolve('typings-for-css-modules-loader'),
    options: {
        modules: true,
        namedExport: true,
        camelCase: true,
        minimize: true,
        sourceMap: process.env.GENERATE_SOURCEMAP !== 'false',
    }
};

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',  // enable source maps for debugging 
    output: {
        filename: '[name].[contentHash].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '',
    },
    plugins: [
        new CleanWebpackPlugin(),   // clean unused bundle files,
        new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' }),
    ],
    module: {
        rules: [
            {
                test: /.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // extract css to a file and inject into html
                    cssModuleLoaderProd,  // generate typings for css modules, convert css to js
                    'sass-loader',  // convert sass to css
                ]
            }
        ]

    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(), // minify css
            new TerserPlugin(), // minify js
            new HTMLWebpackPlugin({
                template: 'public/index.html',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                },
            }),
        ],
    },
});