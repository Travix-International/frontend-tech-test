import 'core-js/fn/promise';
import 'isomorphic-fetch';
import {
  TASK_LIST,
  TASK_DELETE
} from './../../constants';
import { notificationAction } from './../notification/actions';
import { requestTask } from './../main/actions';
import { config } from './../../config';

export const taskListAction = tasks => ({
  type: TASK_LIST,
  tasks,
});

export const taskDeleteAction = id => ({
  type: TASK_DELETE,
  id
});

export const taskList = () => (dispatch) => {
  dispatch(requestTask());
  const options = {
    method: 'GET'
  };
  const url = `${config.api}/task`;

  return fetch(url, options)
    .then(res => res.json())
    .then((json) => {
      dispatch(taskListAction(json));
    }).catch(() => {
      dispatch(taskListAction(null));
      dispatch(notificationAction(true, false, 'Occurred a problem to request the API.'));
    });
};

export const taskDelete = id => (dispatch) => {
  dispatch(requestTask());

  const url = `${config.api}/task/${id}`;
  const options = {
    method: 'DELETE'
  };

  return fetch(url, options)
    .then(res => res.json())
    .then((json) => {
      const success = (json.ok > 0);
      const message = (json.ok > 0 ? 'Task removed!' : 'Occurred a problem, try again!');
      dispatch(notificationAction(true, success, message));
      dispatch(taskDeleteAction(id));
      setTimeout(() => {
        dispatch(notificationAction(false, false, null));
      }, 5000);
    }).catch(() => dispatch(notificationAction(true, false, 'Occurred a problem to request the API.')));
};
