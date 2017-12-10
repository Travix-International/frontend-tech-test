import apiService from '../../../api/apiService';
import {
  ADD_TASKS_FAILED,
  ADD_TASKS_SUCESSS,
  ADD_TASKS_REQUEST,
} from './AddTasksActionTypes';

const addTasksSuccess = () => ({ type: ADD_TASKS_SUCESSS });

const addTasksFailed = () => ({ type: ADD_TASKS_FAILED });

const addTasksRequest = () => ({ type: ADD_TASKS_REQUEST });

const addTasks = () => (
  (dispatch) => {
    dispatch(addTasksRequest());
    return apiService.post('task')
      .then(() => dispatch(addTasksSuccess()))
      .catch(() => dispatch(addTasksFailed()));
  }
);

export {
  addTasksSuccess,
  addTasksFailed,
  addTasksRequest,
  addTasks,
};
