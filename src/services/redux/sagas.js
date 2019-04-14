import { put, takeLatest, all } from "redux-saga/effects";
import { FETCH, CREATE, UPDATE, RECEIVED, DELETE } from "./tasks";

function* deleteTask(action) {
  const { id } = action;
  const json = yield fetch("http://localhost:9001/task/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  }).then(response => response.json());
  yield put({ type: RECEIVED, tasks: json.tasks });
}

function* updateTask(action) {
  const { id, title, description } = action;
  const json = yield fetch("http://localhost:9001/task/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, title, description }),
  }).then(response => response.json());
  yield put({ type: RECEIVED, tasks: json.tasks });
}

function* createTask(action) {
  const { title, description } = action;
  const json = yield fetch("http://localhost:9001/task/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description }),
  }).then(response => response.json());
  yield put({ type: RECEIVED, tasks: json.tasks });
}

function* fetchTasks() {
  const json = yield fetch("http://localhost:9001/tasks").then(response => {
    return response.json();
  });
  yield put({ type: RECEIVED, tasks: json.tasks });
}

function* actionWatcher() {
  yield takeLatest(FETCH, fetchTasks);
  yield takeLatest(CREATE, createTask);
  yield takeLatest(UPDATE, updateTask);
  yield takeLatest(DELETE, deleteTask);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
