import { CALL_API, CHAIN_API } from './../middleware/api'
import { browserHistory } from 'react-router'

export const LOADDED_TASKS = Symbol('LOADDED_TASKS') 
export const LOADDED_TASKS_ERROR = Symbol('LOADDED_TASKS_ERROR') 

export const CREATED_TASK = Symbol('CREATED_TASK') 
export const CREATED_TASK_ERROR = Symbol('CREATED_TASK_ERROR') 


export const DELETED_TASK = Symbol('DELETED_TASK') 
export const DELETED_TASK_ERROR = Symbol('DELETED_TASK_ERROR') 

export function loadTasks(){
  return (dispatch, getState) => {
    dispatch({
      [CHAIN_API]: [
          ()=> {
            return {
              [CALL_API]: {
                method: 'get',
                type: 'external',
                path: '/tasks',
                successType: LOADDED_TASKS,
                errorType: LOADDED_TASKS_ERROR
              }
            }
          }, (response) => {
            console.log(response)
          }
        ]
    })
  }
}

export function deleteTask(task){
  return (dispatch, getState) => {
    dispatch({
      [CHAIN_API]: [
          ()=> {
            return {
              [CALL_API]: {
                method: 'delete',
                type: 'external',
                path: '/task/delete/' + task.get('id'),
                successType: DELETED_TASK,
                errorType: DELETED_TASK_ERROR
              }
            }
          }, (response) => {
            console.log(response)
            dispatch(loadTasks())
          }
        ]
    })
  }
}

export function createTask(task){
  return (dispatch, getState) => {
    dispatch({
      [CHAIN_API]: [
          ()=> {
            return {
              [CALL_API]: {
                method: 'post',
                type: 'external',
                path: '/task/create/' + task.title + '/' + task.description,
                successType: CREATED_TASK,
                errorType: CREATED_TASK_ERROR
              }
            }
          }, (response) => {
            dispatch(loadTasks())
          }
        ]
    })
  }
}