import addTasks from './addTasks';
import { setSuccess } from '../http';

export default(state, action) => ({
  ...addTasks(state, action),
  isFetching: setSuccess(state, action).isFetching,
  error: setSuccess(state, action).error,
});
