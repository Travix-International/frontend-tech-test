import {
  SERVER_REQUESTED,
  TODO_ADD,
  TODO_DELETE,
  TODO_FAILED,
  TODO_FETCH,
  TODO_UPDATE,
} from '../constants';
import {
  addTodo as createTodo,
  deleteTodo,
  getTodos,
  updateTodo as editTodo,
} from '../helpers/serverInteraction';

export const failTodo = error => dispatch => dispatch({
  error,
  type: TODO_FAILED,
});

export const addTodo = (t, d) => (dispatch) => {
  dispatch({
    type: SERVER_REQUESTED,
  });
  return createTodo(t, d)
    .then(({ task }) => dispatch({
      type: TODO_ADD,
      ...task,
    }))
    .catch(er => dispatch(failTodo(er)));
};

export const fetchTodos = () => (dispatch) => {
  dispatch({
    type: SERVER_REQUESTED,
  });
  return getTodos()
    .then(({ tasks }) => dispatch({
      type: TODO_FETCH,
      todoList: tasks,
    }))
    .catch(er => dispatch(failTodo(er)));
};

export const removeTodo = id => (dispatch) => {
  dispatch({
    type: SERVER_REQUESTED,
  });
  return deleteTodo(id)
    .then(() => dispatch({
      type: TODO_DELETE,
      id,
    }))
    .catch(er => dispatch(failTodo(er)));
};

export const updateTodo = (id, title, description) => (dispatch) => {
  dispatch({
    type: SERVER_REQUESTED,
  });
  return editTodo(id, title, description)
    .then(() => dispatch({
      type: TODO_UPDATE,
      id,
      title,
      description,
    }))
    .catch(er => dispatch(failTodo(er)));
};
