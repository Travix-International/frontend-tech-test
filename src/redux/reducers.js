import {
  REQUEST_TASKS,
  RECEIVE_TASKS,
  REQUEST_ADD_TASK,
  RECEIVE_ADD_TASK,
  REQUEST_EDIT_TASK,
  RECEIVE_EDIT_TASK,
  FAIL_EDIT_TASK,
  REQUEST_DELETE_TASK,
  RECEIVE_DELETE_TASK,
  FAIL_DELETE_TASK,
  DRAFT_TASK,
  DISCARD_DRAFT,
  FILTER_TASKS,
  CLEAR_ERRORS
} from './actions';

const tasks = (
  state = {
    isLoading: false,
    isSyncing: false,
    filterText: '',
    tasks: [],
    drafts: [],
    error: ''
  },
  action
) => {
  switch (action.type) {
    case REQUEST_TASKS:
      return Object.assign({}, state, {
        isLoading: true
      });

    case RECEIVE_TASKS:
      return Object.assign({}, state, {
        isLoading: false,
        tasks: action.tasks,
        lastUpdated: action.receivedAt
      });

    case REQUEST_ADD_TASK:
      return Object.assign({}, state, {
        isSyncing: true
      });

    case RECEIVE_ADD_TASK:
      return Object.assign({}, state, {
        isSyncing: false,
        tasks: [...state.tasks, action.task],
        drafts: []
      });

    case REQUEST_EDIT_TASK:
      return Object.assign({}, state, {
        isSyncing: true
      });

    case RECEIVE_EDIT_TASK: {
      let { id } = action.task;
      let index = state.tasks.findIndex(task => task.id === id);

      return Object.assign({}, state, {
        isSyncing: false,
        tasks: [
          ...state.tasks.slice(0, index),
          Object.assign({}, action.task),
          ...state.tasks.slice(index + 1)
        ]
      });
    }

    case REQUEST_DELETE_TASK:
      return Object.assign({}, state, {
        isSyncing: true
      });

    case RECEIVE_DELETE_TASK: {
      let { id } = action.task;
      let index = state.tasks.findIndex(task => task.id === id);

      return Object.assign({}, state, {
        isSyncing: false,
        tasks: [
          ...state.tasks.slice(0, index),
          ...state.tasks.slice(index + 1)
        ]
      });
    }

    case FAIL_EDIT_TASK:
    case FAIL_DELETE_TASK:
      return Object.assign({}, state, {
        isSyncing: false,
        error: `Oops, could not change task "${action.task.title}". Please try again later.`
      });

    case DRAFT_TASK:
      return Object.assign({}, state, {
        drafts: [
          {
            title: '',
            description: ''
          }
        ]
      });

    case DISCARD_DRAFT:
      return Object.assign({}, state, {
        drafts: []
      });

    case FILTER_TASKS:
      return Object.assign({}, state, {
        filterText: action.filterText
      });

    case CLEAR_ERRORS:
      return Object.assign({}, state, {
        error: ''
      });

    default:
      return state;
  }
};

export default tasks;
