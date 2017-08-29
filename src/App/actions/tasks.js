import fetch from 'isomorphic-fetch';

import {
  Task_Add_Request,
  Task_Add_Success,
  Task_Add_Failure,

  Task_Remove_Request,
  Task_Remove_Success,
  Task_Remove_Failure,

  Tasks_Get_Request,
  Tasks_Get_Success,
  Tasks_Get_Failure,

} from './actions'

export function getAll() {
  return {
    types: [Tasks_Get_Request, Tasks_Get_Success, Tasks_Get_Failure],
    promise: () => {
      return fetch('/api/tasks')
        .then(function(response) {

          if (response.status >= 400) {
            throw new Error("Bad response from server");
            reject({error: 'Bad response from server'})
          }
          return response.json();
        })
        .then(function(tasks) {
          return tasks
        });
    }
  }
}

export function add(title, description) {

  return {
    types: [Task_Add_Request, Task_Add_Success, Task_Add_Failure],
    promise: () => {
      return fetch(`/api/task/create/${title}/${description}`, {method: 'POST'})
        .then(function(response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
            reject({error: 'Bad response from server'})
          }
          return response.json();
        })
        .then(function(tasks) {
          return tasks
        });
    }
  }
}

export function remove(id) {
  return {
    types: [Task_Remove_Request, Task_Remove_Success, Task_Remove_Failure],
    promise: () => {
      return fetch(`/api/task/delete/${id}`, {method: 'DELETE'})
        .then(function(response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
            reject({error: 'Bad response from server'})
          }
          return response.json();
        })
        .then(function(result) {
          return result
        });
    }
  }
}
