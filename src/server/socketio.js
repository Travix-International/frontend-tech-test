import logger from '../logger';
import { io as socketio } from './';

function setup(io) {
  io.on('connection', (socket) => {
    logger.debug('connected', socket);
  });
}

setup(socketio);

export default socketio;
