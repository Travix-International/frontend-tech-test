export default function reducer(state={
  tasks: [],
  fetching: false,
  fetched: false,
  error: null,
}   , action) {
  switch (action.type) {
      case 'FETCH_TASKS_PENDING':
        return {
          ...state,
          fetching: true,
        }
      case 'FETCH_TASKS_FULFILLED':
        return {
          ...state,
          fetching: false,
          fetched: true,
          tasks: action.payload.data.tasks,//_.values(action.payload.data),
        }
      case 'FETCH_TASKS_REJECTED':
        return {
          ...state,
          fetching: false,
          error: action.payload,
        } 
      default:
       return state;
    }
  }