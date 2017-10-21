export default function reducer(
  state = {
      tasks: [],
      fetching: false,
      fetched: false,
      error: null
    }, action) {

  switch (action.type) {
      case "FETCH_TASKS_PENDING":
        return {
          ...state,
          fetching: true,
        }
      case "FETCH_TASKS_FULFILLED":
        return {
          ...state,
          fetching: false,
          fetched: true,
          tasks: action.payload.data.tasks,
        }
      case "FETCH_TASKS_REJECTED":
        return {
          ...state,
          fetching: false,
          error: action.payload,
        }
      case "ADD_TASK_PENDING":
        return {
          ...state,
          adding: true,
        }
      case "ADD_TASK_FULFILLED":
        return {
          ...state,
          adding: false,
          added: true,
          tasks: state.tasks.concat(action.payload.data.task),
        }
      case "ADD_TASK_REJECTED":
        return {
          ...state,
          adding: false,
          error: action.payload,
        } 
      default:
       return state;
    }
  }