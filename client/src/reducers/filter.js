import { Filters } from '../actions/filterTypes';
import { SET_FILTER } from '../actions/actionTypes';

const filter = (state = Filters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filter;
