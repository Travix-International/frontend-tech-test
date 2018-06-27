// Actions are payloads of information that send data from your application to your store. 
// They are the only source of information for the store.

// Actions are triggered either by user through interactions or by an events, such as successful AJAX call.

import { GET_TODOS, GET_ONE_TASK, ADD_TASK, EDIT_TASK, DELETE_TASK } from "../constants/ActionTypes";
import axios from 'axios';

export function getTodos() {
    const request = axios({
      method: 'get',
      url: `/tasks`,
      headers: []
    }).then(response => {
      //console.log("before mount: fetch tasks")
      //console.log(response)
      return response.data
    });

    return {
        type: GET_TODOS,
        payload: request
      }
}

export function getOneTask(id) {
  const request = axios({
      method: 'get',
      url: `/task/${id}`
    }).then(response => {
      console.log("fetch one task")
      console.log(response)
      return response.data
    });

  return {
    type: GET_ONE_TASK,
    payload: request
  };
}

export function addTask(input) {
    const request = axios({
      method: 'post',
      url: `/task/create/:title/:description`,
      params: {
        title: input.title,
        description: input.description
      }
    }).then(response => {
      console.log("adding task")
      console.log(response)
      return response.data
    });

  return {
    type: ADD_TASK,
    payload: request
  };
}

export function editTask(input) {
      const request = axios({
      method: 'put',
      url: `/task/update/${input.id}/${input.title}/${input.description}`,
      params: {
        id: input.id,
        title: input.title,
        description: input.description
      }
    }).then(response => {
      console.log("edit task")
      console.log(response)
      return response.data
    });

  return {
    type: EDIT_TASK,
    payload: request
  };
}

export function deleteTask(id) {
    const request = axios({
      method: 'delete',
      url: `/task/delete/${id}`
    }).then(response => {
      console.log("delete one task")
      console.log(response)
      return response.data
    });

  return {
    type: DELETE_TASK,
    payload: request
  };
}