import nock from 'nock';
import TasksService from '../Tasks';

import { REACT_APP_API_HOST } from '../../constants';
import

const Tasks = new TasksService(REACT_APP_API_HOST);

describe('Services.Tasks.fetchTasks', () => {
  it('should fetch tasks from /api/tasks');
  it('should resolve with tasks when the server returns success');
  it('should reject with error when the server returns error');
});
