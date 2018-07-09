const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: '/node_modules/',
				use:[
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /\.html$/,
				exclude: '/node_modules/',
				use:[
					{
						loader: 'html-loader',
						options: { minimize: true }
					}
				]
			},
			{
				test: /\.scss$/,
				exclude: '/node_modules/',
				use:[
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
      		template: "./src/index.html",
      		filename: "./index.html"
		})
	]
}