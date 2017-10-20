const initialState = {
  fetching: false,
  fetched: false,
  tasks: [],
  error: null,
}

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'FETCH_TASKS_START':
        return {
          ...state,
          fetching: true,
        }
      case 'RECEIVE_TASKS':
        return {
          ...state,
          fetching: false,
          fetched: true,
          tasks: action.payload,
        }
      case 'FETCH_TASKS_ERROR':
        return {
          ...state,
          fetching: false,
          error: action.payload,
        } 
      default:
       return state;
    }
  }
  
  export default toDoReducer