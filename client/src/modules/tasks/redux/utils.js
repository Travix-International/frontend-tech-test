export default (tasks) => {
  const normalizedTasks = {};

  tasks.forEach((task) => {
    normalizedTasks[task.id] = task;
  });

  return normalizedTasks;
};
