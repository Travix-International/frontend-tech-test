import { taskFactory } from '../../../../../__tests__/testUtils/tasks';
import { normalizeTasks } from '../../utils';
import getShowTasksProps from '../showTasksProps';

jest.mock('../allTasks', () => ({
  getIsFetching: () => true,
  getError: () => 'error',
  getTasks: () => ({
    1: { id: 1, description: 'Description', title: 'Title' },
    2: { id: 2, description: 'Description', title: 'Title' },
    3: { id: 3, description: 'Description', title: 'Title' },
  }),
}));


describe('Tasks.Redux.Selectors.getShowTasksProps', () => {
  it('should get error prop', () => {
    expect(getShowTasksProps().isFetching).toBe(true);
  });

  it('should get isFetching prop', () => {
    expect(getShowTasksProps().error).toBe('error');
  });

  it('should get visible tasks as tasks prop', () => {
    expect(getShowTasksProps().tasks).toEqual([
      taskFactory({ id: 1 }),
      taskFactory({ id: 2 }),
      taskFactory({ id: 3 }),
    ]);
  });
});
