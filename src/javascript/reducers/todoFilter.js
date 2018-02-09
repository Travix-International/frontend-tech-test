const todosFilter = (
  state = {
    filter: 'SHOW_ALL',
    searching: false,
    searchValue: '',
  },
  action,
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return { ...state, filter: action.filter };

    case 'SET_SEARCH_FILTER':
      return {
        ...state,
        filter: action.filter,
        searching: action.searching,
        searchValue: action.searchValue,
      };
    default:
      return state;
  }
};

export default todosFilter;
