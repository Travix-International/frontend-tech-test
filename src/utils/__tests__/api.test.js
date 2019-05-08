import mockAxios, { task, tasks } from '../__mocks__/mockAxios';
import * as api from '../api';

describe('todo api tests', () => {

  it('should validate id value properly', () => {
    expect(api.validateId(1)).toBeFalsy();
    expect(api.validateId('123')).toBeFalsy();
    expect(api.validateId('t_1dssfd')).toBeTruthy();
  });

  it('should get all todos', async () => {
    const res = await api.getTasks();
    expect(res.data).toEqual({ tasks });
  });

  it('should get todo_1', async () => {
    const res = await api.getTaskById('t_1');
    expect(res.data).toEqual({ task });
  });

  it('should return a 404 error when id is not macthed', async () => {
    try {
      const res = await api.getTaskById('t_2');
    } catch (err) {
      expect(err.response.status).toBe(404);
    }
  });

  it('should add a todo successfully ', async () => {
    const res = await api.addTask('todo', 'todo');
    expect(res.status).toBe(200);
    expect(res.data).toEqual({ task });
  });

  it('should update t_1 successfully ', async () => {
    const res = await api.updateTask('t_1', 'todo_1', 'todo');
    expect(res.status).toBe(200);
  });

  it('should toggle t_1 successfully', async () => {
    const res = await api.toggleTask('t_1');
    expect(res.status).toBe(200);
    expect(res.data).toEqual({
      task: Object.assign({}, task, { completed: true })
    })
  });

  it('should delete td_1 successfully ', async () => {
    const res = await api.deleteTask('t_1');
    expect(res.status).toBe(200);
  });

  it('should return search results', async () => {
    const res = await api.searchTask('something');
    expect(res.data).toEqual({ results: [] });
  });
});