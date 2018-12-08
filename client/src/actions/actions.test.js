import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import actionTypes from './../constants/actionTypes';
import mockServer from '../constants/mockServer';
import actions from '.';

const middlewares = [ thunk ];
const mockStore = configureMockStore (middlewares);

describe ('All actions for of the app', () => {
  let store;
  
  beforeEach (() => {
    store = mockStore ({appData: {}});
    moxios.install ();
  });

  afterEach (() => {
    store = null;
    moxios.uninstall ();
  });

  it ('should create FETCH_APP_DATA_SUCCESS action after successful API call', () => {
    moxios.wait (() => {
      const request = moxios.requests.mostRecent ();
      request.respondWith ({
        status: 200,
        response: mockServer.fetchAppDataSuccess
      });
    });

    const expectedActions = [
      { type: actionTypes.APP_DATA.FETCH_APP_DATA_START },
      { type: actionTypes.APP_DATA.FETCH_APP_DATA_SUCCESS, data: mockServer.fetchAppDataSuccess }
    ]

    return store.dispatch (actions.fetchAppData ()).then (() => {
      expect (store.getActions ()).toEqual (expectedActions);
    });
  });

  it ('should create FETCH_APP_DATA_FAILED action after successful API call', () => {
    moxios.wait (() => {
      const request = moxios.requests.mostRecent ();
      request.respondWith ({
        status: 400,
        response: mockServer.fetchAppDataError
      });
    });

    const expectedActions = [
      { type: actionTypes.APP_DATA.FETCH_APP_DATA_START },
      { type: actionTypes.APP_DATA.FETCH_APP_DATA_FAILED, error: mockServer.fetchAppDataError }
    ]

    return store.dispatch (actions.fetchAppData ()).then (() => {
      expect (store.getActions ()).toEqual (expectedActions);
    });
  })

});