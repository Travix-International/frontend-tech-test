import {
  ADD_NEW_TASK,
  UPDATE_TASK,
  REMOVE_TASK
} from '../constants'

export const addNewTask = (title, description) => ({
  types: [ADD_NEW_TASK],
  payload: {
    request: {
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
  types: [REMOVE_TASK],
  payload: {
    request: {
      url: `task/delete/${id}`
    }
  }
})
