import todos from '../../src/reducer/todos.js';
import {
  GET_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO
} from '../../src/constants/actions.js';

const initialTodos = [
  {
    id: '1',
    title: 'first todo',
    description: 'first description'
  },
  {
    id: '2',
    title: 'second todo',
    description: 'second description'
  },
  {
    id: '3',
    title: 'third todo',
    description: 'third description'
  }
];

describe('Todos reducer', () => {
  it('Get todos', () => {
    expect(
      todos([], {
        type: GET_TODOS,
        payload: initialTodos
      })
    ).toEqual(initialTodos);
  });

  it('Add todo', () => {
    const todoMock = {
      id: '4',
      title: 'forth todo',
      description: 'forth description'
    };

    expect(
      todos(initialTodos, {
        type: ADD_TODO,
        payload: todoMock
      })
    ).toEqual([...initialTodos, todoMock]);
  });

  it('Update todo', () => {
    const updatedTodoMock = {
      id: '2',
      title: 'updated second todo',
      description: 'updated second description'
    };

    const updatedTodoIndex = initialTodos.findIndex(el => el.id === updatedTodoMock.id);
    const updatedTodos = [ ...initialTodos ];
    updatedTodos.splice(updatedTodoIndex, 1, updatedTodoMock);

    expect(
      todos(initialTodos, {
        type: UPDATE_TODO,
        payload: updatedTodoMock
      })
    ).toEqual(updatedTodos);
  });

  it('Delete Todo', () => {
    const idMock = '3';

    const deletedTodoIndex = initialTodos.findIndex(el => el.id === idMock);
    const updatedTodos = [ ...initialTodos ];
    updatedTodos.splice(deletedTodoIndex, 1);

    expect(
      todos(initialTodos, {
        type: DELETE_TODO,
        payload: idMock
      })
    ).toEqual(updatedTodos);
  });
});