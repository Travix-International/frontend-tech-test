module.exports = {
  entry: {
    vendor: __dirname + '/vendor.js'
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/../public/js',
    filename: '[name].js'
  }
};
