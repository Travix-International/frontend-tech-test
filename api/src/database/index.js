import mongoose from 'mongoose';
const { connection } = mongoose;

mongoose.Promise = Promise;
mongoose.connect('mongodb://root:root@ds151941.mlab.com:51941/gustavoisensee-db', {
  useMongoClient: true,
});

connection.on('error', (err) => console.log('connection error: ', err));
connection.once('open', () => console.log('connected'));

export const db = connection;