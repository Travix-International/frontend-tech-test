import { createTransport } from 'travix-logger';

export default function (options = {}) {
  const name = (typeof options.name !== 'undefined')
    ? options.name
    : 'TrackingTransport';

  return createTransport({
    name,

    log(level, event, message, meta, cb) {
      if (meta.isTrack) {
        // if meta.isTrack is given
        // track to own or 3rd party(e.g amplitude) statistic system
        console.log('tracked to statistic system'); // eslint-disable-line
      }

      return cb(null);
    },
  });
}
