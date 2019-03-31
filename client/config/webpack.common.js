const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'imgs',
                    },
                },
            },
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    },
                }],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
        ]
    },
    resolve: {
        // allow importing modules without explicitly mentioning the extension
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: path.join(__dirname, './../', 'tsconfig.json')
            })
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',   // server-relative
        filename: '[name].bundle.js',
    },
    // When the importing path matches one of these,
    // just assume there is these global variables and use those.
    // Allows browsers to cache these libraries.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // }
};