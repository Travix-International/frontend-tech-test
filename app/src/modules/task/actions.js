import 'core-js/fn/promise';
import 'whatwg-fetch';
import {
  TASK_REQUEST,
  TASK_LIST,
  TASK_DELETE,
  NOTIFICATION
 } from './../../constants';
import { config } from './../../config';

const requestTask = () => ({
  type: TASK_REQUEST
});

const taskListAction = tasks => ({
  type: TASK_LIST,
  tasks,
});

const taskDeleteAction = id => ({
  type: TASK_DELETE,
  id
});

const notificationAction = (show, success, message) => ({
  type: NOTIFICATION,
  show,
  success,
  message
});

export const taskList = () => (dispatch) => {
  dispatch(requestTask());

  const options = {
    method: 'GET'
  };
  const url = `${config.api}task`;

  fetch(url, options)
    .then(res => res.json())
    .then((json) => {
      dispatch(taskListAction(json));
    }).catch(() => {
      dispatch(taskListAction(null));
    });
};

export const taskDelete = (id) => (dispatch) => {
  dispatch(requestTask());

  const url = `${config.api}task/${id}`;
  const options = {
    method: 'DELETE'
  };

  fetch(url, options)
    .then(res => res.json())
    .then((json) => {
      dispatch(notificationAction(true, json.success, json.message));
      dispatch(taskDeleteAction(id));
      setTimeout(() => {
        dispatch(notificationAction(false, false, null));
      }, 5000);
    });
};
