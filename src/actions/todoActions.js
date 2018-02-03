import {
  REQUEST_PENDING,
  REQUEST_REJECTED,
  GET_TODOS
} from './types';

import axios from 'axios';

export function getTodos() {
  return (dispatch) => {
    dispatch({type: REQUEST_PENDING});
    axios({
      url: '/task',
      method: 'GET'
    }).then((response) => {
      dispatch({type: GET_TODOS, payload: response.data});
    }).catch((error) => {
      dispatch({type: REQUEST_REJECTED, payload: error});
    });
  }
}

export function addTodo(todo) {
  return (dispatch) => {
    dispatch({type: REQUEST_PENDING});
    axios({
      url: '/task/create',
      method: 'POST',
      data: todo
    }).then(() => {
      dispatch(getTodos());
    }).catch((error) => {
      dispatch({type: REQUEST_REJECTED, payload: error});
    })
  }
}

export function removeTodo(id) {
  return (dispatch) => {
    axios({
      url: '/task/delete',
      method: 'DELETE',
      data: {id}
    }).then(() => {
      dispatch(getTodos());
    }).catch((error) => {
      dispatch({type: REQUEST_REJECTED, payload: error});
    })
  }
}

export function editTodo(todo) {
  return (dispatch) => {
    axios({
      url: '/task/update',
      method: 'PUT',
      data: todo
    }).then(() => {
      dispatch(getTodos());
    }).catch((error) => {
      dispatch({type: REQUEST_REJECTED, payload: error});
    })
  }
}