module.exports = {
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  output: {
    filename: 'dist/app.js',
  },
};
