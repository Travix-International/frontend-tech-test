const defaultState = {
  tasks: [],
};

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case 'CREATE_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action,
        ],
      };
    case 'LIST_TASKS':
      return {
        ...state,
        tasks: action.data,
      };
    default:
      return state;
  }
};

module.exports = reducers;