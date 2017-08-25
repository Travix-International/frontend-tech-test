import allTaskFactory from '../allTasks';

describe('Tasks.Redux.Factories.http', () => {
  it('should return a default state with empty tasks', () => {
    const result = allTaskFactory();

    expect(result).toHaveProperty('tasks', {});
  });

  it('should return a state when replacing tasks', () => {
    const newState = {
      tasks: {
        1: {
          id: 1,
          title: 'sadasdas',
          description: 'asdasdas',
        },
      },
    };

    const result = allTaskFactory(newState);

    expect(result).toHaveProperty('tasks', newState.tasks);
  });
});
