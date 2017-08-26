import httpFactory from './http';
import allTasksFactory from './allTasks';

export default () => ({
  ...httpFactory(),
  ...allTasksFactory(),
});
