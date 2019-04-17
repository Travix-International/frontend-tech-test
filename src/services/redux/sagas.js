import { put, takeLatest, all } from "redux-saga/effects";

import { FETCH, CREATE, UPDATE, DELETE, RECEIVED } from "./tasks";

function parseJson(response) {
  return response.text().then(text => {
    return text ? JSON.parse(text) : {};
  });
}

export function* deleteTask(action) {
  const { id } = action;
  const json = yield fetch("http://localhost:9001/task/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  })
    .then(response => parseJson(response))
    .catch(error => console.log("ERROR", error));
  yield put({ type: RECEIVED, tasks: json.tasks });
}

export function* updateTask(action) {
  const { id, title, description } = action;
  const json = yield fetch("http://localhost:9001/task/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, title, description }),
  })
    .then(response => parseJson(response))
    .catch(error => console.log("ERROR", error));
  yield put({ type: RECEIVED, tasks: json.tasks });
}

export function* createTask(action) {
  const { title, description } = action;
  const json = yield fetch("http://localhost:9001/task/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description }),
  })
    .then(response => parseJson(response))
    .catch(error => console.log("ERROR", error));
  yield put({ type: RECEIVED, tasks: json.tasks });
}

export function* fetchTasks() {
  const json = yield fetch("http://localhost:9001/tasks")
    .then(response => parseJson(response))
    .catch(error => console.log("ERROR", error));
  yield put({ type: RECEIVED, tasks: json.tasks });
}

export function* actionWatcher() {
  yield takeLatest(FETCH, fetchTasks);
  yield takeLatest(CREATE, createTask);
  yield takeLatest(UPDATE, updateTask);
  yield takeLatest(DELETE, deleteTask);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
