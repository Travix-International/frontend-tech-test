'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());

app.set('view engine', 'html')

var file_path = path.join(__dirname, './../../public');
var tasksRouter = require('./routes/tasks/index');

app.use(express.static(file_path));
app.use('/tasks', tasksRouter);

app.get('/', function(req, res) {
  res.sendFile(path.resolve(file_path, 'index'))
});

var port = 9001;

app.listen(port, () => {
  process.stdout.write('the server is available on http://localhost:' + port + '/\n');
});
