const express = require ('express');
const bodyParser = require ('body-parser');
const morgan = require ('morgan');
const path = require ('path');
const cors = require ('cors');

const port = process.env.PORT || 9001;
const taskRouter = require ('./routes/tasks');
const labels = require ('./constants/labels');

const app = express ();

if (process.env.NODE_ENV = 'development') {
  app.use (morgan ('combined'));
}

app.use (cors ());
app.use (bodyParser.json ());
app.use (bodyParser.urlencoded ({ extended: true }));

if(!module.parent){
  app.listen(port);
}

app.use (taskRouter);

app.use(express.static(path.join(__dirname, 'client/build')))
// Anything that doesn't match the above, send back index.html

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + 'client/build/index.html'))
});

app.get ('/', (req, res) => {
  res.status (200).send ({
    'message': labels.CONNECTED
  });
})

app.get ('*', (req, res) => {
  res.status (404).send ({
    'message': labels.NO_EXIST
  });
});

module.exports = app;
