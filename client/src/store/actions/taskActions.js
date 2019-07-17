import * as actionTypes from './actionTypes';
import axios from '../../constants/axios';

export const addTask = (title, description, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.ADD_TASK_REQUEST,
  });

  axios.post(`/task/create/${title}/${description}`)
    .then(res => res.data)
    .then((res) => {
      dispatch({
        type: actionTypes.ADD_TASK_SUCCESS,
        task: {
          id: res.id,
          title,
          description,
        },
      });

      if (callback) {
        callback();
      }
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.ADD_TASK_FAILURE,
        error,
      });
    });
};

export const deleteTask = id => (dispatch) => {
  dispatch({
    type: actionTypes.DELETE_TASK_REQUEST,
  });

  axios.delete(`/task/delete/${id}`)
    .then(res => res.data)
    .then((res) => {
      alert(res.message);
      dispatch({
        type: actionTypes.DELETE_TASK_SUCCESS,
        id,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.DELETE_TASK_FAILURE,
        error,
      });
    });
};

export const editTask = (id, title, description, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.EDIT_TASK_REQUEST,
  });

  axios.put(`/task/update/${id}/${title}/${description}`)
    .then(res => res.data)
    .then(() => {
      dispatch({
        type: actionTypes.EDIT_TASK_SUCCESS,
        task: {
          id,
          title,
          description,
        },
      });
      alert('Update is successful');

      if (callback) {
        callback();
      }
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.EDIT_TASK_FAILURE,
        error,
      });
    });
};

export const fetchTasks = () => (dispatch) => {
  dispatch({
    type: actionTypes.FETCH_TASKS_REQUEST,
  });

  axios.get('/tasks')
    .then(res => res.data)
    .then((res) => {
      dispatch({
        type: actionTypes.FETCH_TASKS_SUCCESS,
        tasks: res.tasks,
      });
    })
    .catch((error) => {
      alert('Something went wrong while fetching tasks');
      dispatch({
        type: actionTypes.FETCH_TASKS_FAILURE,
        error,
      });
    });
};

export const fetchTask = id => (dispatch) => {
  dispatch({
    type: actionTypes.FETCH_TASK_REQUEST,
  });

  axios.get(`/task/${id}`)
    .then(res => res.data)
    .then((res) => {
      dispatch({
        type: actionTypes.FETCH_TASK_SUCCESS,
        task: res.task,
      });
    })
    .catch((error) => {
      alert('Something went wrong while fetching task');
      dispatch({
        type: actionTypes.FETCH_TASK_FAILURE,
        error,
      });
    });
};
