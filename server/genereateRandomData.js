
const jsonfile = require('jsonfile');

let i;
const newtasks = [];
for (i = 0; i < 50000; i++) {
  newtasks.push({ id: Math.floor(Math.random() * 99999999999), title: `Test Task No: ${i + 1}`, description: `Description No: ${i + 1}` });
}

jsonfile.writeFile('./server/tasks.json', { tasks: newtasks }, (err) => {
  err ? console.log(err) : console.log('done');
});
