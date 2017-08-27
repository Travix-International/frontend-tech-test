import httpFactory from '../http';
import tasksFactory from './tasks';

export default () => ({
  ...httpFactory(),
  ...tasksFactory(),
});
