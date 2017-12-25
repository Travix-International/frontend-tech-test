import logger from './log';
import tasksMiddleware from './tasks';

const app = require('express')();

app.use(tasksMiddleware);

app.listen(9001, () => {
  logger.debug('the server is available on http://localhost:9001/');
});

export default app;
