import {
  REQUEST_PENDING,
  REQUEST_FULFILL,
  REQUEST_REJECTED,
  GET_TODOS
} from './types';

import axios from 'axios';

export function getTodos(page = 1) {
  return (dispatch) => {
    dispatch({type: REQUEST_PENDING});
    axios({
      url: '/task/page/' + page,
      method: 'GET'
    }).then((response) => {
      dispatch({type: REQUEST_FULFILL});
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

export function removeTodo(id, page = 1) {
  return (dispatch) => {
    dispatch({ type: REQUEST_PENDING });
    axios({
      url: '/task/delete',
      method: 'DELETE',
      data: {id}
    }).then(() => {
      dispatch(getTodos(page));
    }).catch((error) => {
      dispatch({type: REQUEST_REJECTED, payload: error});
    })
  }
}

export function editTodo(todo, page = 1) {
  return (dispatch) => {
    dispatch({ type: REQUEST_PENDING });
    axios({
      url: '/task/update',
      method: 'PUT',
      data: todo
    }).then(() => {
      dispatch(getTodos(page));
    }).catch((error) => {
      dispatch({type: REQUEST_REJECTED, payload: error});
    })
  }
}