import { actionFactory } from '../../../../../../__tests__/testUtils/redux';
import { httpFactory } from '../../../../../../__tests__/testUtils/http';
import { taskFactory } from '../../../../../../__tests__/testUtils/tasks';
import { normalizeTask } from '../../../utils';
import fetchTasksSuccess from '../allTasks/fetchTasksSuccess';

jest.mock('../http', () => ({
  setSuccess: () => {
    return { isFetching: true, error: 'error' };
  },
}));

jest.mock('../allTasks/addTasks', () => (
  () => {
    return { tasks: { 1: { id: 1, title: 'Title', description: 'Description' } } };
  }
));

const defaultState = { tasks: {}, ...httpFactory() };

describe('Tasks.Redux.Reducers.Cases.allTasks.fetchTasksSuccess', () => {
  let result;

  beforeAll(() => {
    result = fetchTasksSuccess(
      defaultState,
      actionFactory({ payload: { tasks: { ...normalizeTask(taskFactory({ id: 1 })) } } }),
    );
  });


  it('should resolve tasks update calling addTasks', () => {
    expect(result.tasks).toEqual({ ...normalizeTask(taskFactory({ id: 1 })) });
  });

  it('should resolve http update calling http.setSuccess', () => {
    expect(result.isFetching).toBe(true);
    expect(result.error).toBe('error');
  });
});
