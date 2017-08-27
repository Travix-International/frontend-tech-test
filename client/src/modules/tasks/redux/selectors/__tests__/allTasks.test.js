import { taskFactory } from '../../../../../__tests__/testUtils/tasks';
import { normalizeTasks } from '../../utils';
import { getTasks, getIsFetching, getError } from '../allTasks';

jest.mock('../state', () => (
  () => ({
    allTasks: {
      isFetching: true,
      error: 'error',
      tasks: {
        1: { id: 1, description: 'Description', title: 'Title' },
        2: { id: 2, description: 'Description', title: 'Title' },
        3: { id: 3, description: 'Description', title: 'Title' },
      },
    },
  })
));


describe('Tasks.Redux.Selectors.AllTasks.getTasks', () => {
  it('should get all tasks', () => {
    expect(getTasks()).toEqual({
      ...normalizeTasks([
        taskFactory({ id: 1 }),
        taskFactory({ id: 2 }),
        taskFactory({ id: 3 }),
      ]),
    });
  });
});

describe('Tasks.Redux.Selectors.AllTasks.getIsFetching', () => {
  it('should get if tasks are being fetched', () => {
    expect(getIsFetching()).toBe(true);
  });
});

describe('Tasks.Redux.Selectors.AllTasks.getError', () => {
  it('should get if there was an error fetching the tasks', () => {
    expect(getError()).toBe('error');
  });
});
