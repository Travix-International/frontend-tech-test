import { TASK_FILTER } from '../../constants';
import { filterActionTypes as ft } from '../../actions/actionTypes';
import filterReducer from '../filter';

describe('filter reducers test', () => {
  it('should return the initial state when action is not matched', () => {
    expect(filterReducer(undefined, {})).toEqual(TASK_FILTER.SHOW_ALL);
  });
});