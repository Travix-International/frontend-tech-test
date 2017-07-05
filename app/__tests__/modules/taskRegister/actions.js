import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as types from './../../../src/constants';
import * as actions from './../../../src/modules/taskRegister/actions';
import { config } from './../../../src/config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Main actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('Test task list action sync', () => {
    const _id = '';
    const title = 'Title jest 1';
    const description = 'Description jest 1';
    const date = '2017-07-05';
    const completed = true;
    const expectedAction = {
      type: types.TASK_SAVE,
      _id,
      title,
      description,
      date,
      completed
    };
    expect(actions.taskSaveAction(_id, title, description, date, completed))
      .toEqual(expectedAction);
  });

  it('Test task post action', () => {
    const _id = '0';
    const title = 'Title test post jest 1';
    const description = 'Description test post jest 1';
    const date = '2017-07-05';
    const completed = true;
    const history = { push: () => {} };

    nock(config.api)
      .post('/task')
      .reply(200, { _id });

    const expectedActions = [
      { type: types.TASK_REQUEST },
      {
        type: types.NOTIFICATION,
        show: true,
        success: true,
        message: 'Task saved!'
      },
      {
        type: types.TASK_SAVE,
        _id,
        title,
        description,
        date,
        completed
      },
    ];

    const store = mockStore({ tasks: {} });

    return store.dispatch(actions
      .taskSave(_id,
        title,
        description,
        date,
        completed,
        history
      )).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('Test task put action', () => {
    const _id = '1';
    const title = 'Title test post jest 2';
    const description = 'Description test post jest 2';
    const date = '2017-07-05';
    const completed = true;
    const history = { push: () => {} };

    nock(config.api)
      .put('/task/1')
      .reply(200, { _id });

    const expectedActions = [
      { type: types.TASK_REQUEST },
      {
        type: types.NOTIFICATION,
        show: true,
        success: true,
        message: 'Task saved!'
      },
      {
        type: types.TASK_SAVE,
        _id,
        title,
        description,
        date,
        completed
      },
    ];

    const store = mockStore({ tasks: {} });

    return store.dispatch(actions
      .taskSave(_id,
        title,
        description,
        date,
        completed,
        history
      )).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
