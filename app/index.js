const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = (process.env.PORT || 3000);

require('./webpack.hotreloader')(app);

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
