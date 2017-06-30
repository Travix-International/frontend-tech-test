// Split in two files to make test easier
// Ref: http://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/
const app = require('./app');

app.listen(9001, () => {
  process.stdout.write('the server is available on http://localhost:9001/\n');
});
