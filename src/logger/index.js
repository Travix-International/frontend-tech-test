import { Logger } from 'travix-logger';
import logLevelTransport from './logLevelTransport';
import trackingTransport from './trackingTransport';

const transports = [
  // support same options as configureConsoleTransport
  trackingTransport(),
];

// don't log to console if NODE_ENV is production and platform is browser
if (process.env.NODE_ENV !== 'production' || process.env.PLATFORM !== 'browser') {
  // support same options as configureConsoleTransport
  transports.push(logLevelTransport());
}

const logger = new Logger({
  transports,
});

export default logger;
