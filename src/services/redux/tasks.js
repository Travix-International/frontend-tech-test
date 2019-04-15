// Constants

export const CREATE = "tasks/CREATE";
export const FETCH = "tasks/FETCH";
export const UPDATE = "tasks/UPDATE";
export const DELETE = "tasks/DELETE";
export const RECEIVED = "tasks/RECEIVED";

// Actions

export const createTask = ({ title, description }) => ({
  type: CREATE,
  title,
  description,
});

export const fetchTasks = () => ({
  type: FETCH,
});

export const updateTask = ({ id, title, description }) => ({
  type: UPDATE,
  id,
  title,
  description,
});

export const deleteTask = ({ id }) => ({
  type: DELETE,
  id,
});

// Reducers

export const defaultState = {
  tasks: [],
  loading: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        loading: true,
      };
    case FETCH:
      return {
        ...state,
        loading: true,
      };
    case UPDATE:
      return {
        ...state,
        loading: true,
      };
    case DELETE:
      return {
        ...state,
        loading: true,
      };
    case RECEIVED:
      return {
        ...state,
        tasks: action.tasks,
        loading: false,
      };
    default:
      return state;
  }
};

// Selectors

export const getTasks = state => state.tasks;

export default reducer;
