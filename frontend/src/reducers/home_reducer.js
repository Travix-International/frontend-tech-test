import merge from 'lodash/merge'
import * as constants from 'constants/ActionTypes'

const _defaultState = {
  error: "",
  nextId: 0,
  crudLoader: false,
  selectOrCreate: false,
  selectedTask: {
    id: null,
    title: "",
    description: ""
  }
}

const HomeReducer = (oldState = _defaultState, action) => {
  let newState = merge({}, oldState);

  switch (action.type) {
    case constants.FETCH_TASK_REQUEST:
      newState.fetching = true

      return newState
    case constants.RECEIVE_TASK_SUCCESS:
      newState.nextId = action.tasks.length
      newState.crudLoader = false

      return newState
    case constants.RECEIVE_TASK_ERROR:
      newState.crudLoader = false
      newState.error = action.error

      return newState
    case constants.CREATE_TASK:
      newState.crudLoader = true

      return newState
    case (constants.CREATE_TASK_SUCCESS || constants.UPDATE_TASK_SUCCESS || constants.DELETE_TASK_SUCCESS) :
      newState.crudLoader = false

      return newState
    case (constants.DELETE_TASK_SUCCESS || constants.UPDATE_TASK_ERROR || constants.CREATE_TASK_ERROR) :
      newState.error = action.error
      newState.crudLoader = false

      return newState
    case constants.SELECT_OR_CREATE_TASK:
      newState.selectOrCreate = true
      newState.selectedTask = action.task

      return newState
    case constants.UNSELECT_TASK:
      newState.selectOrCreate = false
      newState.selectedTask = {
        id: null,
        title: "",
        description: ""
      }

      return newState
    default:
      return oldState;
  }
}

export default HomeReducer
