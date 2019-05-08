import {
  searchTask,
  clearSearch,
  searchTaskRequest,
  searchTaskSuccess
} from '../../actions/searchActions';
import searchReducer from '../search';

describe('Search reducer test', () => {
  it('should return initial state when action is not matched', () => {
    expect(searchReducer(undefined, {})).toEqual({});
  });

  it('should set search query', () => {
    const initState = { query: 'query' };
    const action = searchTaskRequest('new query');
    expect(searchReducer(initState, action)).toEqual({ query: 'new query' }) ;
  });

  it('should clear search query', () => {
    const initState = { query: 'query' };
    const action = clearSearch;
    expect(searchReducer(initState, action)).toEqual({ query: '' });
  });

  it('should update search results', () => {
    const initState = { results: ['t_1', 't_2'] };
    const action = searchTaskSuccess(['t_3', 't_4']);
    expect(searchReducer(initState, action)).toEqual({ results: ['t_3', 't_4'] })
  });
});