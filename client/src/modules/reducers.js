import { reducer as tasksReducer } from './tasks/redux';

export default {
  [tasksReducer.name]: tasksReducer.reducer,
};
