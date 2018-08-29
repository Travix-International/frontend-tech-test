import merge from 'lodash/merge'
import * as constants from 'constants/ActionTypes'
const _defaultState = {
  tasks: [],
  errors: [],
  fetching: false
}

const IncompleteTasksReducer = (oldState = _defaultState, action) => {
  let newState = merge({}, oldState);

  switch (action.type) {
    case constants.CREATE_TASK:
      newState.tasks.push(action.task)

      return newState
    case constants.FETCH_TASK_REQUEST:
      newState.fetching = true

      return newState
    default:
      return oldState;
  }
}

export default IncompleteTasksReducer
