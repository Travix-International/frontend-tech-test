import nock from 'nock';
import TasksService from '../Tasks';

import { REACT_APP_API_HOST } from '../../constants';
import { taskFactory } from '../../__tests__/testUtils/tasks';

const Tasks = new TasksService(REACT_APP_API_HOST);

const mockHttp = () => (
  nock(REACT_APP_API_HOST)
    .get('/api/tasks')
    .reply(200, { tasks: [taskFactory()] })
);

const restoreMock = () => nock.restore();

describe('Services.Tasks.fetchTasks', () => {
  it('should fetch tasks from /api/tasks', () => {
    const serverMock = mockHttp();

    Tasks.fetchTasks().then(() => {
      expect(serverMock.isDone()).toBe(true);
    });

    restoreMock();
  });

  it('should resolve when success', () => {
    mockHttp();

    Tasks.fetchTasks().then((tasks) => {
      expect(tasks.length > 0).toBe(true);
    });

    restoreMock();
  });
});
