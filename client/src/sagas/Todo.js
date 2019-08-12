import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { deleteTodoSuccess, insertTodoSuccess, fetchTodosSuccess, showTodoMessage, selectTodoSuccess, updateTodoSuccess, updateBatchTodoSuccess } from 'actions/ToDo';
import { INSERT_TODO, FETCH_ALL_TODO, ON_DELETE_TODO, ON_TODO_SELECT, ON_TODO_UPDATE, ON_BATCH_TODO_UPDATE } from 'constants/ActionTypes';

const getTodos = async () =>

  await fetch('http://localhost:9001/tasks')
  .then(response => response.json())
    .catch(error => error);

const postTodo = async (todoData) => 
   
  await fetch(`http://localhost:9001/task/create/${todoData.title}/${todoData.notes}`,{
    method: 'POST'
  })
  .then(response => response.json())
  .catch(error => error);

const deleteTodo = async (id) => 
   
  await fetch(`http://localhost:9001/task/delete/${id}`,{
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(data =>  data.message)
  .catch(error => error);

  const getTodoById = async (id) => 
   
  await fetch(`http://localhost:9001/task/${id}`)
  .then(response => response.json())
  .catch(error => error);

const putTodo = async (data) => 
   
  await fetch(`http://localhost:9001/task/update/${data.id}/${data.title}/${data.notes}`,{
    method: 'PUT'
  })
  .then(response => response.json())
  .catch(error => error);

  const putBatchTodo = async (data) => 
  await fetch(`http://localhost:9001/tasks/update`,{
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(data)
  })
  .then(response => response.json())
  .catch(error => error);


function* fetchTodoRequest() {
  try {
    const fetchedTodo = yield call(getTodos);
    yield put(fetchTodosSuccess(fetchedTodo.tasks));
  } catch (error) {
    yield put(showTodoMessage(error));
  }
}


function* insertTodoRequest({payload}){

  try {
    const deleteResponse = yield call(postTodo,payload);
    payload.id = deleteResponse.id
    const data = { data: payload, message: deleteResponse.message}
    yield put(insertTodoSuccess(data));
  } catch (error) {
    yield put(showTodoMessage(error));
  }
}

function* deleteTodoRequest({payload}){
  //const {email, password} = payload;
  console.log(payload)
  try {
    const insertResponse = yield call(deleteTodo,payload.id);
    const data = { id: payload.id, message: insertResponse}
    yield put(deleteTodoSuccess(data));
  } catch (error) {
    yield put(showTodoMessage(error));
  }
}

function* updateTodoRequest({payload}){
  try {
    const updateResponse = yield call(putTodo,payload);
    const data = { data: payload, message: updateResponse}
    yield put(updateTodoSuccess(data));
  } catch (error) {
    yield put(showTodoMessage(error));
  }
}

function* updateBatchTodoRequest({payload}){
  try {
    const updateResponse = yield call(putBatchTodo,payload);
    const data = { data: payload, message: updateResponse}
    yield put(updateBatchTodoSuccess(data));
  } catch (error) {
    yield put(showTodoMessage(error));
  }
}

function* fetchTodoByIdRequest({payload}){
  try {
    const insertResponse = yield call(getTodoById,payload.id);
    yield put(selectTodoSuccess(insertResponse)); 
  } catch (error) {
    yield put(showTodoMessage(error));
  }
}

export function* insertTodo(){
  yield takeEvery(INSERT_TODO, insertTodoRequest);
}

export function* fetchTodos() {
  yield takeEvery(FETCH_ALL_TODO, fetchTodoRequest);
}

export function* fetchTodoById() {
  yield takeEvery(ON_TODO_SELECT, fetchTodoByIdRequest);
}
export function* removeTodos() {
  yield takeEvery(ON_DELETE_TODO, deleteTodoRequest);
}

export function* updateTodo() {
  yield takeEvery(ON_TODO_UPDATE, updateTodoRequest);
}

export function* updateBatchTodo() {
  yield takeEvery(ON_BATCH_TODO_UPDATE, updateBatchTodoRequest);
}

export default function* rootSaga() {
  yield all([fork(fetchTodos), fork(insertTodo), fork(removeTodos), fork(fetchTodoById), fork(updateTodo), fork(updateBatchTodo)]);
}