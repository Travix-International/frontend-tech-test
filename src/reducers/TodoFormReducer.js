import {
  ADD_NEW_TASK
} from '../constants'

export default function (state = [], action) {
  switch (action.type) {
    case ADD_NEW_TASK:
      return {
        ...state,
        // action.task,
      }
    default:
      return state
  }
}
