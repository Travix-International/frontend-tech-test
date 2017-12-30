import express from 'express';
import logger from '../logger';

const app = express();

const http = require('http').createServer(app);
export const io = require('socket.io')(http); // eslint-disable-line
const tasksMiddleware = require('./tasks').default;

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

const port = process.env.PORT || 9001;
http.listen(port, () => {
  logger.debug('the server is available on http://localhost:9001/');

  // tracking sample
  logger.info('LOG_WITH_TRACK_SAMPLE', '', {
    isTrack: true,
  });
});

export default app;
