var webpack = require('webpack');
var path = require('path');

module.exports = {

	entry: {
        lib: ['./app/index.js'],
    },

    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'travix-app.js',
        publicPath: 'http://localhost:8080/built/'
    },

    devServer: {
      contentBase: './',
      host: '0.0.0.0',
      port: 8080,
      allowedHosts: [
        'local.travix.com',
        'localhost',
        '{your_id_address}'
      ]
    },

	module: {
		loaders: [
		    {
			    test: /\.(js|jsx)$/,
				exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                'es2015',
                                'stage-0',
                                "travix"
                            ],
                            plugins: [
                                'transform-runtime',
                            ]
                        }
                    }, {
                        loader: 'eslint-loader',
                    }
                ]
				
			},
            {
                test: /\.css$/,
                include: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
            {
				test: /\.less$/,
                use: [
                    {
                        loader: "style-loader", 
                    },
                    {
                        loader: "css-loader", 
                        options: {
                            modules: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: "less-loader"
                    }
                ]
			}
		]
	}
}

