import * as constants from '../constants'

const initialStore = {
  err: null,
  loading: null,
  tasks: []
}

const tasksReducer = (state = initialStore, action) => {
  switch (action.type) {
    case constants.TASKS_FETCH_START:
      return {...state, loading: true}
    case constants.TASKS_FETCH_SUCCESS:
      return {...state, loading: false, details: action.payload}
    case constants.TASKS_FETCH_FAIL:
      return {...state, loading: false, err: action.payload}

    default:
      return state
  }
}

export default tasksReducer
