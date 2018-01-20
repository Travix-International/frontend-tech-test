const app = require('./app');

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});
