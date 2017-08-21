import Promise from 'bluebird'
import {
  Task_Edit_Request,
  Task_Edit_Success,
  Task_Edit_Failure,

  Task_Remove_Request,
  Task_Remove_Success,
  Task_Remove_Failure,
} from './actions'


export function TaskEdit(delay) {
  return {
    types: [Task_Edit_Request, Task_Edit_Success, Task_Edit_Failure],
    promise: () => {
      return new Promise((resolve, reject) => {
        // Just simulating an async request to a server via a setTimeout
        
      })
    }
  }
}
