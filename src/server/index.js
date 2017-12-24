'use strict';

import tasksMiddleware from './tasks';

const app = require('express')();

app.use(tasksMiddleware);

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});

module.exports = app;
