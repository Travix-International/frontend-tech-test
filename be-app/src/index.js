import { createServer } from 'http';
import app from './server';

const server = createServer(app);
let currentApp = app;

server.listen(9001, () => {
  console.log('Server listening on port 9001');
});

if (module.hot) {
  module.hot.accept(['./server'], () => {
    server.removeListener('request', currentApp);
    server.on('request', app);
    currentApp = app;
  });
}

