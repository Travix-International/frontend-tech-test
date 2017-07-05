import reducer from './../../src/reducers/main';
import * as types from './../../src/constants';

describe('Main reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isFetching: false,
      notification: {
        message: '',
        show: false,
        success: true
      },
      tasks: {}
    });
  });

  it('should handle TASK_REQUEST', () => {
    expect(
      reducer({}, {
        type: types.TASK_REQUEST,
      })
    ).toEqual({ isFetching: true });
  });

  it('should handle TASK_LIST', () => {
    const tasksArray = [
      { _id: '1', title: 'Title jest 1' },
      { _id: '2', title: 'Title jest 2' },
    ];
    expect(
      reducer({ tasks: {} }, {
        type: types.TASK_LIST,
        tasks: tasksArray
      })
    ).toEqual({
      isFetching: false,
      tasks: {
        1: tasksArray[0],
        2: tasksArray[1]
      }
    });
  });

  it('should handle TASK_SAVE', () => {
    const copyTask = {
      _id: '1',
      title: 'Title jest 1',
      description: 'Description jest 1',
      date: '2017-07-05',
      completed: true
    };
    expect(
      reducer({ tasks: {} }, {
        type: types.TASK_SAVE,
        _id: copyTask._id,
        title: copyTask.title,
        description: copyTask.description,
        date: copyTask.date,
        completed: copyTask.completed
      })
    ).toEqual({
      tasks: {
        1: copyTask
      },
      isFetching: false
    });
  });

  it('should handle TASK_DELETE', () => {
    const copyTask = {
      _id: '1',
      title: 'Title jest 1',
      description: 'Description jest 1',
      date: '2017-07-05',
      completed: true
    };
    expect(
      reducer({ tasks: { 1: copyTask } }, {
        type: types.TASK_DELETE,
        id: copyTask._id
      })
    ).toEqual({
      tasks: {},
      isFetching: false
    });
  });

  it('should handle NOTIFICATION', () => {
    const notification = {
      show: true,
      success: true,
      message: 'Task saved!'
    };
    expect(
      reducer({ notification: {} }, {
        type: types.NOTIFICATION,
        show: notification.show,
        success: notification.success,
        message: notification.message
      })
    ).toEqual({
      notification
    });
  });
});
