import request from 'superagent';

const fetchTasks = () => {
  return (dispatch) => {
    return request
      .get('http://localhost:9001/tasks')
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
      .post('http://localhost:9001/tasks')
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
      .patch(`http://localhost:9001/tasks/${taskId}`)
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
      .delete(`http://localhost:9001/tasks/${taskId}`)
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

export default {
  fetchTasks,
  postTask,
  patchTask,
  deleteTask,
};
