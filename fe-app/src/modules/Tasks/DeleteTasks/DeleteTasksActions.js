import apiService from '../../../api/apiService';
import * as listActions from '../ListTasks/ListTasksActions';
import DELETE_TASK_FAILED from './DeleteTasksActionTypes';

const deleteTaskFailed = () => ({ type: DELETE_TASK_FAILED });

const deleteTask = id => (
  (dispatch) => {
    return apiService.destroy(`task/${id}`)
      .then(() => dispatch(listActions.listTasks()))
      .catch(() => dispatch(deleteTaskFailed()));
  }
);

export {
  deleteTaskFailed,
  deleteTask,
};
