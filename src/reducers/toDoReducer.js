export default function reducer(
  state = {
      tasks: [],
      fetching: false,
      fetched: false,
      adding: false,
      added: false,
      updating: false,
      updated: false,
      erasing: false,
      erased: false,
      errorErasing: null,
      errorAdding: null,
      errorRetriving: null,
      errorUpdating: null
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
          errorRetriving: action.payload,
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
          errorAdding: action.payload,
        } 
      case "UPDATE_TASK_PENDING":
        return {
          ...state,
          updating: true,
          updated: false,
          errorUpdating: null
        }
      case "UPDATE_TASK_FULFILLED":
        return {
          ...state,
          updating: false,
          updated: true,
          tasks: state.tasks.map((task, index) => {
            if(index !== action.payload.id) {
                return task;
            }
            return {
                ...task,
                title: action.payload.title,
                description: action.payload.desc
            };    
        })
      }
      case "UPDATE_TASK_REJECTED":
        return {
          ...state,
          adding: false,
          errorUpdating: action.payload,
        }

      case "DELETE_TASK_PENDING":
        return {
          ...state,
          erasing: true,
          erased: true
        }
      case "DELETE_TASK_FULFILLED":
        return {
          ...state,
          erasing: false,
          erased: true,
          tasks: state.tasks.filter(task => task.id !== action.payload)
      }
      case "DELETE_TASK_REJECTED":
        return {
          ...state,
          adding: false,
          erased: false,
          errorAdding: action.payload,
      } 

      default:
       return state;
    }
  }