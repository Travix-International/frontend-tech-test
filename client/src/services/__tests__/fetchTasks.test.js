// TODO: this isn't working for some reason check this

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
  let serverMock;

  beforeAll(() => {
    serverMock = mockHttp();
  });

  afterAll(() => {
    restoreMock();
  });

  it('should fetch tasks from /api/tasks', () => (
    Tasks.fetchTasks().then((response) => {
      expect(serverMock.isDone()).toBe(true);
      expect(response.tasks.length > 0).toBe(true);
    })
  ));
});
