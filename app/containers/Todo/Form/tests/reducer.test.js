import reducer, { INITIAL_STATE } from '../reducer';
import {
  change,
  save,
  saveSuccess,
  saveError
} from '../actions';

describe('TodoForm Reducer', () => {
  it('should return the initial state', () => {
    const expectedResult = INITIAL_STATE;
    expect(reducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle change action correctly', () => {
    const value = 'value';
    const name = 'name';
    const expectedResult = INITIAL_STATE.set(name, value);

    expect(reducer(INITIAL_STATE, change({ value, name }))).toEqual(expectedResult);
  });

  it('should handle save action correctly', () => {
    const expectedResult = INITIAL_STATE
      .set('loading', true);

    expect(reducer(INITIAL_STATE, save())).toEqual(expectedResult);
  });

  it('should handle saveSuccess action correctly', () => {
    const data = 'data';
    const expectedResult = INITIAL_STATE;

    expect(reducer(INITIAL_STATE, saveSuccess({ data }))).toEqual(expectedResult);
  });

  it('should handle saveError action correctly', () => {
    const expectedResult = INITIAL_STATE;

    expect(reducer(INITIAL_STATE, saveError())).toEqual(expectedResult);
  });
});
