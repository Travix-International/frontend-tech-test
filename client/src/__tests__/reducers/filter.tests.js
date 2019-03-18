import reducer from '../../reducers/filter';
import { Filters } from '../../actions/filterTypes';
import { SET_FILTER } from '../../actions/actionTypes';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(Filters.SHOW_ALL);
  });

  it('should handle SET_FILTER', () => {
    expect(
      reducer([], {
        type: SET_FILTER,
        filter: Filters.SHOW_ACTIVE,
      }),
    ).toEqual(Filters.SHOW_ACTIVE);
  });
});
