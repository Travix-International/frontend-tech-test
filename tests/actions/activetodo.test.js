import { setActiveTodo, unsetActiveTodo } from '../../src/actions/activetodo.js';
import { SET_ACTIVE_TODO } from '../../src/constants/actions.js';

describe('Active todo actions', () => {
  it('Set active todo', () => {
    const taskIdMock = 123;

    const expected = {
      type: SET_ACTIVE_TODO,
      payload: taskIdMock
    }

    expect(setActiveTodo(taskIdMock)).toEqual(expected);
  });

  it('Unset active todo', () => {
    const expected = {
      type: SET_ACTIVE_TODO,
      payload: null
    }

    expect(unsetActiveTodo()).toEqual(expected);
  });
});