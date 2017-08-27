import { tasks } from '../../allTasks';
import { taskFactory } from '../../../../../../__tests__/testUtils/tasks';
import { normalizeTask } from '../../../utils';

describe('Tasks.Redux.Factories.AllTasks.Tasks', () => {
  it('should return a default state with empty tasks', () => {
    const result = tasks();

    expect(result).toHaveProperty('tasks', {});
  });

  it('should return a state when replacing tasks', () => {
    const newState = {
      tasks: {
        ...normalizeTask(taskFactory()),
      },
    };

    const result = tasks(newState);

    expect(result).toHaveProperty('tasks', newState.tasks);
  });
});
