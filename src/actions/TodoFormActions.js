import {
  ADD_NEW_TASK,
  UPDATE_TASK,
  REMOVE_TASK
} from '../constants';

export const TodoAddNewTask = (title, description) => ({
  types: [ADD_NEW_TASK],
  payload: {
    request: {
      url: `task/create/${title}/${description}`
    }
  }
})

export const TodoUpdateTask = (id, title, description) => ({
  types: [UPDATE_TASK],
  payload: {
    request: {
      url: `task/update/${id}/${title}/${description}`
    }
  }
})

export const TodoRemoveTask = (id) => ({
  types: [REMOVE_TASK],
  payload: {
    request: {
      url: `task/delete/${id}`
    }
  }
})
