import {
  SET_TAG,
  UNSET_TAG,
  CLEAR_TAGS
} from '../constants/actions.js';

export default function tags(state = [], action) {
  switch (action.type) {
    case SET_TAG: {
      const tag = state.findIndex(tag => tag === action.payload);
      if (tag + 1) return state;
      return [ ...state, action.payload ];
    }
    case UNSET_TAG: {
      const tagIndex = state.findIndex(tag => tag === action.payload);
      if (!(tagIndex + 1)) return state;
      const updatedState = [ ...state ];
      updatedState.splice(tagIndex, 1);
      return updatedState;
    }
    case CLEAR_TAGS:
      return [];
    default:
      return state;
  }
}