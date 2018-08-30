import merge from 'lodash/merge'
import * as constants from 'constants/ActionTypes'

const _defaultState = {
  fetching: false,
  error: "",
  lastId: 0
}

const HomeReducer = (oldState = _defaultState, action) => {
  let newState = merge({}, oldState);

  switch (action.type) {
    case constants.FETCH_TASK_REQUEST:
      newState.fetching = true
      return newState
    case constants.RECEIVE_TASK_SUCCESS:
      if(action.tasks.length != 0){
        newState.lastId = action.tasks[action.tasks.length].id
      }
      newState.fetching = false
      return newState
    case constants.RECEIVE_TASK_ERROR:
      newState.fetching = false
      newState.error = action.error
      return newState
    default:
      return oldState;
  }
}

export default HomeReducer
