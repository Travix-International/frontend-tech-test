import apiService from '../../../api/apiService';
import * as listActions from '../ListTasks/ListTasksActions';
import {
  EDIT_TASKS_FAILED,
  EDIT_TASKS_SUCESSS,
  EDIT_TASKS_REQUEST,
  VIEW_TASKS_SUCESSS,
  VIEW_TASKS_FAILED,
} from './EditTasksActionTypes';

const editTasksSuccess = () => ({ type: EDIT_TASKS_SUCESSS });

const editTasksFailed = () => ({ type: EDIT_TASKS_FAILED });

const editTasksRequest = () => ({ type: EDIT_TASKS_REQUEST });

const editTask = (id, payload) => (
  (dispatch) => {
    dispatch(editTasksRequest());
    return apiService.put(`task/${id}`, payload)
      .then(() => {
        dispatch(editTasksSuccess());
        dispatch(listActions.listTasks());
      })
      .catch(() => dispatch(editTasksFailed()));
  }
);

const viewTasksSuccess = ({ data }) => (
  { type: VIEW_TASKS_SUCESSS, task: data }
);

const viewTasksFailed = () => ({ type: VIEW_TASKS_FAILED });

const viewTask = id => (
  dispatch =>
    apiService.get(`task/${id}`)
      .then(response => dispatch(viewTasksSuccess(response)))
      .catch(() => dispatch(viewTasksFailed()))
);

export {
  editTasksSuccess,
  editTasksFailed,
  editTasksRequest,
  editTask,
  viewTasksSuccess,
  viewTasksFailed,
  viewTask,
};
