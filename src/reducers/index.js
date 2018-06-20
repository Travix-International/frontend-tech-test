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
          {
            title: action.title,
            description: action.description,
          },
        ],
      };
    default:
      return state;
  }
};

module.exports = reducers;