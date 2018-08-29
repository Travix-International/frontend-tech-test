import merge from 'lodash/merge'
import * as constants from 'constants/ActionTypes'

const _defaultState = {
  fetching: false,
  error: ""
}

const HomeReducer = (oldState = _defaultState, action) => {
  let newState = merge({}, oldState);

  switch (action.type) {
    case constants.FETCH_TASK_REQUEST:
      newState.fetching = true
      return newState
    case constants.RECEIVE_TASK_SUCCESS:
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
