import { setSuccess } from './http';
import addTasks from './allTasks';

export default (state, action) => ({
  ...addTasks(state, action),
  ...setSuccess(state, action),
});
