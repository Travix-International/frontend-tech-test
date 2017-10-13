import Axios from 'axios';
import _ from 'lodash';
import { createAction, handleActions } from 'redux-actions';

// Acctions
export const GET_ALL_TASKS = createAction('GET_ALL_TASKS');
export const ADD_NEW_TASK = createAction('ADD_NEW_TASK');
export const UPDATE_TASK = createAction('UPDATE_TASK');
export const DELETE_TASK = createAction('DELETE_TASK');
export const ACTIVATE_TASK_EDIT = createAction('ACTIVATE_TASK_EDIT');

const TodoBackend = Axios.create({
  baseURL: `http://localhost:9001/`,
  headers: { 'Content-Type': 'application/json' },
});

export const initialState = {
  tasks: [],
  taskToEdit: 0,
};

// Reducer
export default handleActions({
  GET_ALL_TASKS: (state, action) => {
    return Object.assign({}, state, { tasks: action.payload });
  },
  ADD_NEW_TASK: (state, action) => {
    return Object.assign({}, state, { tasks: [action.payload].concat(state.tasks) });
  },
  UPDATE_TASK: (state, action) => {
    const tasks = _.map(state.tasks, task => (task.id === action.payload.id ? action.payload : task));
    return Object.assign({}, state, { tasks, taskToEdit: 0 });
  },
  DELETE_TASK: (state, action) => {
    return Object.assign({}, state, { tasks: _.filter(state.tasks, task => task.id !== action.payload) });
  },
  ACTIVATE_TASK_EDIT: (state, action) => {
    return Object.assign({}, state, { taskToEdit: action.payload });
  },
}, initialState);

// Action dispatchers
export const getAllTasks = () => {
  return async (dispatch) => {
    try {
      const { data } = await TodoBackend.get('tasks');
      dispatch(GET_ALL_TASKS(data.tasks));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addNewTask = (description) => {
  return async (dispatch) => {
    try {
      const { data } = await TodoBackend.post(`task/create/${description}`);
      dispatch(ADD_NEW_TASK(data.task));
    } catch (err) {
      console.log('errrrr', err);
    }
  };
};

export const deleteTask = (id) => {
  return async (dispatch) => {
    try {
      await TodoBackend.delete(`task/delete/${id}`);
      dispatch(DELETE_TASK(id));
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateTask = (description) => {
  return async (dispatch, getState) => {
    try {
      const { taskToEdit } = getState();
      if (description.length) {
        await TodoBackend.put(`task/update/${taskToEdit}/${description}`);
        dispatch(UPDATE_TASK({ id: taskToEdit, description }));
      } else {
        deleteTask(taskToEdit);
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const activateTaskEdit = (taskId) => {
  return (dispatch) => {
    dispatch(ACTIVATE_TASK_EDIT(taskId));
  };
};
