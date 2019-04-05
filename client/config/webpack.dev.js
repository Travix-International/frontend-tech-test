const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const cssModuleLoaderDev = {
    loader: require.resolve('typings-for-css-modules-loader'),
    options: {
        modules: true,
        namedExport: true,
        camelCase: true,
    }
};

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /.scss$/,
                use: [
                    'style-loader', // inject styles into DOM
                    cssModuleLoaderDev, // generate typings for css modules, convert css to js
                    'sass-loader',  // convert sass to css
                ]
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: 'public/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        publicPath: common.output.publicPath,
        hot: true,
    },
});