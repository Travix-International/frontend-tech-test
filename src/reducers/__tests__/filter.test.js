import { TASK_FILTER } from '../../constants';
import { setTaskVisibility } from '../../actions/filterActions';
import filterReducer from '../filter';

describe('filter reducers test', () => {
  it('should return the initial state when action is not matched', () => {
    expect(filterReducer(undefined, {})).toEqual(TASK_FILTER.SHOW_ALL);
  });

  it('should change filter type when action is dispatched', () => {
    const initState = TASK_FILTER.SHOW_ALL;
    const action = setTaskVisibility(TASK_FILTER.SHOW_ACTIVE);
    expect(filterReducer(initState, action)).toEqual(TASK_FILTER.SHOW_ACTIVE);
  });
});