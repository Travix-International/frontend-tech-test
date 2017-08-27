import { allTasks } from '../../../factories/';
import { normalizeTasks } from '../../../utils';


const tasks = allTasks.tasks;

export default (state, { payload }) => ({
  ...state,
  ...tasks({ tasks: { ...state.tasks, ...normalizeTasks(payload.tasks) } }),
});
