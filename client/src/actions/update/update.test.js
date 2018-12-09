/**
 * @fileoverview Test Suite: For updating the task.
 * @author Jayendra Sharan (http://jayendra.co.in)
 */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import actionTypes from '../../constants/actionTypes';
import mockServer from '../../constants/mockServer';
import updateActions from '.';

const middlewares = [ thunk ];
const mockStore = configureMockStore (middlewares);

describe ('Update action for of the app', () => {
  let store;
  
  beforeEach (() => {
    store = mockStore ({appData: {}});
    moxios.install ();
  });

  afterEach (() => {
    store = null;
    moxios.uninstall ();
  });

  it ('should create UPDATE_SUCCESS action after successful update', () => {
    moxios.wait (() => {
      const request = moxios.requests.mostRecent ();
      request.respondWith ({
        status: 200,
        response: mockServer.sampleTask
      });
    });

    const expectedActions = [
      {
        type: actionTypes.TASK.UPDATE_TASK.UPDATE_START,
        id: mockServer.updateRequestId
      },
      {
        type: actionTypes.TASK.UPDATE_TASK.UPDATE_SUCCESS,
        task: mockServer.sampleTask.data.task
      },
      {
        type: actionTypes.APP_DATA.UPDATE_COUNT,
        allCount: mockServer.sampleTask.data.allCount,
        doneCount: mockServer.sampleTask.data.doneCount,
        pendingCount: mockServer.sampleTask.data.pendingCount
      },
      {
        type: actionTypes.APP_DATA.UPDATE_BUCKETS,
        task: mockServer.sampleTask.data.task
      }
    ]

    return store.dispatch (updateActions
                            .updateTask ( mockServer.updateRequestId,
                                          mockServer.updateRequest)).then (() => {
      expect (store.getActions ()).toEqual (expectedActions);
    });
  });

  it ('should create an UPDATE_FAILED action if update fails', () => {
    moxios.wait (() => {
      const request = moxios.requests.mostRecent ();
      request.respondWith ({
        status: 500,
        response: mockServer.updateFailed
      });
    });

    const expectedActions = [
      { type: actionTypes.TASK.UPDATE_TASK.UPDATE_START, id: mockServer.updateRequestId },
      { type: actionTypes.TASK.UPDATE_TASK.UPDATE_FAILED,
        error: mockServer.updateFailed,
        status: 500,
        id: mockServer.updateRequestId
      }
    ];

    return store.dispatch (updateActions.updateTask (mockServer.updateRequestId, mockServer.updateRequest))
            .then (() =>{
              expect (store.getActions ()).toEqual (expectedActions);
            });
  });

});