import { Logger, configureConsoleTransport } from 'travix-logger';

const logger = new Logger({
  transports: [
    configureConsoleTransport()
  ]
});

export default logger;