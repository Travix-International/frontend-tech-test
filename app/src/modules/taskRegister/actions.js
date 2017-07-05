import 'core-js/fn/promise';
import 'whatwg-fetch';
import {
  TASK_SAVE
} from './../../constants';
import { notificationAction } from './../notification/actions';
import { requestTask } from './../main/actions';
import { config } from './../../config';
import { history } from './../../store';

const taskSaveAction = (_id, title, description, date, completed) => ({
  type: TASK_SAVE,
  _id,
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
      const success = (json._id != null);
      const message = (json._id != null ? 'Task saved!' : 'Occurred a problem, try again!');
      dispatch(notificationAction(true, success, message));
      dispatch(taskSaveAction(json._id, title, description, date, completed));
      history.push('/');
      setTimeout(() => {
        dispatch(notificationAction(false, false, null));
      }, 5000);
    });
};

export default taskSave;
