import {
  TASK_REQUEST
} from './../../src/constants';
import { requestTask } from './../../src/modules/main/actions';

describe('Main actions', () => {
  it('Test request task action', () => {
    const expectedAction = {
      type: TASK_REQUEST
    };
    expect(requestTask()).toEqual(expectedAction);
  });
});
