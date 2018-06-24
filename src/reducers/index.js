const initialState = {
  tasks: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_TASK':
      return {
        ...state,
        tasks: [
          action.data,
          ...state.tasks,
        ],
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.data.id),
      };
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.data.id ? action.data : task),
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.data.id ? {
          ...task,
          completed: !task.completed
        } : task),
      };
    case 'LIST_TASKS':
      return {
        ...state,
        page: parseInt(action.page, 10),
        total: parseInt(action.total, 10),
        limit: parseInt(action.limit, 10),
        tasks: [
          ...state.tasks,
          ...action.data,
        ],
      };
    default:
      return state;
  }
};

module.exports = reducers;
