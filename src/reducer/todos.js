import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  GET_TODOS
} from '../constants/actions.js';

export default function todos(state = [], action) {
  switch (action.type) {
    case GET_TODOS:
      return action.payload;
    case ADD_TODO:
      return [...state, action.payload];
    case UPDATE_TODO: {
      const updatedItemIndex = state.findIndex(el => (
        el.id === action.payload.id
      ));
      if (!(updatedItemIndex + 1)) return state;

      const updatedItemState = [...state];
      updatedItemState.splice(updatedItemIndex, 1, action.payload);
      return updatedItemState;
    }
    case DELETE_TODO: {
      const deletedItemIndex = state.findIndex(el => (
        el.id === action.payload
      ));
      if (!(deletedItemIndex + 1)) return state;
      
      const deletedItemState =  [...state];
      deletedItemState.splice(deletedItemIndex, 1);
      return deletedItemState;
    }
    default:
      return state;
  }
}