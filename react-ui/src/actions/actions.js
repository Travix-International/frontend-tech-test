import {
  REQUEST_TASKS_START,
  REQUEST_TASKS_SUCCESS,
  REQUEST_TASKS_FAILURE,
  ADD_TASK_START,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  UPDATE_TASK,
  REMOVE_TASK_START,
  REMOVE_TASK_SUCCESS,
  REMOVE_TASK_FAILURE,
} from '../constants'

export const fetchTodoList = () => ({
  types: [REQUEST_TASKS_START, REQUEST_TASKS_SUCCESS, REQUEST_TASKS_FAILURE],
  payload: {
    request: {
      url: `tasks`
    }
  }
})

export const addNewTask = (title, description) => ({
  types: [ADD_TASK_START, ADD_TASK_SUCCESS, ADD_TASK_FAILURE],
  payload: {
    request: {
      method: 'post',
      url: `task/create/${title}/${description}`
    }
  }
})

export const updateTask = (id, title, description) => ({
  types: [UPDATE_TASK],
  payload: {
    request: {
      url: `task/update/${id}/${title}/${description}`
    }
  }
})

export const removeTask = (id) => ({
  types: [REMOVE_TASK_START, REMOVE_TASK_SUCCESS, REMOVE_TASK_FAILURE],
  payload: {
    request: {
      method: 'delete',
      url: `task/delete/${id}`
    }
  }
})
