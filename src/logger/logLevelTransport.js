import { createTransport } from 'travix-logger';

export default function (options = {}) {
  const filter = (typeof options.filter === 'function')
    ? options.filter
    : () => true;

  const name = (typeof options.name !== 'undefined')
    ? options.name
    : 'LogLevelTransport';

  const useConsole = (typeof options.console !== 'undefined')
    ? options.console
    : console; // eslint-disable-line

  return createTransport({
    name,

    log(level, event, message, meta, cb) {
      if (!filter(level, event, message, meta)) {
        // skipping
        return cb(null);
      }

      switch (level) {
        case 'Error':
          useConsole.error(`[${level}]`, event, message, meta);
          break;
        case 'Warning':
          useConsole.warn(`[${level}]`, event, message, meta);
          break;
        default:
          useConsole.log(`[${level}]`, event, message, meta);
      }

      return cb(null);
    },
  });
}
