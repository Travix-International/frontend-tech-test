import WebSocket from 'ws';
import emitter from 'central-event';

import { fetchTasks } from '../utils/tasks';

const sockets = (server) => {
  const wss = new WebSocket.Server({ server });

  /* eslint-disable no-console */
  wss.on('connection', (ws) => {
    console.log('WS: Client connected');
    ws.on('close', () => console.log('WS: Client disconnected'));
  });

  emitter.on('tasks/updated', async () => {
    console.log('WS: Pushing updates to all clients');
    const tasks = await fetchTasks();
    wss.clients.forEach((client) => {
      client.send(JSON.stringify(tasks));
    });
  });
  /* eslint-enable no-console */
};

export default sockets;
