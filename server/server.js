const Express = require('express');
const tasks = require('./routes');
const { pathToApi } = require('./config');
const app = new Express();

app.use(pathToApi, tasks);

module.exports = app;
