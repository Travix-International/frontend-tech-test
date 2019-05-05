import * as selectors from '../taskSelectors';
import { TASK_FILTER } from '../../constants';

const initState = (filter = TASK_FILTER.SHOW_ALL) => ({
  tasks: {
    'td_1': { id: 'td_1', title: 'todo_1', completed: false },
    'td_2': { id: 'td_2', title: 'todo_2', completed: false },
    'td_3': { id: 'td_3', title: 'todo_3', completed: true },
    'td_4': { id: 'td_4', title: 'todo_4', completed: false },
    'td_5': { id: 'td_5', title: 'todo_5', completed: true },
    'td_6': { id: 'td_6', title: 'todo_6', completed: false }
  },
  filter
});

describe('tasks selectors test', () => {
  it('should return SHOW_ALL as the current filter', () => {
    expect(selectors.getFilter(initState())).toEqual(TASK_FILTER.SHOW_ALL);
    expect(selectors.getFilter(initState(TASK_FILTER.SHOW_ACTIVE))).toEqual(TASK_FILTER.SHOW_ACTIVE);
  });

  it('should return all tasks entities', () => {
    const state = initState();
    expect(selectors.getAllTasks(state)).toEqual(state.tasks);
  });

  it('should return task with the specified id', () => {
    expect(selectors.getTask('td_3')(initState())).toEqual({ 
      id: 'td_3', title: 'todo_3', completed: true
    });
  });

  it('should return the filtered tasks entities', () => {
    expect(selectors.getVisibleTasks(initState(TASK_FILTER.SHOW_ACTIVE))).toEqual({
      'td_1': { id: 'td_1', title: 'todo_1', completed: false },
      'td_2': { id: 'td_2', title: 'todo_2', completed: false },
      'td_4': { id: 'td_4', title: 'todo_4', completed: false },
      'td_6': { id: 'td_6', title: 'todo_6', completed: false }
    });
    expect(selectors.getVisibleTasks(initState(TASK_FILTER.SHOW_COMPLETED))).toEqual({
      'td_3': { id: 'td_3', title: 'todo_3', completed: true },
      'td_5': { id: 'td_5', title: 'todo_5', completed: true }
    });
  });
});