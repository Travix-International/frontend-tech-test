const byCompletion = (firstTask, secondTask) => {
  if (firstTask.isComplete && !secondTask.isComplete) {
    return 1;
  } else if (!firstTask.isComplete && secondTask.isComplete) {
    return -1;
  }
  return 0;
};

export const sortTasks = (tasks) => {
  const sortedTasks = [...tasks];
  sortedTasks.sort(byCompletion);
  return sortedTasks;
};

export const getVisibleTasks = tasks => tasks.filter(task => !task.isComplete);
