import apiService from '../../../api/apiService';
import * as listActions from '../ListTasks/ListTasksActions';
import {
  ADD_TASKS_FAILED,
  ADD_TASKS_SUCESSS,
  ADD_TASKS_REQUEST,
} from './AddTasksActionTypes';

const addTasksSuccess = () => ({ type: ADD_TASKS_SUCESSS });

const addTasksFailed = () => ({ type: ADD_TASKS_FAILED });

const addTasksRequest = () => ({ type: ADD_TASKS_REQUEST });

const addTasks = payload => (
  (dispatch) => {
    dispatch(addTasksRequest());
    return apiService.post('task', payload)
      .then(() => {
        dispatch(addTasksSuccess());
        dispatch(listActions.listTasks());
      })
      .catch(() => dispatch(addTasksFailed()));
  }
);

export {
  addTasksSuccess,
  addTasksFailed,
  addTasksRequest,
  addTasks,
};
