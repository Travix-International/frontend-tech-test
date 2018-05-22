// Import the taskAction Creators and taskActionTypes

import * as TaskActions from '../actions'


// We are dividing the reducers using a technique called Reducer composition.
// By doing this we are seperating the reducer for the Collection and the Individual Item


//The collection Reducer, It handles only the collection

export function TasksListReducer(state = [], action) {
  switch (action.type) {

    // The cases ordered in CRUD order.

    // Create
    case TaskActions.CREATE_TASK_SUCCESS: {
      return [
        ...state,
        action.task
      ];
    }

    //Read
    case TaskActions.GET_TASKS_SUCCESS: {

      return action.tasks;

    }

    // The following Cases handle the data by mapping it. Mostly because they are related with the modification of a single Data

    //Update
    case TaskActions.START_EDITING:
    case TaskActions.CANCEL_EDITING:
    case TaskActions.UPDATE_TASK_SUCCESS:
    case TaskActions.UPDATE_TASK:
    case TaskActions.DELETE_TASK:
    case TaskActions.DELETE_TASK_SUCCESS: {

      return state.map(s => task(s, action)).filter((s) => !!s);

    }

    default:
      return state
  }
}


//The individual Reducer. It handles only one task Object.


const task = (state, action) => {

  // If the mapped task of the previous state matches with the new ID of the action,
  // Only then proceed to the Reducer Switch case

  if (state.id != (action.id || action.task.id)) {
    return state;
  }

  switch (action.type) {

    // Edit/modifies the individual tasks using ES6 spread operator. The cases are self explanatory.

    case TaskActions.START_EDITING: {
      return {
        ...state,
        editing: true
      }
    }

    case TaskActions.CANCEL_EDITING: {
      return {
        ...state,
        editing: false
      }
    }

    case TaskActions.UPDATE_TASK: {
      return {
        ...state,
        editing: false,
        updating: true
      }
    }

    case TaskActions.UPDATE_TASK_SUCCESS: {
      return {
        ...state,
        ...action.task,
        editing: false,
        updating: false
      }
    }

    case TaskActions.DELETE_TASK: {
      return {
        ...state,
        deleting: true
      }
    }

    case TaskActions.DELETE_TASK_SUCCESS: {
      return false
    }

    default: {
      return state;
    }
  }
};