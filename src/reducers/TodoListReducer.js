import {
  REQUEST_TASKS_START,
  REQUEST_TASKS_SUCCESS,
  REQUEST_TASKS_FAILURE
} from '../constants'

const initialState = {
  tasks: [],
  isLoading: false,
  hasFailed: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_TASKS_START:
      return {
        ...state,
        isLoading: true
      }
    case REQUEST_TASKS_SUCCESS:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.payload.data
        ],
        isLoading: false
      }
    case REQUEST_TASKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasFailed: true
      }
    default:
      return state
  }
}
