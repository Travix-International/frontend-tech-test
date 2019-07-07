function loadTasks(path) {
  const { tasks } = require(path);

  return tasks.reduce((acc, task) => {
    acc[task.id] = task;
    return acc;
  }, {});
}

module.exports = loadTasks;
