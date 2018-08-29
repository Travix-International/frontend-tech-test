import merge from 'lodash/merge'
import * as constants from 'constants/ActionTypes'

const _defaultState = {
  fetching: false
}

const HomeReducer = (oldState = _defaultState, action) => {
  let newState = merge({}, oldState);

  switch (action.type) {
    case constants.FETCH_TASK_REQUEST:
      newState.fetching = true
      return newState
    default:
      return oldState;
  }
}

export default HomeReducer
