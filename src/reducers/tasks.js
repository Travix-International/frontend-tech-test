import * as types from 'constants/actionTypes'
import update from 'immutability-helper'

const initialState = {}

const findTaskIndexById = (items, id) => items.findIndex(x => x.id === id)

export default function tasks(state = initialState, action) {
  let newState = state

  switch (action.type) {
    case types.TASKS_FETCH_COMPLETED:
      newState = {
        items: action.payload
      }
      break
    case types.TASK_POST_COMPLETED: {
      const task = action.payload
      newState = {
        items: update(newState.items, {
          $push: [task]
        })
      }
      break
    }
    case types.TASK_UPDATE_COMPLETED:
    case types.SUB_TASK_POST_COMPLETED:
    case types.SUB_TASK_UPDATE_COMPLETED:
    case types.SUB_TASK_DELETE_COMPLETED: {
      const task = action.payload
      const taskIndex = findTaskIndexById(newState.items, task.id)
      if (taskIndex >= 0) {
        newState = {
          items: update(newState.items, {
            [taskIndex]: { $set: task }
          })
        }
      }
      break
    }
    case types.TASK_DELETE_COMPLETED: {
      const task = action.payload
      const taskIndex = findTaskIndexById(newState.items, task.id)
      if (taskIndex >= 0) {
        newState = {
          items: update(newState.items, {
            $splice: [[taskIndex, 1]]
          })
        }
      }
      break
    }
    default:
      break
  }

  return newState
}
