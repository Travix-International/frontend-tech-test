import {
  REQUEST_TASKS_START,
  REQUEST_TASKS_SUCCESS,
  REQUEST_TASKS_FAILURE,
  ADD_NEW_TASK,
  UPDATE_TASK,
  REMOVE_TASK
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
    case ADD_NEW_TASK:
      return {
        ...state,
        tasks: [
          action.task,
          ...state.tasks
        ]
      }
    case UPDATE_TASK:
      return {
        ...state,
        tasks: [
          action.task,
          ...state.tasks
        ]
      }
    case REMOVE_TASK:
      return {
        ...state,
        tasks: [
          state.task.filter(id => id !== action.task.id)
        ]
      }
    default:
      return state
  }
}
