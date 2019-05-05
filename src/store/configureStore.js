if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configStore.prod');
} else {
  module.exports = require('./configureStore.dev')
}