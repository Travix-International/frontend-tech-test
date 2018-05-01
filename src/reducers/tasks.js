import * as types from 'constants/actionTypes'

const initialState = {}

export default function tasks(state = initialState, action) {
  let newState = state

  switch (action.type) {
    case types.TASK_POST_COMPLETED:
    case types.TASK_UPDATE_COMPLETED:
    case types.TASK_DELETE_COMPLETED:
    case types.SUB_TASK_POST_COMPLETED:
    case types.SUB_TASK_UPDATE_COMPLETED:
    case types.SUB_TASK_DELETE_COMPLETED:
    case types.TASKS_FETCH_COMPLETED:
      newState = {
        items: action.payload
      }
      break
    default:
      break
  }

  return newState
}
