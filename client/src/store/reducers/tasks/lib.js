export const mapTasksByID = tasks => {
  return tasks.reduce((acc, task) => {
    task.done = task.done || false;

    acc[task.id] = task;
    return acc;
  }, {});
};

export const fulfillList = (state, { payload }) => {
  return state.set("tasks", mapTasksByID(payload));
};

export const changeTask = (state, { payload }) => {
  return state.setIn(["tasks", payload.id], payload);
};

export const removeTask = (state, { payload }) => {
  return state.update("tasks", tasks => tasks.without(payload.id));
};

export const createTask = (state, { payload }) => {
  return state.update("tasks", tasks => tasks.set(payload.id, payload));
};

export const changeFilter = (state, { payload }) => {
  return state.set("filter", payload);
};

export default {
  fulfillList,
  changeTask,
  removeTask,
  createTask,
  changeFilter,
};
