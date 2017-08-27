import stateFactory from '../../allTasks/state';
import {
  actionFactory,
} from '../../../../../../__tests__/testUtils/redux';

import {
  httpFactory,
} from '../../../../../../__tests__/testUtils/http';


const defaultState = { tasks: {}, ...httpFactory() };

describe('Tasks.Redux.Factories.AllTasks.state', () => {
  const newState = stateFactory({}, actionFactory());

  it('should return default state', () => {
    expect(newState).toEqual(defaultState);
  });
});
