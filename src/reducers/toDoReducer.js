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
          fetched: false,
          errorRetriving: null
        }
      case "FETCH_TASKS_FULFILLED":
        return {
          ...state,
          errorRetriving:null,
          fetching: false,
          fetched: true,
          tasks: action.payload.data.tasks,
        }
      case "FETCH_TASKS_REJECTED":
        return {
          ...state,
          fetched: false,
          fetching: false,
          errorRetriving: action.payload,
        }
      case "ADD_TASK_PENDING":
        return {
          ...state,
          adding: true,
          errorAdding: null,
          added: false
        }
      case "ADD_TASK_FULFILLED":
        return {
          ...state,
          errorAdding: null,
          adding: false,
          added: true,
          tasks: state.tasks.concat(action.payload.data.task),
        }
      case "ADD_TASK_REJECTED":
        return {
          ...state,
          adding: false,
          added: false,
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
          errorUpdating: null,
          updating: false,
          updated: true,
          tasks: state.tasks.map(task => {
            if(task.id !== action.payload.id) {
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
          updating: false,
          updated: false,
          errorUpdating: action.payload,
        }

      case "DELETE_TASK_PENDING":
        return {
          ...state,
          erasing: true,
          erased: false,
          errorErasing: null
        }
      case "DELETE_TASK_FULFILLED":
        return {
          ...state,
          erasing: false,
          errorErasing: null,
          erased: true,
          tasks: state.tasks.filter(task => task.id !== action.payload)
      }
      case "DELETE_TASK_REJECTED":
        return {
          ...state,
          erasing: false,
          erased: false,
          errorAdding: action.payload,
      } 

      default:
       return state;
    }
  }