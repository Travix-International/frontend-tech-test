import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import actionTypes from '../../../src/javascript/constants/ActionTypes';
import * as actions from '../../../src/javascript/actions';

import testUtils from '../../../config/testUtils';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('todo actions', () => {
  it('listTodos should create LIST_TODOS action', () => {
    expect(actions.listTodos()).toEqual({
      type: actionTypes.LIST_TODOS,
    });
  });

  it('fetchTodos should create APP_FETCHING, LIST_TODOS & APP_READY actions', () => {
    const store = mockStore([]);
    const jestMock = testUtils.asyncActionSetup('RESOURCE_CREATED', [
      {
        id: 0,
        title: 'Test title 0',
        description: 'Test description',
        completed: true,
        deleted: false,
      },
      {
        id: 1,
        title: 'Test title 1',
        description: 'Test description',
        completed: false,
        deleted: false,
      },
    ]);

    window.fetch = jestMock;

    return store.dispatch(actions.fetchTodos()).then(() => {
      const expectedActions = store.getActions();

      expect(expectedActions.length).toBe(3);
      expect(expectedActions).toContainEqual({ type: actionTypes.APP_FETCHING });
      expect(expectedActions).toContainEqual({
        type: actionTypes.LIST_TODOS,
        todos: [
          {
            id: 0,
            title: 'Test title 0',
            description: 'Test description',
            completed: true,
            deleted: false,
          },
          {
            id: 1,
            title: 'Test title 1',
            description: 'Test description',
            completed: false,
            deleted: false,
          },
        ],
      });
      expect(expectedActions).toContainEqual({ type: actionTypes.APP_READY });
    });
  });

  it('listTodo should create LIST_TODO action', () => {
    const id = 1;
    expect(actions.listTodo(id)).toEqual({
      type: actionTypes.LIST_TODO,
      id,
    });
  });

  it('createTodo should create APP_FETCHING, CREATE_TODO & APP_READY actions', () => {
    const store = mockStore([]);

    const title = 'Todo title';
    const description = 'Todo description';

    const jestMock = testUtils.asyncActionSetup(
      'RESOURCE_CREATED',
      {
        id: 0,
        title,
        description,
        completed: false,
      },
      201,
    );

    window.fetch = jestMock;

    return store.dispatch(actions.createTodo(title, description)).then(() => {
      const expectedActions = store.getActions();

      expect(expectedActions.length).toBe(3);
      expect(expectedActions).toContainEqual({ type: actionTypes.APP_FETCHING });
      expect(expectedActions).toContainEqual({
        type: actionTypes.CREATE_TODO,
        todo: {
          id: 0,
          title,
          description,
          completed: false,
        },
      });
      expect(expectedActions).toContainEqual({ type: actionTypes.APP_READY });
    });
  });

  it('editTodoTitle should create EDIT_TODO_TITLE action', () => {
    const id = 1;
    const title = 'Todo title';
    const newTitle = 'Todo title 2';
    const description = 'Todo description';
    const store = mockStore([
      {
        id,
        title,
        description,
        completed: false,
      },
    ]);

    const jestMock = testUtils.asyncActionSetup('RESOURCE_UPDATED', {
      id,
      title: newTitle,
      description,
      completed: false,
    });

    window.fetch = jestMock;

    return store.dispatch(actions.editTodoTitle(id, newTitle)).then(() => {
      const expectedActions = store.getActions();

      expect(expectedActions.length).toBe(3);
      expect(expectedActions).toContainEqual({ type: actionTypes.APP_FETCHING });
      expect(expectedActions).toContainEqual({
        type: actionTypes.EDIT_TODO_TITLE,
        todo: {
          id,
          title: newTitle,
          description,
          completed: false,
        },
      });
      expect(expectedActions).toContainEqual({ type: actionTypes.APP_READY });
    });
  });

  it('editTodoDescription should create EDIT_TODO_DESCRIPTION action', () => {
    const id = 1;
    const title = 'Todo title';
    const description = 'Todo description';
    const newDescription = 'Todo description 2';
    const store = mockStore([
      {
        id,
        title,
        description,
        completed: false,
      },
    ]);

    const jestMock = testUtils.asyncActionSetup('RESOURCE_UPDATED', {
      id,
      title,
      description: newDescription,
      completed: false,
    });

    window.fetch = jestMock;

    return store.dispatch(actions.editTodoDescription(id, newDescription)).then(() => {
      const expectedActions = store.getActions();

      expect(expectedActions.length).toBe(3);
      expect(expectedActions).toContainEqual({ type: actionTypes.APP_FETCHING });
      expect(expectedActions).toContainEqual({
        type: actionTypes.EDIT_TODO_DESCRIPTION,
        todo: {
          id,
          title,
          description: newDescription,
          completed: false,
        },
      });
      expect(expectedActions).toContainEqual({ type: actionTypes.APP_READY });
    });
  });

  it('toggleTodo should create TOGGLE_TODO action', () => {
    const id = 1;
    const title = 'Todo title';
    const description = 'Todo description';
    const store = mockStore([
      {
        id,
        title,
        description,
        completed: false,
      },
    ]);

    const jestMock = testUtils.asyncActionSetup('RESOURCE_UPDATED', {
      id,
      title,
      description,
      completed: true,
    });

    window.fetch = jestMock;

    return store.dispatch(actions.toggleTodo(id)).then(() => {
      const expectedActions = store.getActions();

      expect(expectedActions.length).toBe(3);
      expect(expectedActions).toContainEqual({ type: actionTypes.APP_FETCHING });
      expect(expectedActions).toContainEqual({
        type: actionTypes.TOGGLE_TODO,
        todo: {
          id,
          title,
          description,
          completed: true,
        },
      });
      expect(expectedActions).toContainEqual({ type: actionTypes.APP_READY });
    });
  });

  it('deleteTodo should create DELETE_TODO action', () => {
    const id = 1;
    const title = 'Todo title';
    const description = 'Todo description';
    const store = mockStore([
      {
        id,
        title,
        description,
        completed: false,
      },
    ]);

    const jestMock = testUtils.asyncActionSetup('', {}, 204);

    window.fetch = jestMock;

    return store.dispatch(actions.deleteTodo(id)).then(() => {
      const expectedActions = store.getActions();

      expect(expectedActions.length).toBe(3);
      expect(expectedActions).toContainEqual({ type: actionTypes.APP_FETCHING });
      expect(expectedActions).toContainEqual({
        type: actionTypes.DELETE_TODO,
        todo: {
          id,
        },
      });
      expect(expectedActions).toContainEqual({ type: actionTypes.APP_READY });
    });
  });
});
