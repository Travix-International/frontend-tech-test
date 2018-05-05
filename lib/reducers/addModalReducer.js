import * as types from '../actions/actionTypes';

/* Reducer to toggle modal that has the add new task form */
const addTaskModalReducer = (state = false, action) => {
  switch (action.type) {
    case types.TOGGLE_ADD_MODAL:
      return !state;

    default:
      return state;
  }
};

export default addTaskModalReducer;
