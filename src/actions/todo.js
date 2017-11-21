import axios from 'axios'

export const REQ_START = 'todo/REQ_START';
export const REQ_ERROR = 'todo/REQ_ERROR';
export const GET_TODOS_SUCCESS = 'todo/GET_TODOS_SUCCESS';
export const ADD_TODO_SUCCESS = 'todo/ADD_TODO_SUCCESS';
export const DELETE_TODO_SUCCESS = 'todo/DELETE_TODO_SUCCESS';
export const UPDATE_TODO_SUCCESS = 'todo/UPDATE_TODO_SUCCESS';
export const SET_TODO_EDITABLE = 'todo/SET_TODO_EDITABLE';

export const StartRequesting = () => {
  return {type: REQ_START}
};

export const RequestError = (payload) => {
  return {type: REQ_ERROR, payload}
};

export const GetTodosSuccess = (payload) => {
  return {type: GET_TODOS_SUCCESS, payload}
};

export const AddTodoSuccess = () => {
  return {type: ADD_TODO_SUCCESS}
};

export const deleteTodoSuccess = () => {
  return {type: DELETE_TODO_SUCCESS}
};

export const updateTodoSuccess = () => {
  return {type: UPDATE_TODO_SUCCESS}
};

export const setTodoEditable = (payload) => {
  return {type: SET_TODO_EDITABLE, payload}
};

export const getTodos = () => {
  return dispatch => {
    dispatch(StartRequesting());
    axios
      .get('/tasks')
      .then((response) => {
      console.log(response)
        dispatch(GetTodosSuccess(response.data.tasks));
      })
      .catch((error) => {
        dispatch(RequestError(error.message));
      })
  }
};

export const addTodo = (todo) => {
  return dispatch => {
    dispatch(StartRequesting());
    axios
      .post('/task/create/', todo)
      .then((response) => {
        dispatch(AddTodoSuccess());
        dispatch(getTodos());
      })
      .catch((error) => {
        dispatch(RequestError(error.message));
      })
  }
};


export const deleteTodo = (todoId) => {
  return dispatch => {
    dispatch(StartRequesting());
    axios
      .delete('/task/delete/' + todoId)
      .then((response) => {
        dispatch(deleteTodoSuccess());
        dispatch(getTodos())
      })
      .catch((error) => {
        dispatch(RequestError(error.message))
      })
  }
};


export const updateTodo = (todo) => {
  return dispatch => {
    dispatch(StartRequesting());
    axios
      .put('/task/update/' + todo.id, todo)
      .then((response) => {
        dispatch(updateTodoSuccess());
        dispatch(unSetEditable());
        dispatch(getTodos());
      })
      .catch((error) => {
        dispatch(RequestError(error.message));
      })
  }
};


export const setEditable = (id) => {
  return dispatch => {
    dispatch(setTodoEditable(id));
  }
};

export const unSetEditable = () => {
  return dispatch => {
    dispatch(setTodoEditable());
  }
};