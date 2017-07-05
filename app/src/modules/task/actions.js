import 'core-js/fn/promise';
import 'whatwg-fetch';
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
  const url = `${config.api}task`;

  fetch(url, options)
    .then(res => res.json())
    .then((json) => {
      dispatch(taskListAction(json));
    }).catch(() => {
      dispatch(taskListAction(null));
    });
};

export const taskDelete = id => (dispatch) => {
  dispatch(requestTask());

  const url = `${config.api}task/${id}`;
  const options = {
    method: 'DELETE'
  };

  fetch(url, options)
    .then(res => res.json())
    .then((json) => {
      const success = (json.ok > 0);
      const message = (json.ok > 0 ? 'Task removed!' : 'Occured a problem, try again!');
      dispatch(notificationAction(true, success, message));
      dispatch(taskDeleteAction(id));
      setTimeout(() => {
        dispatch(notificationAction(false, false, null));
      }, 5000);
    });
};
