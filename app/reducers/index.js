function assign(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

function max(collection, property) {
  return collection.reduce((prev, current) => {
    if (current[property] > prev) {
      prev = current[property];
    }

    return prev;
  }, 0);
}

const initialState = {
  tasks: {
    status: 'invalid',
    data: [],
    error: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_TASKS':
      return assign(state, {
        tasks: {
          error: null,
          status: 'fetching',
          data: state.tasks.data,
        },
      });
    case 'RECEIVE_TASKS':
      return assign(state, {
        tasks: {
          error: null,
          status: 'succeeded',
          data: action.tasks,
        },
      });
    case 'FAIL_FETCH_TASKS':
      return assign(state, {
        tasks: {
          status: 'errored',
          error: action.error,
        },
      });
    case 'ADD_TASK':
      return assign(state, {
        tasks: assign(state.tasks, {
          data: [
            ...state.tasks.data,
            assign(action.task, { id: max(state.tasks.data, 'id') + 1 }),
          ],
        }),
      });
    case 'EDIT_TASK':
      return assign(state, {
        tasks: assign(state.tasks, {
          data: state.tasks.data.map(task => (task.id === action.task.id ? action.task : task)),
        }),
      });
    case 'TOGGLE_COMPLETE_TASK':
      return assign(state, {
        tasks: assign(state.tasks, {
          data: state.tasks.data.map(task => (task.id === action.id ? assign(task, { completed: !task.completed }) : task)),
        }),
      });
    case 'DELETE_TASK':
      return assign(state, {
        tasks: assign(state.tasks, {
          data: state.tasks.data.filter(task => task.id !== action.id),
        }),
      });
    default:
      return state;
  }
};
