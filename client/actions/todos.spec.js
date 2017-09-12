import * as actions from './todos';
import * as constants from '../constants';

describe('todos reducer', () => {
  it(`requestTodos should create ${constants.REQUEST_TODOS} action`, () => {
    expect(actions.requestTodos('active')).toEqual({
      type: constants.REQUEST_TODOS,
      filter: 'active',
    })
  });
  it(`receiveTodos should create ${constants.RECEIVE_TODOS} action`, () => {
    expect(actions.receiveTodos({})).toEqual({
      type: constants.RECEIVE_TODOS,
      payload: {},
    })
  });
  it(`requestTodosError should create ${constants.REQUEST_TODOS_ERROR} action`, () => {
    expect(actions.requestTodosError('message')).toEqual({
      type: constants.REQUEST_TODOS_ERROR,
      error: 'message',
    })
  });

  it(`requestNextTodos should create ${constants.REQUEST_NEXT_TODOS} action`, () => {
    expect(actions.requestNextTodos(2, 'active')).toEqual({
      type: constants.REQUEST_NEXT_TODOS,
      page: 2,
      filter: 'active',
    })
  });
  it(`receiveNextTodos should create ${constants.RECEIVE_NEXT_TODOS} action`, () => {
    expect(actions.receiveNextTodos({})).toEqual({
      type: constants.RECEIVE_NEXT_TODOS,
      payload: {},
    })
  });
  it(`requestNextTodosError should create ${constants.REQUEST_NEXT_TODOS_ERROR} action`, () => {
    expect(actions.requestNextTodosError('message')).toEqual({
      type: constants.REQUEST_NEXT_TODOS_ERROR,
      error: 'message',
    })
  });

  it(`requestTodo should create ${constants.REQUEST_TODO} action`, () => {
    expect(actions.requestTodo(1)).toEqual({
      type: constants.REQUEST_TODO,
      id: 1,
    })
  });
  it(`receiveTodo should create ${constants.RECEIVE_TODO} action`, () => {
    expect(actions.receiveTodo({})).toEqual({
      type: constants.RECEIVE_TODO,
      payload: {},
    })
  });
  it(`requestTodoError should create ${constants.REQUEST_TODO_ERROR} action`, () => {
    expect(actions.requestTodoError('message')).toEqual({
      type: constants.REQUEST_TODO_ERROR,
      error: 'message',
    })
  });

  it(`requestAddTodo should create ${constants.REQUEST_TODO_ADD} action`, () => {
    expect(actions.requestAddTodo({ title: test, description: test})).toEqual({
      type: constants.REQUEST_TODO_ADD,
      todo: { title: encodeURI(test), description: encodeURI(test)},
    })
  });
  it(`receiveAddTodo should create ${constants.RECEIVE_TODO_ADD} action`, () => {
    expect(actions.receiveAddTodo({})).toEqual({
      type: constants.RECEIVE_TODO_ADD,
      payload: {},
    })
  });
  it(`requestAddTodoError should create ${constants.REQUEST_TODO_ADD_ERROR} action`, () => {
    expect(actions.requestAddTodoError('message')).toEqual({
      type: constants.REQUEST_TODO_ADD_ERROR,
      error: 'message',
    })
  });

  it(`requestDeleteTodo should create ${constants.REQUEST_TODO_DELETE} action`, () => {
    expect(actions.requestDeleteTodo(1)).toEqual({
      type: constants.REQUEST_TODO_DELETE,
      id: 1,
    })
  });
  it(`receiveDeleteTodo should create ${constants.RECEIVE_TODO_DELETE} action`, () => {
    expect(actions.receiveDeleteTodo(1)).toEqual({
      type: constants.RECEIVE_TODO_DELETE,
      id: 1,
    })
  });
  it(`requestDeleteTodoError should create ${constants.REQUEST_TODO_DELETE_ERROR} action`, () => {
    expect(actions.requestDeleteTodoError('message')).toEqual({
      type: constants.REQUEST_TODO_DELETE_ERROR,
      error: 'message',
    })
  });

  it(`requestUpdateTodo should create ${constants.REQUEST_TODO_UPDATE} action`, () => {
    const todo = {
      id: 1,
      title: 'Maecenas neque imperdiet lorem aliquam.',
      description: 'Dignissim ultrices nulla mattis auctor proin arcu. Etiam commodo sed augue ornare tristique elit consequat tempor nam lacinia non vitae aliquam ultrices tincidunt adipiscing au.',
      completed: false
    }
    expect(actions.requestUpdateTodo(todo)).toEqual({
      type: constants.REQUEST_TODO_UPDATE,
      todo: {
        ...todo,
        title: encodeURI(todo.title),
        description: encodeURI(todo.description),
      },
    })
  });
  it(`receiveUpdateTodo should create ${constants.RECEIVE_TODO_UPDATE} action`, () => {
    expect(actions.receiveUpdateTodo({})).toEqual({
      type: constants.RECEIVE_TODO_UPDATE,
      payload: {},
    })
  });
  it(`requestUpdateTodoError should create ${constants.REQUEST_TODO_UPDATE_ERROR} action`, () => {
    expect(actions.requestUpdateTodoError('message')).toEqual({
      type: constants.REQUEST_TODO_UPDATE_ERROR,
      error: 'message',
    })
  });
});
