import dotenv from 'dotenv';

import express from './server/config/express';
import mongoose from './server/config/mongoose';
import sockets from './server/config/sockets';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({
    path: process.env.NODE_ENV === 'test' ? 'test.env' : 'dev.env'
  });
}

/* Connect to DB */
mongoose();

/* Initialize server */
const app = express();

const httpServer = app.listen(process.env.PORT, () => {
  process.stdout.write(`App listening on port ${process.env.PORT}`);
});

/* Setup Sockets */
sockets(httpServer);

module.exports = app;
