import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import webpackHotReloader from './webpack.hotreloader';

const app = express();
const port = (process.env.PORT || 3000);

webpackHotReloader(app);

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
