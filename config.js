require('@babel/polyfill');
require('@babel/register')({
    ignore: [/\/(build|node_modules)\//, "*.scss"],
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        'dynamic-import-node',
    ]
});
module.exports = require('./server.js')