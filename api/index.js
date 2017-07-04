import express from 'express';
import ejs from 'ejs';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './src/routes/start';

const app = express();

const port = process.env.PORT || 4000;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());
app.set('trust_proxy', 1);

app.set('views', path.join(__dirname, '/src/view'));
app.set('view engine', 'ejs');

app.use('/', routes);

app.listen(port);

export default app;