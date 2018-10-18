'use strict';
const express = require('express');
const path = require('path');
const app = express();
const wsServer = require('./core/src/websocketServer');
const html_dir = __dirname + "/public/views"

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  return res.sendFile(html_dir + "/index.html");
});

const server = app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
  wsServer.createWebSocketServer(server);
});

