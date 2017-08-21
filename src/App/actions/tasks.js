import Promise from 'bluebird'
import {
  Task_Add_Request,
  Task_Add_Success,
  Task_Add_Failure,

  Task_Edit_Request,
  Task_Edit_Success,
  Task_Edit_Failure,

  Task_Remove_Request,
  Task_Remove_Success,
  Task_Remove_Failure,
} from './actions'

export function add(content) {
  return {
    type: Task_Add_Request,
    payload: {
      content
    }
  }
}

export function edit(delay) {
  return {
    types: [Task_Edit_Request, Task_Edit_Success, Task_Edit_Failure],
    promise: () => {
      return new Promise((resolve, reject) => {
        // Just simulating an async request to a server via a setTimeout
        
      })
    }
  }
}
