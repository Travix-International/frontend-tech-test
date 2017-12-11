import apiService from '../../../api/apiService';
import {
  LIST_TASKS_FAILED,
  LIST_TASKS_SUCESSS,
  LIST_TASKS_LOADING,
  LIST_TASKS_LOADED,
} from './ListTasksActionTypes';

const listTasksSuccess = ({ data }) => (
  { type: LIST_TASKS_SUCESSS, tasks: data }
);

const listTasksFailed = () => ({ type: LIST_TASKS_FAILED });

const listTasksLoading = () => ({ type: LIST_TASKS_LOADING });

const listTasksLoaded = () => ({ type: LIST_TASKS_LOADED });

const listTasks = () => ((dispatch) => {
  dispatch(listTasksLoading());
  return apiService.get('task')
    .then((response) => {
      dispatch(listTasksSuccess(response));
      dispatch(listTasksLoaded());
    })
    .catch(() => {
      dispatch(listTasksFailed());
      dispatch(listTasksLoaded());
    });
});

const showEditMode = (loadedTasks, id) => {
  const tasks = loadedTasks.map((item) => {
    if (item.id === id) {
      item.isEditing = !item.isEditing;
    }

    return item;
  });

  return { type: LIST_TASKS_SUCESSS, tasks };
};

export {
  listTasksSuccess,
  listTasksFailed,
  listTasksLoading,
  listTasksLoaded,
  listTasks,
  showEditMode,
};
