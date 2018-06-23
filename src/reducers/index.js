const initialState = {
  tasks: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.data,
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