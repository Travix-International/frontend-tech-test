/**
 * Convert tasks array to tasks object where key is the task id
 */

export const normalizeTasks = tasks => {
  if (!Array.isArray(tasks)) return {};
  return tasks.reduce((res, item) => {
    res[item.id] = item;
    return res;
  }, {});
};