import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as actions from './../../../src/modules/task/actions';
import * as types from './../../../src/constants';
import { config } from './../../../src/config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Main actions sync', () => {
  it('Test task list action', () => {
    const tasks = [];
    const expectedAction = {
      type: types.TASK_LIST,
      tasks
    };
    expect(actions.taskListAction(tasks)).toEqual(expectedAction);
  });

  it('Test task delete action', () => {
    const id = '';
    const expectedAction = {
      type: types.TASK_DELETE,
      id
    };
    expect(actions.taskDeleteAction(id)).toEqual(expectedAction);
  });
});

describe('Main actions async', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('Test task list action', () => {
    const copyTasks = [
      { _id: '1', title: '11' },
      { _id: '2', title: '22' }
    ];

    nock(config.api)
      .get('/task')
      .reply(200, copyTasks);

    const expectedActions = [
      { type: types.TASK_REQUEST },
      {
        type: types.TASK_LIST,
        tasks: copyTasks
      }
    ];

    const store = mockStore({ tasks: {} });

    return store.dispatch(actions.taskList()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Test task delete action', () => {
    nock(config.api)
      .delete('/task/1')
      .reply(200, { ok: 1 });

    const expectedActions = [
      { type: types.TASK_REQUEST },
      {
        type: types.NOTIFICATION,
        show: true,
        success: true,
        message: 'Task removed!'
      },
      {
        type: types.TASK_DELETE,
        id: 1
      },
    ];

    const store = mockStore({ tasks: {} });

    return store.dispatch(actions.taskDelete(1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
