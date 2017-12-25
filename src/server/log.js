import { Logger } from 'travix-logger';
import logLevelTransport from '../logLevelTransport';
import trackingTransport from '../trackingTransport';

const logger = new Logger({
  transports: [
    // support same options as configureConsoleTransport
    logLevelTransport(),
    trackingTransport(),
  ],
});

export default logger;
