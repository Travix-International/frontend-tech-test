import stateFactory from '../allTasksState';
import { httpFactory, actionFactory } from '../../__tests__/factories';


const defaultState = { tasks: {}, ...httpFactory() };

describe('Tasks.Redux.Factories.AllTasks.state', () => {
  const newState = stateFactory({}, actionFactory());

  it('should return default state', () => {
    expect(newState).toEqual(defaultState);
  });
});
