import request from 'superagent';
import uuidv4 from 'uuid/v4';
import logger from '../logger';

function formatError(err) {
  err.id = uuidv4();
  return err;
}

const errorOccurred = (err) => {
  logger.error('ERROR_OCCURRED', formatError(err), { isTrack: true });
  return {
    type: 'ERROR_OCCURRED',
    payload: {
      err,
    },
  };
};

const errorHandled = (errId) => {
  return {
    type: 'ERROR_HANDLED',
    payload: {
      id: errId,
    },
  };
};

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

const postTaskAction = (normalizedTask) => {
  return {
    type: 'POST_TASK',
    payload: normalizedTask,
  };
};

const postTask = (task) => {
  return (dispatch) => {
    return request
      .post('/tasks')
      .send(task)
      .then((res) => {
        return dispatch(postTaskAction(JSON.parse(res.text)));
      })
      .catch((err) => {
        err.fromAction = 'POST_TASK';
        dispatch(errorOccurred(err));
        throw err;
      });
  };
};

const patchTaskAction = (normalizedTask) => {
  return {
    type: 'PATCH_TASK',
    payload: normalizedTask,
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
        return dispatch(patchTaskAction(JSON.parse(res.text)));
      })
      .catch((err) => {
        err.fromAction = 'PATCH_TASK';
        dispatch(errorOccurred(err));
        throw err;
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
      })
      .catch((err) => {
        err.fromAction = 'DELETE_TASK';
        dispatch(errorOccurred(err));
        throw err;
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
  errorOccurred,
  errorHandled,
  fetchTasks,
  postTaskAction,
  postTask,
  patchTaskAction,
  patchTask,
  deleteTask,
  taskSwitchEditMode,
};
