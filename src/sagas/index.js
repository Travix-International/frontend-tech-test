import { call, put, takeLatest } from "redux-saga/effects";
import Api from '../api';
import * as Actions from '../actions';
import * as Constants from '../constants';

function* fetchTodos() {
    try {
        const response = yield call(Api.getTodos);
        yield put(Actions.getTodoList({ tasks: response.tasks }));
    } catch (e) {
      yield put(Actions.showMessage({
        message: e.message,
        type: Constants.ERROR_TOAST
      }));
    }
}

function* addTodo({ task }) {
    try {
        const response = yield call(Api.addTodo, {task});
        yield put(Actions.addedSuccessfully(response.todo));
        yield put(Actions.showMessage({
          message: response.message,
          type: Constants.SUCCESS_TOAST
        }));
    } catch (e) {
      yield put(Actions.showMessage({
        message: e.message,
        type: Constants.ERROR_TOAST
      }));
    }
}

function* updateTodo({ task }) {
    try {
        const response = yield call(Api.updateTodo, {task});
        yield put(Actions.updatedSuccessfully(response.todo));
        yield put(Actions.showMessage({
          message: response.message,
          type: Constants.SUCCESS_TOAST
        }));
    } catch (e) {
      yield put(Actions.showMessage({
        message: e.message,
        type: Constants.ERROR_TOAST
      }));
    }
}

function* deleteTodo({ id }) {
    try {
        const response = yield call(Api.deleteTodo, {id});
        yield put(Actions.deletedSuccessfully(id));
        yield put(Actions.showMessage({
          message: response.message,
          type: Constants.SUCCESS_TOAST
        }));
    } catch (e) {
      yield put(Actions.showMessage({
        message: e.message,
        type: Constants.ERROR_TOAST
      }));
    }
}


function* mySaga() {
    yield takeLatest(Constants.FETCH_TODOS, fetchTodos);
    yield takeLatest(Constants.ADD_TODO, addTodo);
    yield takeLatest(Constants.UPDATE_TODO, updateTodo);
    yield takeLatest(Constants.DELETE_TODO, deleteTodo);
}

export default mySaga;
