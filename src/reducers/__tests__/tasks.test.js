import { taskActionTypes as at } from '../../actions/actionTypes';
import tasksReducer from '../tasks';

describe('tasks reducers test', () => {
  it('should return the initial state when action is not matched', () => {
    expect(tasksReducer(undefined, {})).toEqual({});
  });
});