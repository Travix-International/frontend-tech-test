import { Logger } from 'travix-logger';
import logLevelTransport from '../logLevelTransport';

const logger = new Logger({
  transports: [
    // support same options as configureConsoleTransport
    logLevelTransport(),
  ],
});

export default logger;
