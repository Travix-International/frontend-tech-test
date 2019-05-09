import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { requester } from '../../utils/api';
import { taskActionTypes as actionTypes } from '../actionTypes';
import * as actionCreators from '../apiActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

const mockApi = new MockAdapter(requester);

describe('Async actions test', () => {
  afterEach(() => {
    store.clearActions();
  });

  it('should create FETCH_ALL_TASKS_SUCCESS action when loading is done', async () => {
    const tasks = [
      { id: 't_1', title: 'todo_1', description: 'todo1', completed: false },
      { id: 't_2', title: 'todo_2', description: 'todo2', completed: true },
    ];
    mockApi
      .onGet('/tasks')
      .reply(200, { tasks });

    const expectedActions = [
      { type: actionTypes.FETCH_ALL_TASKS_REQUEST },
      { 
        type: actionTypes.FETCH_ALL_TASKS_SUCCESS, 
        payload: tasks
      }
    ];

    await store.dispatch(actionCreators.fetchAllTasks());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create ADD_TASK_SUCCESS action when task is added', async () => {
    const newTask = { 
      id: 't_3', 
      title: 'todo_3', 
      description: 'todo3', 
      completed: false 
    };
    mockApi
      .onPost('/task/create')
      .reply(201, { task: newTask });

    const expectedActions = [
      { type: actionTypes.ADD_TASK_REQUEST },
      { 
        type: actionTypes.ADD_TASK_SUCCESS, 
        payload: newTask
      }
    ];
    await store.dispatch(actionCreators.addTaskAction('todo_3', 'todo3'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create EDIT_TASK_SUCCESS action when edit is committed', async () => {
    const task = { 
      id: 't_2', 
      title: 'todo_2', 
      description: 'todo2'
    };
    mockApi
      .onPut('/task/update/t_2')
      .reply(204);

    const expectedActions = [
      { type: actionTypes.EDIT_TASK_REQUEST },
      { 
        type: actionTypes.EDIT_TASK_SUCCESS, 
        payload: task
      }
    ];
    await store.dispatch(actionCreators.editTaskAction('t_2', 'todo_2', 'todo2'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create TOGGLE_TASK_SUCCESS action when task has been toggled', async () => {
    mockApi
      .onPut('/task/toggle/t_2')
      .reply(204);

    const expectedActions = [
      { type: actionTypes.TOGGLE_TASK_REQUEST },
      { 
        type: actionTypes.TOGGLE_TASK_SUCCESS,
        payload: 't_2'
      }
    ];
    await store.dispatch(actionCreators.toggleTaskAction('t_2'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create DELETE_TASK_SUCCESS action when deleting is done', async () => {
    mockApi
      .onDelete('/task/delete/t_3')
      .reply(200);

    const expectedActions = [
      { type: actionTypes.DELETE_TASK_REQUEST },
      { 
        type: actionTypes.DELETE_TASK_SUCCESS,
        payload: 't_3'
      }
    ];
    await store.dispatch(actionCreators.deleteTaskAction('t_3'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create FETCH_ALL_TASKS_FAIL action when loading fails', async () => {
    const e = new Error('Network Error');
    mockApi
      .onGet('/tasks')
      .networkError();

    const expectedActions = [
      { type: actionTypes.FETCH_ALL_TASKS_REQUEST },
      { 
        type: actionTypes.FETCH_ALL_TASKS_FAIL, 
        error: e
      }
    ];

    await store.dispatch(actionCreators.fetchAllTasks());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create ADD_TASK_FAIL action when creation failed', async () => {
    const e = new Error('Network Error');
    mockApi
      .onPost('/task/create')
      .networkError();

    const expectedActions = [
      { type: actionTypes.ADD_TASK_REQUEST },
      { 
        type: actionTypes.ADD_TASK_FAIL, 
        error: e
      }
    ];
    await store.dispatch(actionCreators.addTaskAction('todo_3', 'todo3'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create EDIT_TASK_FAIL action when editing failed', async () => {
    const e = new Error('Network Error');
    mockApi
      .onPut('/task/update/t_2')
      .networkError();

    const expectedActions = [
      { type: actionTypes.EDIT_TASK_REQUEST },
      { 
        type: actionTypes.EDIT_TASK_FAIL, 
        error: e
      }
    ];
    await store.dispatch(actionCreators.editTaskAction('t_2', 'todo_2', 'todo2'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create TOGGLE_TASK_FAIL action when toggling failed', async () => {
    const e = new Error('Network Error');
    mockApi
      .onPut('/task/toggle/t_2')
      .networkError();

    const expectedActions = [
      { type: actionTypes.TOGGLE_TASK_REQUEST },
      { 
        type: actionTypes.TOGGLE_TASK_FAIL,
        error: e
      }
    ];
    await store.dispatch(actionCreators.toggleTaskAction('t_2'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create DELETE_TASK_SUCCESS action when deleting failed', async () => {
    const e = new Error('Network Error');
    mockApi
      .onDelete('/task/delete/t_3')
      .networkError();

    const expectedActions = [
      { type: actionTypes.DELETE_TASK_REQUEST },
      { 
        type: actionTypes.DELETE_TASK_FAIL,
        error: e
      }
    ];
    await store.dispatch(actionCreators.deleteTaskAction('t_3'));
    expect(store.getActions()).toEqual(expectedActions);
  });
}); 