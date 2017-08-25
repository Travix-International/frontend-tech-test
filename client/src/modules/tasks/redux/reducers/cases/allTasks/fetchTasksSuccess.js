import addTasks from './addTasks';
import { setSuccess } from '../http';

export default(state, action) => ({
  ...addTasks(state, action),
  ...setSuccess(state, action),
});
