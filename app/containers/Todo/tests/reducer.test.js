import { fromJS } from 'immutable';

import reducer, { INITIAL_STATE } from '../reducer';
import { saveSuccess } from '../Form/actions';
import {
  fetch,
  fetchSuccess,
  fetchError,
  update,
  updateSuccess,
  updateError,
  remove,
  removeSuccess,
  removeError
} from '../actions';

describe('Todo Reducer', () => {
  it('should return the initial state', () => {
    const expectedResult = INITIAL_STATE;
    expect(reducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle fetch action correctly', () => {
    const expectedResult = INITIAL_STATE.set('loading', true);

    expect(reducer(INITIAL_STATE, fetch())).toEqual(expectedResult);
  });

  it('should handle fetchSuccess action correctly', () => {
    const data = {};
    const expectedResult = INITIAL_STATE
      .set('loading', false)
      .set('data', fromJS(data));

    expect(reducer(INITIAL_STATE, fetchSuccess({ data }))).toEqual(expectedResult);
  });

  it('should handle fetchError action correctly', () => {
    const error = {};
    const expectedResult = INITIAL_STATE
      .set('loading', false);

    expect(reducer(INITIAL_STATE, fetchError({ error }))).toEqual(expectedResult);
  });

  it('should handle update action correctly', () => {
    const index = 0;
    const state = INITIAL_STATE.set('data', fromJS([{
      loading: false
    }]));
    const expectedResult = state
      .set('data', fromJS([{
        loading: true
      }]));

    expect(reducer(state, update({ index }))).toEqual(expectedResult);
  });

  it('should handle updateSuccess action correctly', () => {
    const index = 0;
    const state = INITIAL_STATE.set('data', fromJS([{
      loading: true
    }]));
    const expectedResult = state
      .set('data', fromJS([{
        loading: false
      }]));

    expect(reducer(state, updateSuccess({ index }))).toEqual(expectedResult);
  });

  it('should handle updateError action correctly', () => {
    const index = 0;
    const state = INITIAL_STATE.set('data', fromJS([{
      loading: true
    }]));
    const expectedResult = state
      .set('data', fromJS([{
        loading: false
      }]));

    expect(reducer(state, updateError({ index }))).toEqual(expectedResult);
  });

  it('should handle remove action correctly', () => {
    const index = 0;
    const state = INITIAL_STATE.set('data', fromJS([{
      loading: false
    }]));
    const expectedResult = state
      .set('data', fromJS([{
        loading: true
      }]));

    expect(reducer(state, remove({ index }))).toEqual(expectedResult);
  });

  it('should handle removeSuccess action correctly', () => {
    const index = 0;
    const state = INITIAL_STATE.set('data', fromJS([{
      removed: false
    }]));
    const expectedResult = state
      .set('data', fromJS([{
        removed: true
      }]));

    expect(reducer(state, removeSuccess({ index }))).toEqual(expectedResult);
  });

  it('should handle removeError action correctly', () => {
    const index = 0;
    const state = INITIAL_STATE.set('data', fromJS([{
      loading: true
    }]));
    const expectedResult = state
      .set('data', fromJS([{
        loading: false
      }]));

    expect(reducer(state, removeError({ index }))).toEqual(expectedResult);
  });

  it('should handle saveSuccess action correctly', () => {
    const data = {
      id: 'id1'
    };
    const state = INITIAL_STATE.set('data', fromJS([{
      id: 'id'
    }]));
    const expectedResult = state
      .set('data', fromJS([data, {
        id: 'id'
      }]));

    expect(reducer(state, saveSuccess({ data }))).toEqual(expectedResult);
  });
});
