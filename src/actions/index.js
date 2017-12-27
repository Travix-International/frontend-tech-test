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

export default {
  fetchTasks,
  postTask,
};
