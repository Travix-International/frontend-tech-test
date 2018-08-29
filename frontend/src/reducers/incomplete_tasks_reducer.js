import merge from 'lodash/merge'
import {CREATE_TASK} from 'constants/ActionTypes'
const _defaultState = []

const IncompleteTasksReducer = (oldState = _defaultState, action) => {
  let newState = merge([], oldState);

  switch (action.type) {
    case CREATE_TASK:
      newState.push(action.task)
      return newState
    default:
      return oldState;
  }
}

export default IncompleteTasksReducer
