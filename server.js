const express = require ('express');
const bodyParser = require ('body-parser');
const morgan = require ('morgan');

const port = process.env.PORT || 9001;
const taskRouter = require ('./routes/tasks');
const labels = require ('./constants/labels');

const app = express ();

if (process.env.NODE_ENV = 'development') {
  app.use (morgan ('combined'));
}
app.use (bodyParser.json ());
app.use (bodyParser.urlencoded ({ extended: true }));

if(!module.parent){
  app.listen(port);
}

app.use (taskRouter);

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
