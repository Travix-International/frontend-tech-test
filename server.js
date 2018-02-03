'use strict';
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const task = require('./routes/task');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/task', task);

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});

module.exports = app;
