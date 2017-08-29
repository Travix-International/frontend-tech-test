import fetch from 'isomorphic-fetch';

import {
  Task_Edit_Request,
  Task_Edit_Success,
  Task_Edit_Failure,

  Task_Get_Request,
  Task_Get_Success,
  Task_Get_Failure,

} from './actions'

export function getTask(id) {
  return {
    types: [Task_Get_Request, Task_Get_Success, Task_Get_Failure],
    promise: () => {
      return fetch(`/api/task/${id}`)
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

export function update(id, title, description) {
  return {
    types: [Task_Edit_Request, Task_Edit_Success, Task_Edit_Failure],
    promise: () => {
      return fetch(`/api/task/update/${id}/${title}/${description}`, {method: 'PUT'})
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
