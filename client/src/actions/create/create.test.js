/**
 * @fileoverview Test Suite: For creating the task.
 * @author Jayendra Sharan (http://jayendra.co.in)
 */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import actionTypes from '../../constants/actionTypes';
import mockServer from '../../constants/mockServer';
import createActions from '.';
import LABELS from '../../constants/labels';

const middlewares = [ thunk ];
const mockStore = configureMockStore (middlewares);

describe ('Create Action', () => {
  let store;
  beforeEach (() => {
    moxios.install ();
    store = mockStore ({ create: {} });
  });

  afterEach (() => {
    moxios.uninstall ();
    store = null;
  });

  it ('should create CREATE_SUCCESS action after creating a task', () => {
    const payload = mockServer.createRequest;
    moxios.wait (() => {
      const request = moxios.requests.mostRecent ();
      request.respondWith ({
        status: 200,
        response: mockServer.createResponse
      });
    });

    const expectedActions = [
      { type: actionTypes.TASK.CREATE_TASK.CREATE_START },
      { type: actionTypes.TASK.CREATE_TASK.CREATE_SUCCESS,
        data: mockServer.createResponse.data
      },
      {
        type: actionTypes.APP_DATA.ADD_IN_BUCKETS,
        task: mockServer.createResponse.data.task
      }
    ];

    return store.dispatch (createActions.createTask (payload)).then (() => {
      expect (store.getActions ()).toEqual (expectedActions);
    });
  });

  it ('should create CREATE_FAILED action after failed creation of task', () => {
    const payload = mockServer.createRequest;
    moxios.wait (() => {
      const request = moxios.requests.mostRecent ();
      request.respondWith ({
        status: 200,
        response: mockServer.createError
      });
    });

    const expectedActions = [
      { type: actionTypes.TASK.CREATE_TASK.CREATE_START },
      { type: actionTypes.TASK.CREATE_TASK.CREATE_FAILED,
        error: mockServer.createError.data
      }
    ];

    return store.dispatch (createActions.createTask (payload)).then (() => {
      expect (store.getActions ()).toEqual (expectedActions);
    });
  });

  it ('should create CREATE_FAILED action after failed in case of server error', () => {
    const payload = mockServer.createRequest;
    moxios.wait (() => {
      const request = moxios.requests.mostRecent ();
      request.respondWith ({
        status: 500
      });
    });

    const expectedActions = [
      { type: actionTypes.TASK.CREATE_TASK.CREATE_START },
      { type: actionTypes.TASK.CREATE_TASK.CREATE_FAILED,
        error: {
          'message': LABELS.ERROR_MESSAGE['500']
        }
      }
    ];

    return store.dispatch (createActions.createTask (payload)).then (() => {
      expect (store.getActions ()).toEqual (expectedActions);
    });
  });
})