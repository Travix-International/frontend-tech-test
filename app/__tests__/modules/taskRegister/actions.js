import {
  TASK_SAVE,
} from './../../../src/constants';
import { taskSaveAction } from './../../../src/modules/taskRegister/actions';

describe('Main actions', () => {
  it('Test task list action', () => {
    const _id = '';
    const title = 'Title jest 1';
    const description = 'Description jest 1';
    const date = '2017-07-05';
    const completed = true;
    const expectedAction = {
      type: TASK_SAVE,
      _id,
      title,
      description,
      date,
      completed
    };
    expect(taskSaveAction(_id, title, description, date, completed))
      .toEqual(expectedAction);
  });
});
