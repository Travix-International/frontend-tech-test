import { call, put, takeLatest } from "redux-saga/effects";
import Api from '../api';
import * as TodosActions from '../actions/todos';
import * as PopupActions from '../actions/popup';

function* fetchTodos() {
    try {
        const response = yield call(Api.getTodos);

        yield put(TodosActions.fetchTodosSuccess({ todos: response.tasks }));
    } catch (e) {
        yield put(TodosActions.fetchTodosFailed({ message: e.message }));
    }
}

function* addTodo({ payload }) {
    try {
        const response = yield call(Api.addTodo, payload);

        yield put(TodosActions.addTodoSuccess(response.todo));
        yield put(PopupActions.hidePopup());
    } catch (e) {
        yield put(TodosActions.addTodoFailed({ message: e.message }));
    }
}

function* editTodoStart() {
    try {
        yield put(PopupActions.showPopup({ id: 'todo-popup' }));
    } catch (e) {
        yield put(TodosActions.addTodoFailed({ message: e.message }));
    }
}

function* editTodo({ payload }) {
    try {
        const response = yield call(Api.updateTodo, payload);

        yield put(TodosActions.editTodoSuccess(response.todo));
        yield put(PopupActions.hidePopup());
    } catch (e) {
        yield put(TodosActions.editTodoFailed({ message: e.message }));
    }
}

function* deleteTodo({ payload }) {
    try {
        const response = yield call(Api.deleteTodo, payload);

        yield put(TodosActions.deleteTodoSuccess(response.todo));
    } catch (e) {
        yield put(TodosActions.addTodoFailed({ message: e.message }));
    }
}

function* handleError({ payload }) {
    yield put(PopupActions.showPopup({
        id: 'error-popup',
        message: payload.message,
    }));
}

function* mySaga() {
    yield takeLatest('TODOS_FETCH_REQUEST', fetchTodos);
    yield takeLatest('TODO_ADD_REQUEST', addTodo);
    yield takeLatest('TODO_EDIT_START', editTodoStart);
    yield takeLatest('TODO_EDIT_REQUEST', editTodo);
    yield takeLatest('TODO_DELETE_REQUEST', deleteTodo);
    yield takeLatest([
        'TODOS_FETCH_FAILED',
        'TODO_ADD_FAILED',
        'TODO_EDIT_FAILED',
        'TODO_DELETE_FAILED',
    ], handleError);
}

export default mySaga;
