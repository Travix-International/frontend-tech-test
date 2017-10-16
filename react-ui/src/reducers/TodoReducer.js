import {
  REQUEST_TASKS_START,
  REQUEST_TASKS_SUCCESS,
  REQUEST_TASKS_FAILURE,
  ADD_TASK_SUCCESS,
  UPDATE_TASK,
  REMOVE_TASK_SUCCESS
} from '../constants'

const initialState = {
  tasks: [],
  isLoading: false,
  hasFailed: false
}

const removeTaskFromState = (tasks, id) => (
  tasks.slice().filter((task) => task.id !== Number(id))
)

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
          ...action.payload.data.tasks,
        ],
        isLoading: false
      }
    case REQUEST_TASKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasFailed: true
      }
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.payload.data.task
        ]
      }
    case UPDATE_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          ...action.payload.data.task
        ]
      }
    case REMOVE_TASK_SUCCESS:
      return {
        ...state,
        tasks: removeTaskFromState(state.tasks, action.payload.data.task.id)
      }
    default:
      return state
  }
}
