import * as types from '../actions/actionTypes';

/* Reducer to toggle modal that has the edit task form */
const editModalReducer = (state = null, action) => {
  switch (action.type) {
    case types.TOGGLE_EDIT_MODAL:
      return state === null ? action._id : null;

    default:
      return state;
  }
};

export default editModalReducer;
