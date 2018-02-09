import todoFilter from '../../../src/javascript/reducers/todoFilter';

describe('todoFilter reducer', () => {
  it('should handle initial state', () => {
    expect(todoFilter(undefined, {})).toEqual({
      filter: 'SHOW_ALL',
      searching: false,
      searchValue: '',
    });
  });

  it('should handle SET_VISIBILITY_FILTER', () => {
    expect(todoFilter(
      {
        filter: 'SHOW_ALL',
        searching: false,
        searchValue: '',
      },
      {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_COMPLETED',
      },
    )).toEqual({
      filter: 'SHOW_COMPLETED',
      searching: false,
      searchValue: '',
    });

    expect(todoFilter(
      {
        filter: 'SHOW_COMPLETED',
        searching: false,
        searchValue: '',
      },
      {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_ACTIVE',
      },
    )).toEqual({
      filter: 'SHOW_ACTIVE',
      searching: false,
      searchValue: '',
    });

    expect(todoFilter(
      {
        filter: 'SHOW_ACTIVE',
        searching: false,
        searchValue: '',
      },
      {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_ALL',
      },
    )).toEqual({
      filter: 'SHOW_ALL',
      searching: false,
      searchValue: '',
    });
  });

  it('should handle SET_SEARCH_FILTER', () => {
    expect(todoFilter(
      {
        filter: 'SHOW_ALL',
        searching: false,
        searchValue: '',
      },
      {
        type: 'SET_SEARCH_FILTER',
        filter: 'SHOW_ALL',
        searching: true,
        searchValue: 'Tod',
      },
    )).toEqual({
      filter: 'SHOW_ALL',
      searching: true,
      searchValue: 'Tod',
    });
  });
});
