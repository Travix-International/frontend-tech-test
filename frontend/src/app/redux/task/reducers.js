import { SET_DRAFT, CLEAR_DRAFT } from './types';

const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DRAFT:
      return action.payload;
    case CLEAR_DRAFT:
      return {};

    default:
      return state;
  }
};

export default taskReducer;
