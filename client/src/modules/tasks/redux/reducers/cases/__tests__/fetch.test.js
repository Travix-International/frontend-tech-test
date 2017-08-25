import addTasks from '../';

import { taskFactory, httpFactory, actionFactory } from '../../../__tests__/factories';

const defaultState = { tasks: {}, ...httpFactory() };

describe('Tasks.Redux.Reducers.Cases.allTasks.fetchTasksSuccess', () => {
  let addTasks;
  let setSuccess;

  beforeAll(() => {
    const tasks = [taskFactory(), taskFactory()];


    cases.fetchTasksSuccess(defaultState, actionFactory({ payload: { tasks } }));
  });

  afterAll(() => {
    addTasks.mockReset().mockRestore();
    setSuccess.mockReset().mockRestore();
  });

  it('should resolve tasks update calling addTasks', () => {
    expect(addTasks).toHaveBeenCalled();
  });

  it('should resolve http update calling http.setSuccess', () => {
    expect(setSuccess).toHaveBeenCalled();
  });
});
