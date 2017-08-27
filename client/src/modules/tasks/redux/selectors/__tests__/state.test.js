import getState from '../state';
import { allTasks as allTasksFactories } from '../../factories';

const state = {
  tasks: {
    allTasks: allTasksFactories.state(),
  },
};

describe('Tasks.Redux.Selectors.getState', () => {
  it('should get tasks state from store state', () => {
    expect(getState(state)).toEqual(state.tasks);
  });
});
