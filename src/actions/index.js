import request from 'superagent';

const fetchTasks = () => {
  return (dispatch) => {
    return request
      .get('/tasks')
      .then((res) => {
        return dispatch({
          type: 'FETCH_TASKS',
          payload: JSON.parse(res.text),
        });
      });
  };
};

const postTask = (task) => {
  return (dispatch) => {
    return request
      .post('/tasks')
      .send(task)
      .then((res) => {
        return dispatch({
          type: 'POST_TASK',
          payload: JSON.parse(res.text),
        });
      });
  };
};

const patchTask = (task) => {
  const taskId = task.id;
  delete task.id;
  return (dispatch) => {
    return request
      .patch(`/tasks/${taskId}`)
      .send(task)
      .then((res) => {
        return dispatch({
          type: 'PATCH_TASK',
          payload: JSON.parse(res.text),
        });
      });
  };
};

const deleteTask = (task) => {
  const taskId = task.id;
  return (dispatch) => {
    return request
      .delete(`/tasks/${taskId}`)
      .then(() => {
        return dispatch({
          type: 'DELETE_TASK',
          payload: {
            result: taskId,
          },
        });
      });
  };
};

const taskSwitchEditMode = (id, targetMode) => {
  return {
    type: 'TASK_SWITCH_EDIT_MODE',
    payload: {
      targetMode,
      from: id,
    },
  };
};

export default {
  fetchTasks,
  postTask,
  patchTask,
  deleteTask,
  taskSwitchEditMode,
};
