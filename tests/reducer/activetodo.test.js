import activeTodo from '../../src/reducer/activetodo.js';
import { SET_ACTIVE_TODO } from '../../src/constants/actions.js';

describe('Active todo reducer', () => {
  it('Set todo', () => {
    const todoIdMock = 123;

    expect(
      activeTodo(null, {
        type: SET_ACTIVE_TODO,
        payload: todoIdMock
      })
    ).toBe(todoIdMock);
  });
});