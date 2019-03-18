import * as types from '../../actions/actionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from '../../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
describe('actions', () => {
  it('editTodo should create an action to edit a todo', () => {
    const id = 1;
    const expectedAction = {
      type: types.EDIT_TODO,
      id,
    };
    expect(actions.editTodo(id)).toEqual(expectedAction);
  });
  it('setFilter should create an action to set the filter', () => {
    const id = 1;
    const expectedAction = {
      type: types.SET_FILTER,
      filter: 'filter',
    };
    expect(actions.setFilter('filter')).toEqual(expectedAction);
  });
  it('toggleTodo should create an action to toggle todo', () => {
    const id = 1;
    const expectedAction = {
      type: types.TOGGLE_TODO,
      id: 1,
    };
    expect(actions.toggleTodo(id)).toEqual(expectedAction);
  });
});

describe('async actions', () => {
  beforeAll(() => {});
  beforeEach(() => {
    fetchMock.reset().restore();
    store = mockStore({ todos: [] });
  });

  it('fetchTodos should fetch succeful', () => {
    fetchMock.get('http://localhost:9001/tasks/1', {
      body: { todos: ['do something'] },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: types.FETCH_TODO_LOADING },
      { type: types.FETCH_TODO_RECEIVED, data: { todos: ['do something'] } },
    ];

    return store.dispatch(actions.fetchTodos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('fetchTodo should return error when failed call', () => {
    fetchMock.get('http://localhost:9001/tasks/2', 500, {
      overwriteRoutes: false,
    });

    const expectedActions = [
      { type: types.FETCH_TODO_LOADING },
      { type: types.FETCH_TODO_ERROR, response: "failed to load ToDo's" },
    ];

    return store.dispatch(actions.fetchTodos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('addTodo should return add action', () => {
    fetchMock.post('http://localhost:9001/task/create/title/description', {
      id: 1,
    });

    const expectedActions = [
      { type: types.ADD_TODO_LOADING },
      {
        type: types.ADD_TODO_SAVED,
        description: 'description',
        id: 1,
        title: 'title',
      },
    ];

    return store.dispatch(actions.addTodo('title', 'description')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('addTodo should return action error when failed call', () => {
    fetchMock.post('http://localhost:9001/task/create/title/description', 500);

    const expectedActions = [
      { type: types.ADD_TODO_LOADING },
      {
        type: types.ADD_TODO_ERROR,
        response: 'failed to save todo.',
      },
    ];

    return store.dispatch(actions.addTodo('title', 'description')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('deleteTodo should return delete action', () => {
    fetchMock.delete('http://localhost:9001/task/delete/1', {});

    const expectedActions = [
      { type: types.REMOVE_TODO_LOADING },
      {
        type: types.REMOVE_TODO_DELETED,
        id: 1,
      },
    ];

    return store.dispatch(actions.deleteTodo(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('deleteTodo should return action error when failed call', () => {
    fetchMock.delete('http://localhost:9001/task/delete/1', 500);

    const expectedActions = [
      { type: types.REMOVE_TODO_LOADING },
      {
        type: types.REMOVE_TODO_ERROR,
        response: 'failed to delete todo.',
      },
    ];

    return store.dispatch(actions.deleteTodo(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('saveTodo should return save action', () => {
    fetchMock.put('http://localhost:9001/task/update/1/title/description', {});

    const expectedActions = [
      { type: types.SAVE_TODO_LOADING },
      {
        type: types.SAVE_TODO_SAVED,
        description: 'description',
        id: 1,
        title: 'title',
      },
    ];

    return store
      .dispatch(actions.saveTodo(1, 'title', 'description'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('saveTodo should return action error when failed call', () => {
    fetchMock.put('http://localhost:9001/task/update/1/title/description', 500);

    const expectedActions = [
      { type: types.SAVE_TODO_LOADING },
      {
        type: types.SAVE_TODO_ERROR,
        response: 'failed to update todo.',
      },
    ];

    return store
      .dispatch(actions.saveTodo(1, 'title', 'description'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
