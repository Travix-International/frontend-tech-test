import * as taskActions from '../../actions/taskActions';
import tasksReducer from '../tasks';

const initState = {
  'td_1': { id: 'td_1', title: 'todo1', completed: false },
  'td_4': { id: 'td_4', title: 'todo4', completed: false },
};

describe('tasks reducers test', () => {
  it('should return the initial state when action is not matched', () => {
    expect(tasksReducer(undefined, {})).toEqual({});
  });

  it('should return all tasks', () => {
    const tasks = [
      { id: 'td_2', title: 'todo2', completed: false },
      { id: 'td_3', title: 'todo3', completed: true }
    ];
    const action = taskActions.fetchAllTasksSuccess(tasks);
    expect(tasksReducer(initState, action)).toEqual({
      'td_2': { id: 'td_2', title: 'todo2', completed: false },
      'td_3': { id: 'td_3', title: 'todo3', completed: true }
    });
  });

  it('should add a new task to state', () => {
    const newTask = { id: 'td_3', title: 'todo3', completed: true }
    const action = taskActions.addTaskSuccess(newTask);
    expect(tasksReducer(initState, action)).toEqual({
      ...initState,
      'td_3': newTask
    });
  });

  it('should return updated state', () => {
    const updatedTask = { id: 'td_1', title: 'new todo1' }
    const action = taskActions.editTaskSuccess(updatedTask);
    expect(tasksReducer(initState, action)).toEqual({
      'td_1': { id: 'td_1', title: 'new todo1', completed: false },
      'td_4': { id: 'td_4', title: 'todo4', completed: false },
    });
  });

  it('should toggle the task', () => {
    const action = taskActions.toggleTaskSuccess('td_1');
    expect(tasksReducer(initState, action)).toEqual({
      'td_1': { id: 'td_1', title: 'todo1', completed: true },
      'td_4': { id: 'td_4', title: 'todo4', completed: false },
    });
  });

  it('should delete the task', () => {
    const action = taskActions.deleteTaskSuccess('td_4');
    expect(tasksReducer(initState, action)).toEqual({
      'td_1': { id: 'td_1', title: 'todo1', completed: false },
    });
  });
});