import { call, put } from "redux-saga/effects";
import { push } from "react-router-redux";
import ApiTodos from "../api/todos";
import * as types from './actionTypes';

// fetch the todo's list
export function* todosFetchList(action) {
  try {
    yield put({
      type: types.BEGIN_AJAX_CALL,
    });
    // call the api to get the todos list
    const todos = yield call(ApiTodos.getList);
    // save the todos in state
    yield put({
      type: types.TODOS_LIST_SAVE,
      todos: todos,
    });
  } catch(error) {
    console.error(error);
  }
}

// add/edit a todo
export function* todosAddEdit(action) {
  try {
    yield put({
      type: types.BEGIN_AJAX_CALL,
    });
    // call the api to add/edit the todo
    const task = yield call(ApiTodos.addEdit, action);
    //return action.callbackError("Some error");   // show an error when the API fails

    // update the state by adding/editing the todo
    yield put({
      type: action.todo.id ? types.TODOS_EDIT_SAVE : types.TODOS_ADD_SAVE,
      todo: task,
    });

    // success
    // action.callbackSuccess();
    yield put(push('/'));
  } catch(error) {
    console.error(error);
  }
}

// delete a todo
export function* todosDelete(action) {

  try{
    yield put({
      type: types.BEGIN_AJAX_CALL,
    });

    // call the api to delete the todo
    yield call(ApiTodos.delete, action);

    // update the state by removing the todo
    yield put({
      type: types.TODOS_DELETE_SAVE,
      todo: {
        id: action.todo.id
      }
    });
  } catch(error) {
    console.error(error);
  }
}

export function getFetchList() {
  return { type: types.TODOS_FETCH_LIST};
}

export function deleteTodo(taskId) {
  return { type: types.TODOS_DELETE,
    todo: {
      id: taskId
    }
  };
}

export function submitTask(values) {
  return { type: types.TODOS_ADD_EDIT,
    todo: {
      id: values.id || 0,
      task: values.task,
    }
  };
}