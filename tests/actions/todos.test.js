import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo
} from '../../src/actions/todos.js';
import {
  GET_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO
} from '../../src/constants/actions.js';

const mockStore = configureStore([thunk]);
let store;

describe('Todos actions', () => {

  afterEach(function() {
    moxios.uninstall();
  });

  it('Get todos', async () => {
    const todosMock = [
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
    
    setup({
      response: {
        tasks: todosMock
      }
    });
    
    const expected = [
      { type: GET_TODOS, payload: todosMock }
    ];
    
    await store.dispatch(getTodos());
    expect(store.getActions()).toEqual(expected);
  });

  it('Add todo', async () => {
    const todoMock = {
      title: 'test',
      description: 'test'
    }

    const idMock = 4;

    setup({
      status: 201,
      response: {
        task: {
          ...todoMock,
          id: idMock
        }
      }
    });

    const expected = [
      { 
        type: ADD_TODO,
        payload: {
          id: 4,
          title: 'test',
          description: 'test'
        }
      }
    ];

    await store.dispatch(addTodo(todoMock));
    expect(store.getActions()).toEqual(expected);
  });

  it('Update todo', async () => {
    const todoMock = {
      id: 4,
      title: 'test',
      description: 'test'
    }

    setup({
      status: 204,
      response: {
        task: todoMock
      }
    });

    const expected = [
      {
        type: UPDATE_TODO,
        payload: todoMock
      }
    ]

    await store.dispatch(updateTodo(todoMock));
    expect(store.getActions()).toEqual(expected);
  });

  it('Delete todo', async () => {
    const idMock = 1;

    setup({
      response: {
        id: idMock
      }
    });

    const expected = [
      { type: DELETE_TODO, payload: idMock }
    ];

    await store.dispatch(deleteTodo(idMock));
    expect(store.getActions()).toEqual(expected);
  });
});

const setup = props => {
  const options = {
    status: 200,
    response: {},
    todos: [],
    ...props
  };

  store = mockStore({
    todos: options.todos
  });

  moxios.install();

  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status: options.status,
      response: options.response
    });
  });
}