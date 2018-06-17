import { FETCH_TODOS, NEW_TODO, DELETE_TODO, UPDATE_TODO, EDITING } from './types';

export const fetchTodos = () => dispatch => {
    fetch('http://localhost:9001/tasks')
      .then(res => res.json())
      .then(data => dispatch({
        type: FETCH_TODOS,
        payload: data
      }));
}

export const createTodo = (newTodo) => dispatch => {
  fetch('http://localhost:9001/task/create/'+ newTodo.title + '/' + newTodo.description, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(todo => dispatch({
    type: NEW_TODO,
    payload: todo
  }));
}

export const deleteTodo = (id) => dispatch => {
  fetch('http://localhost:9001/task/delete/' + id, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(todo => dispatch({
    type: DELETE_TODO,
    payload: todo
  }))
}

export const updateTodo = (updatedItem) => dispatch => {
  fetch('http://localhost:9001/task/update/' + updatedItem.id + '/' + updatedItem.title + '/' + updatedItem.description, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(todo => dispatch({
    type: UPDATE_TODO,
    payload: todo
  }))
}

export const isEditing = (id) => dispatch => {
  fetch('http://localhost:9001/task/' + id)
  .then(res => res.json())
  .then(item => dispatch({
    type: EDITING,
    payload: item
  }))
}
