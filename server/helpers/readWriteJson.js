const tasksJsonPath = './server/tasks.json';
const jsonfile = require('jsonfile');

const getTasks = () => new Promise(((resolve, reject) => {
  jsonfile.readFile(tasksJsonPath, (err , file) => {
    err ? reject(err) : resolve(file);
  });
}));

const addTask = (task, tasks) => new Promise(((resolve, reject) => {
  task.id = Math.floor(Math.random() * 99999999999);
  tasks.tasks.push(task);
  jsonfile.writeFile(tasksJsonPath, tasks, (err) => {
    err ? reject(err) : resolve(task);
  });
}));

const deleteTask = (task, tasks) => new Promise(((resolve, reject) => {
  tasks.tasks = tasks.tasks.filter(taskItem => taskItem.id !== task.id);
  jsonfile.writeFile(tasksJsonPath, tasks, (err) => {
    err ? reject(err) : resolve(task);
  });
}));

const editTask = (task, tasks) => new Promise(((resolve, reject) => {
  tasks.tasks = tasks.tasks.map((taskItem) => {
    if (taskItem.id === task.id) taskItem = task;
    return taskItem;
  });
  jsonfile.writeFile(tasksJsonPath, tasks, (err) => {
    err ? reject(err) : resolve(task);
  });
}));

module.exports = {
  getTasks,
  addTask,
  deleteTask,
  editTask,
};
