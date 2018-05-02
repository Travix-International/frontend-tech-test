import dotenv from 'dotenv';

import express from 'server/config/express';
import mongoose from 'server/config/mongoose';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
  });
}

mongoose();
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
