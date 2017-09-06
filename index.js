const app = require('./server/server');
const { port } = require('./server/config');

app.listen(port, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});
