import * as selectors from '../taskSelectors';
import { TASK_FILTER } from '../../constants';

const initState = (filter = TASK_FILTER.SHOW_ALL) => ({
  tasks: {
    't_1': { id: 't_1', title: 'todo_1', completed: false },
    't_2': { id: 't_2', title: 'todo_2', completed: false },
    't_3': { id: 't_3', title: 'todo_3', completed: true },
    't_4': { id: 't_4', title: 'todo_4', completed: false },
    't_5': { id: 't_5', title: 'todo_5', completed: true },
    't_6': { id: 't_6', title: 'todo_6', completed: false }
  },
  filter,
  search: { query: 'anything', results: ['t_2', 't_5'] }
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
    expect(selectors.getTask('t_3')(initState())).toEqual({ 
      id: 't_3', title: 'todo_3', completed: true
    });
  });

  it('should return the filtered tasks entities', () => {
    expect(selectors.getVisibleTasks(initState(TASK_FILTER.SHOW_ACTIVE))).toEqual({
      't_1': { id: 't_1', title: 'todo_1', completed: false },
      't_2': { id: 't_2', title: 'todo_2', completed: false },
      't_4': { id: 't_4', title: 'todo_4', completed: false },
      't_6': { id: 't_6', title: 'todo_6', completed: false }
    });
    expect(selectors.getVisibleTasks(initState(TASK_FILTER.SHOW_COMPLETED))).toEqual({
      't_3': { id: 't_3', title: 'todo_3', completed: true },
      't_5': { id: 't_5', title: 'todo_5', completed: true }
    });
  });

  it('should return tasks array', () => {
    expect(selectors.getVisibleTasksArray(initState(TASK_FILTER.SHOW_ACTIVE))).toEqual([
      { id: 't_1', title: 'todo_1', completed: false },
      { id: 't_2', title: 'todo_2', completed: false },
      { id: 't_4', title: 'todo_4', completed: false },
      { id: 't_6', title: 'todo_6', completed: false }
    ]);
  });

  it('should return search query', () => {
    const state = initState();
    expect(selectors.getSearchQuery(state)).toBe('anything');
  })

  it('should return search results', () => {
    const state = initState();
    expect(selectors.getSearchTasks(state)).toEqual([
      {
        id: 't_2', title: 'todo_2', completed: false
      },
      {
        id: 't_5', title: 'todo_5', completed: true
      },
    ]);
  })
});