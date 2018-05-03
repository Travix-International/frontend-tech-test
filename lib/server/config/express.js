import path from 'path';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import compress from 'compression';

import serverRender from '../../renderers/server';
import router from '../app/routes/router';

export default () => {
  const app = express();

  /* config middleware */
  app.set('view engine', 'ejs');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(path.join(process.env.PWD, '/public')));

  if (process.env.NODE_ENV === 'production') {
    app.use(compress());
    app.use(logger('tiny'));
  } else {
    app.use(logger('dev'));
  }

  /* configure non-view routes */
  router(app);

  /* use server side rendering for all routes other than the ones defined above */
  app.get('*', async (req, res) => {
    const initialContent = await serverRender();
    res.render('index', initialContent);
  });

  return app;
};
