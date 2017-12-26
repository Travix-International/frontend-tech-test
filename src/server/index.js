import express from 'express';
import logger from './log';
import tasksMiddleware from './tasks';

const app = express();

app.use(tasksMiddleware);

if (process.env.NODE_ENV === 'hot') {
  const hot = require('./hot').default; // eslint-disable-line global-require
  hot(app);
} else {
  const renderer = require('./renderer').default; // eslint-disable-line global-require
  const stats = require('../../dist/compilation-stats.json'); // eslint-disable-line global-require
  // Serve static files
  app.use('/assets', express.static('dist/assets'));
  app.use(renderer({ clientStats: stats }));
}

app.listen(9001, () => {
  logger.debug('the server is available on http://localhost:9001/');

  // tracking sample
  logger.info('LOG_WITH_TRACK_SAMPLE', '', {
    isTrack: true,
  });
});

export default app;
