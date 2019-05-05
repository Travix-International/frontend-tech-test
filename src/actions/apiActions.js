import * as syncActions from './taskActions';
import {
  getTasks,
  addTask,
  updateTask,
  toggleTask,
  deleteTask
} from '../utils/api';

export const fetchAllTasks = () => async (dispatch) => {
  dispatch(syncActions.fetchAllTasksRequest);
  try {
    const res = await getTasks();
    if (res.status === 200) {
      dispatch(syncActions.fetchAllTasksSuccess(res.data.tasks));
    }
  } catch (e) {
    //TODO: handle error
    dispatch(syncActions.fetchAllTasksFail(e));
  }
};

export const addTaskAction = (title, description) => async (dispatch) => {
  dispatch(syncActions.addTaskRequest);
  try { 
    const res = await addTask(title, description);
    if (res.status === 201) {
      dispatch(syncActions.addTaskSuccess(res.data.task));
    }
  } catch (e) {
    dispatch(syncActions.addTaskFail(e));
  }
};

export const editTaskAction = (id, title, description) => async (dispatch) => {
  dispatch(syncActions.editTaskRequest);
  try { 
    const res = await updateTask(id, title, description);
    if (res.status === 204) {
      dispatch(syncActions.editTaskSuccess({
        id,
        title,
        description
      }));
    }
  } catch (e) {
    dispatch(syncActions.editTaskFail(e));
  }
};

export const toggleTaskAction = id => async (dispatch) => {
  dispatch(syncActions.toggleTaskRequest);
  try {
    const res = await toggleTask(id);
    if (res.status === 204) {
      dispatch(syncActions.toggleTaskSuccess(id));
    }
  } catch (e) {
    dispatch(syncActions.toggleTaskFail(e));
  }
};

export const deleteTaskAction = id => async (dispatch) => {
  dispatch(syncActions.deleteTaskRequest);
  try { 
    const res = await deleteTask(id);
    if (res.status === 200) {
      dispatch(syncActions.deleteTaskSuccess(id));
    }
  } catch (e) {
    dispatch(syncActions.deleteTaskFail(e));
  }
};

