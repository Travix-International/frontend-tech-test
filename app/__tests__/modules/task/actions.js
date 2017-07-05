import {
  TASK_LIST,
  TASK_DELETE
} from './../../../src/constants';
import { taskListAction, taskDeleteAction } from './../../../src/modules/task/actions';

describe('Main actions', () => {
  it('Test task list action', () => {
    const tasks = [];
    const expectedAction = {
      type: TASK_LIST,
      tasks
    };
    expect(taskListAction(tasks)).toEqual(expectedAction);
  });

  it('Test task delete action', () => {
    const id = '';
    const expectedAction = {
      type: TASK_DELETE,
      id
    };
    expect(taskDeleteAction(id)).toEqual(expectedAction);
  });
});
