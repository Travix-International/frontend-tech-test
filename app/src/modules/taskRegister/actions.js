import 'core-js/fn/promise';
import 'whatwg-fetch';
import {
  TASK_REQUEST,
  TASK_SAVE,
  NOTIFICATION
 } from './../../constants';
import { config } from './../../config';

const requestTask = () => ({
  type: TASK_REQUEST
});

const notificationAction = (show, success, message) => ({
  type: NOTIFICATION,
  show,
  success,
  message
});

const taskSaveAction = (id, title, description, date, completed) => ({
  type: TASK_SAVE,
  id,
  title,
  description,
  date,
  completed
});


export const taskSave = (id, title, description, date, completed) => (dispatch) => {
  dispatch(requestTask());

  const body = {
    title,
    description,
    date,
    completed
  };
  const options = {
    method: (id && id !== '0' ? 'PUT' : 'POST'),
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  };
  const url = (id && id !== '0' ? `${config.api}task/${id}` : `${config.api}task`);

  fetch(url, options)
    .then(res => res.json())
    .then((json) => {
      dispatch(notificationAction(true, json.success, json.message));
      dispatch(taskSaveAction(json._id, title, description, date, completed));
      setTimeout(() => {
        dispatch(notificationAction(false, false, null));
      }, 5000);
    });
};

export default taskSave;
