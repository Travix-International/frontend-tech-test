import { allTasks } from '../';
import { taskFactory, normalizeTask } from '../../__tests__/factories';

describe('Tasks.Redux.Factories.http', () => {
  it('should return a default state with empty tasks', () => {
    const result = allTasks();

    expect(result).toHaveProperty('tasks', {});
  });

  it('should return a state when replacing tasks', () => {
    const newState = {
      tasks: {
        ...normalizeTask(taskFactory()),
      },
    };

    const result = allTasks(newState);

    expect(result).toHaveProperty('tasks', newState.tasks);
  });
});
