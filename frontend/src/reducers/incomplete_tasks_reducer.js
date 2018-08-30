import merge from 'lodash/merge'
import * as constants from 'constants/ActionTypes'
const _defaultState = {
  tasks: []
}

const IncompleteTasksReducer = (oldState = _defaultState, action) => {
  let newState = merge({}, oldState);

  switch (action.type) {
    case constants.CREATE_TASK:
      newState.tasks.push(action.task)

      return newState
    case constants.RECEIVE_TASK_SUCCESS:
      action.tasks.forEach(task => {
        if(!task.completed) {
          newState.tasks.push(task);
        }
      })

      return newState
    case constants.CREATE_TASK_SUCCESS:
      newState.tasks.push(action.task);

      return newState
    case constants.UPDATE_TASK_SUCCESS:
      if(action.task.completed){
        newState.tasks = newState.tasks.filter(task => task.id !== action.task.id)
      } else {
        newState.tasks = newState.tasks.map(task => {
          if(task.id === action.task.id){
            return action.task
          } else {
            return task
          }
        })
      }

      return newState
    default:
      return oldState;
  }
}

export default IncompleteTasksReducer
