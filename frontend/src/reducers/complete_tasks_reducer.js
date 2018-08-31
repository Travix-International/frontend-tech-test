import merge from 'lodash/merge'
import * as constants from 'constants/ActionTypes'
const _defaultState = {
  tasks: [],
  type: 'Completed Tasks'
}

const CompleteTasksReducer = (oldState = _defaultState, action) => {
  let newState = merge({}, oldState);

  switch (action.type) {
    case constants.RECEIVE_TASK_SUCCESS:
      action.tasks.forEach(task => {
        if(task.completed) {
          task.completed = true;
          newState.tasks.push(task);
        }
      })

      return newState
    case constants.UPDATE_TASK_SUCCESS:
      // if(!action.task.completed){
      //   newState.tasks = newState.tasks.map(task => {
      //     if(task.id === action.task.id){
      //       return action.task
      //     } else {
      //       return task
      //     }
      //   })
      // } else {
      //   newState.tasks = newState.tasks.filter(task => task.id !== action.task.id)
      // }


      let index = newState.tasks.findIndex((task) => {
        return task.id === action.task.id
      })

      if(!action.task.completed && index > -1){
        newState.tasks.splice(index, 1)
      } else {
        newState.tasks.push(action.task)
      }

      return newState
    case constants.DELETE_TASK_SUCCESS:
      if(action.task.completed){
        let index = newState.tasks.findIndex((task) => {
          return task.id === action.task.id
        })

        newState.tasks.splice(index, 1)
      }

      return newState
    default:
      return oldState;
  }
}

export default CompleteTasksReducer
