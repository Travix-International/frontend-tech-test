// import { createTask } from '../../../utils/utils';
import * as api from '../../../api/api';
import { showSuccessMessage, showErrorMessage } from '../messages/actions';


export const ADD_TASK = 'ADD_TASK';
export const GET_TASK = 'GET_TASK';
export const SAVE_TASKS_LIST = 'SAVE_TASKS_LIST';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const KEEP_EDIT_MODE = 'KEEP_EDIT_MODE';
export const REMOVE_LAST_TASK = 'REMOVE_LAST_TASK';

export const FETCH_TASK_PENDING = 'FETCH_TASK_PENDING';

export const addTask = (task = {title: '', description: ''}) => ({ type: ADD_TASK, task });

export const keepEditMode = isEditInProcess => ({ type: KEEP_EDIT_MODE, isEditInProcess });
export const removeLastTask = () => ({ type: REMOVE_LAST_TASK });

export const saveTaskList  = (tasks, totalTasks) => ({ type: SAVE_TASKS_LIST, tasks, totalTasks });

export const deleteTask = (id) => ({ type: DELETE_TASK, id });

export const fetchTaskPending = loading => ({ type: FETCH_TASK_PENDING, loading });

export const editTask = task => ({ type: UPDATE_TASK, task });

export const retrieveTasksList = (page, modifier) => {
  const itemsPerLoad = 5;
  const basicOffset = page * itemsPerLoad;
  const offset = basicOffset <= modifier
    ? 0
    : page * itemsPerLoad - modifier;
  const limit = offset + itemsPerLoad;

  const url = encodeURI(`/tasks?offset=${offset}&limit=${limit}`);
  return (dispatch) => {
    dispatch(fetchTaskPending(true));
    api.getRequest(url)
    .then(response => response.json())
    .then(data => {
      dispatch(showSuccessMessage('Tasks were successfuly retrieved!'));
      dispatch(saveTaskList(data.tasks, data.totalTaskQuantity));
      dispatch(fetchTaskPending(false));
    })
    .catch(error => {
        dispatch(showErrorMessage('Sorry we cound not retrieve tasks from server :(. Please try again later.'));
        dispatch(fetchTaskPending(false));
    });
  }
};

export const editExistingTask = (task) => {
  const { title, description, id } = task;

  const url = encodeURI(`/task/update/${id}/${title}/${description}`);

  return (dispatch) => {
    dispatch(fetchTaskPending(true));
    api.putRequest(url)
    .then((response) => {
      dispatch(showSuccessMessage('Task was successfuly updated!'));

      dispatch(editTask(task));
      dispatch(keepEditMode(false));
      dispatch(fetchTaskPending(false));
    })
    .catch(error => {
        dispatch(showErrorMessage('Sorry we cound not update task :(. Please try again later.'));
        dispatch(editTask(task));
        dispatch(keepEditMode(false));
        dispatch(fetchTaskPending(false));
    });
  }
}


export const saveTask = (task, showCreatedTask) => {
  const { title, description } = task;

  return (dispatch) => {
    if (showCreatedTask) {
      dispatch(addTask(task));
    }
    dispatch(fetchTaskPending(true));
    api.postRequest('/task/create', { title, description })
    .then(response => response.json())
    .then(data => {
      dispatch(showSuccessMessage('Task was successfuly created!'));
      if (showCreatedTask) {
        const updatedTask = {
          ...task,
          id: data.id
        };
        dispatch(editTask(updatedTask));
      }
      dispatch(keepEditMode(false));
      dispatch(fetchTaskPending(false));
    })
    .catch(error => {
        if (showCreatedTask) {
          dispatch(removeLastTask());
        }
        dispatch(showErrorMessage('Sorry we cound not save task :(. Please try again later.'));
        dispatch(keepEditMode(false));
        dispatch(fetchTaskPending(false));
    });
  }
};

export const removeTask = (id) => {
  return (dispatch) => {
    const url = `/task/delete/${id}`;
    dispatch(fetchTaskPending(true));
    api.deleteRequest(url)
    .then(response => {
      dispatch(deleteTask(id));
      dispatch(showSuccessMessage('Task was successfuly deleted!'));
      dispatch(fetchTaskPending(false));
    })
    .catch(error => {
        dispatch(showErrorMessage('Sorry we cound not delete task :(. Please try again later.'));
        dispatch(fetchTaskPending(false));
    });
  }
};
