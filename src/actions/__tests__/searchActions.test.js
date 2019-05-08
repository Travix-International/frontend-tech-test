import { searchActionTypes as st } from '../actionTypes';
import { 
  searchTaskRequest,
  searchTaskSuccess,
  searchTaskFail,
  searchTaskAction
} from '../searchActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { requester } from '../../utils/api';
import MockAdapter from 'axios-mock-adapter';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

const mockApi = new MockAdapter(requester);

describe('Search action test', () => {
  afterEach(() => {
    store.clearActions();
  });

  it('should return the search query for request', () => {
    expect(searchTaskRequest('anything')).toEqual({
      type: st.SEARCH_TASK_REQUEST,
      payload: 'anything'
    });
  });

  it('should return search results when request success', () => {
    expect(searchTaskSuccess(['t_1', 't_2'])).toEqual({
      type: st.SEARCH_TASK_SUCCESS,
      payload: ['t_1', 't_2']
    });
  });

  it('should return error message when request failed', () => {
    expect(searchTaskFail('error')).toEqual({
      type: st.SEARCH_TASK_FAIL,
      error: 'error'
    });
  });

  it('should create SEARCH_TASK_SUCCESS action when performs searching', async () => {
    const results = ['t_1', 't_2'];
    mockApi.onGet('/task/search/something').reply(200, { results });
    const expectedActions = [
      { type: st.SEARCH_TASK_REQUEST, payload: 'something' },
      { type: st.SEARCH_TASK_SUCCESS, payload: results }
    ];

    await store.dispatch(searchTaskAction('something'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create SEARCH_TASK_FAIL action when searching failed', async () => {
    const e = new Error('Network Error');
    mockApi.onGet('/task/search/something').networkError();
    const expectedActions = [
      { type: st.SEARCH_TASK_REQUEST, payload: 'something' },
      { type: st.SEARCH_TASK_FAIL, error: e }
    ];

    await store.dispatch(searchTaskAction('something'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});