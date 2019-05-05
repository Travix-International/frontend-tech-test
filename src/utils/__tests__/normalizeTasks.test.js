import { normalizeTasks } from '../normalizeTasks'; 

describe('normalizer test', () => {
  it('should convert todo array to todo object where keys are id', () => {
    const tasks = [
      { id: 'td_1', title: 'todo_1' },
      { id: 'td_2', title: 'todo_2' },
      { id: 'td_3', title: 'todo_3' },
      { id: 'td_4', title: 'todo_4' }
    ];

    const res = normalizeTasks(tasks);
    expect(res).toEqual({
      'td_1':  { id: 'td_1', title: 'todo_1' },
      'td_2':  { id: 'td_2', title: 'todo_2' },
      'td_3':  { id: 'td_3', title: 'todo_3' },
      'td_4':  { id: 'td_4', title: 'todo_4' }
    });
  });
});