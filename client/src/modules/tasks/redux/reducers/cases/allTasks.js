import { allTasks } from '../../factories';
import normalizeTasks from '../../utils';

export default (state, { payload }) => ({
  ...state,
  ...allTasks({ tasks: { ...state.tasks, ...normalizeTasks(payload.tasks) } }),
});
