
const jsonfile = require('jsonfile');

let i;
const newtasks = [];
for (i = 0; i < 10; i++) {
  newtasks.push({ id: Math.floor(Math.random() * 99999999999), title: i+'-test', description: 'test' });
}

jsonfile.writeFile('./server/tasks.json', {tasks:newtasks}, (err) => {
  err ? console.log(err):console.log('done')

});
