import {
  ADD_NEW_TASK
} from '../constants';

export const TodoFormActions = (title, description) => ({
  types: [ADD_NEW_TASK],
  payload: {
    request: {
      url: `task/create/${title}/${description}`
    }
  }
});
