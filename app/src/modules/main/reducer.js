import {
  TASK_REQUEST,
  TASK_LIST,
  TASK_SAVE,
  TASK_DELETE,
  NOTIFICATION
} from './../../constants';

const initialState = {
  tasks: {}, // it's better work with object instead of array in immutable data.
  isFetching: false,
  notification: {
    show: false,
    success: true,
    message: ''
  }
};

const main = (state = initialState, action) => {
  switch (action.type) {
    case TASK_REQUEST: {
      return Object.assign({}, state, { isFetching: true });
    }
    case TASK_LIST: {
      const copyState = Object.assign({}, state, { isFetching: false });

      if (action.tasks && action.tasks.length > 0) {
        action.tasks.forEach((task) => {
          copyState.tasks[task._id] = task;
        });
      }

      return copyState;
    }
    case TASK_SAVE: {
      const copyState = Object.assign({}, state);
      const copyTask = {
        _id: action._id,
        title: action.title,
        description: action.description,
        date: action.date,
        completed: action.completed
      };
      copyState.tasks[action._id] = Object.assign({}, copyState.tasks[action._id], copyTask);
      return copyState;
    }
    case TASK_DELETE: {
      const copyState = Object.assign({}, state);
      delete copyState.tasks[action.id];
      return Object.assign({}, copyState);
    }
    case NOTIFICATION: {
      return Object.assign({}, state, {
        notification: Object.assign({}, state.notification, action.notification)
      });
    }
    default: {
      return Object.assign({}, state);
    }
  }
};

export default main;
