function loadTasks(path) {
  const { tasks } = require(path);

  return tasks.reduce((acc, task) => {
    task.done = task.done || false;
    acc[task.id] = task;
    return acc;
  }, {});
}

module.exports = loadTasks;
