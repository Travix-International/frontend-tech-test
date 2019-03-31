import { handleResponse, handleError } from "./apiUtils";
//process.env.API_URL is configured in webpack config
const baseUrl = process.env.API_URL + "/tasks/";

export function getTodos() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveTask(task) {
  return fetch(baseUrl , {
    method: "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(task)
  })
    .then(handleResponse)
    .catch(handleError);
}


export function updateTask(task) {
  return fetch(baseUrl + task.id, {
    method: "PUT", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(task)
  })
    .then(handleResponse)
    .catch(handleError);
}


export function deleteTask(taskId) {
  return fetch(baseUrl + taskId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
