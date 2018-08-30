import merge from 'lodash/merge'
import * as constants from 'constants/ActionTypes'

const _defaultState = {
  error: "",
  nextId: 0,
  crud: false
}

const HomeReducer = (oldState = _defaultState, action) => {
  let newState = merge({}, oldState);

  switch (action.type) {
    case constants.FETCH_TASK_REQUEST:
      newState.fetching = true
      return newState
    case constants.RECEIVE_TASK_SUCCESS:
      newState.nextId = action.tasks.length
      newState.crud = false
      return newState
    case constants.RECEIVE_TASK_ERROR:
      newState.crud = false
      newState.error = action.error
      return newState

    case constants.CREATE_TASK:
      newState.crud = true
      return newState

    case (constants.CREATE_TASK_SUCCESS || constants.UPDATE_TASK_SUCCESS || constants.DELETE_TASK_SUCCESS) :
      newState.crud = false
      return newState

    case (constants.DELETE_TASK_SUCCESS || constants.UPDATE_TASK_ERROR || constants.CREATE_TASK_ERROR) :
      newState.error = action.error
      newState.crud = false
      return newState

    default:
      return oldState;
  }
}

export default HomeReducer
