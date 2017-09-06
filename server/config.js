module.exports = {
  jsonFile: process.env.NODE_ENV === 'test' ? './tasks.test.json' : './tasks.json',
  port: process.env.PORT || 9001,
  pathToApi: '/api',
  pagination: {
    page_size: 10,
  }
};
