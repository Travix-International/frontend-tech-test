const app = require('express')();
const http = require('http').Server(app);
const express = require('express');
const io = require('socket.io')(http);

require('./socket/index')(io);

app.use(express.static('build'));
http.listen(3000, () => { console.log('listening on *:3000'); });
