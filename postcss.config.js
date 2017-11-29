module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      browsers: [ 'last 2 major versions', '> 5%', 'ie 11' ],
    },
  },
}
