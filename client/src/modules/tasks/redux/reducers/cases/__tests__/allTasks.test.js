import * as addTasksModule from '../allTasks/addTasks';

import { normalizeTask } from '../../../utils';
import { actionFactory } from '../../../../../../__tests__/testUtils/redux';
import { httpFactory } from '../../../../../../__tests__/testUtils/http';
import { taskFactory } from '../../../../../../__tests__/testUtils/tasks';

const addTasks = addTasksModule.default;
const defaultState = { tasks: {}, ...httpFactory() };

describe('Tasks.Redux.Reducers.Cases.allTasks.addTasks', () => {
  it('should add new tasks to an empty state', () => {
    const tasks = [taskFactory(), taskFactory()];
    const newState = addTasks(defaultState, actionFactory({ payload: { tasks } }));
    const desiredTasksState = { ...normalizeTask(tasks[0]), ...normalizeTask(tasks[1]) };

    expect(newState.tasks).toEqual(desiredTasksState);
  });

  it('should update existing tasks data', () => {
    // Setup state with existing tasks
    const existingTasks = [taskFactory(), taskFactory()];
    const state = {
      ...defaultState,
      tasks: { ...normalizeTask(existingTasks[0]), ...normalizeTask(existingTasks[1]) },
    };

    // Setup new updated tasks for payload
    const updatedTasks = existingTasks.map(task => taskFactory({ ...task, title: 'updated' }));

    const desiredTasksState = {
      ...normalizeTask(updatedTasks[0]), ...normalizeTask(updatedTasks[1]),
    };

    const newState = addTasks(
      state,
      actionFactory({ payload: { tasks: updatedTasks } }),
    );

    expect(newState.tasks).toEqual(desiredTasksState);
  });

  it('should not erase existing tasks', () => {
    // Setup state with existing tasks
    const existingTasks = [taskFactory(), taskFactory()];
    const state = {
      ...defaultState,
      tasks: { ...normalizeTask(existingTasks[0]), ...normalizeTask(existingTasks[1]) },
    };

    // Setup new updated tasks for payload
    const newTasks = [taskFactory(), taskFactory()];

    const desiredTasksState = {
      ...normalizeTask(newTasks[0]),
      ...normalizeTask(newTasks[1]),
      ...normalizeTask(existingTasks[0]),
      ...normalizeTask(existingTasks[1]),
    };

    const newState = addTasks(
      state,
      actionFactory({ payload: { tasks: newTasks } }),
    );

    expect(newState.tasks).toEqual(desiredTasksState);
  });
});
