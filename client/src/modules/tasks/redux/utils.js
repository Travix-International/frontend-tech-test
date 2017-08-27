export const normalizeTask = task => ({ [task.id]: task });

export const normalizeTasks = (tasks) => {
  const obj = {};

  tasks.forEach((task) => {
    obj[task.id] = task;
  });

  return obj;
};
