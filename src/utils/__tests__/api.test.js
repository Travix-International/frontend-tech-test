import mockAxios from '../__mocks__/mockAxios';
import * as api from '../api';

describe('todo api tests', () => {

  it('should validate id value properly', () => {
    expect(api.validateId(1)).toBeFalsy();
    expect(api.validateId('123')).toBeFalsy();
    expect(api.validateId('td_1dssfd')).toBeTruthy();
  });

  it('should get all todos', async () => {
    const res = await api.getTasks();
    expect(res.data).toEqual({
      tasks: [
        {
          id: 'td_1',
          title: 'todo',
          description: 'todo_1'
        }
      ]
    });
  });

  it('should get todo_1', async () => {
    const res = await api.getTaskById('td_1');
    expect(res.data).toEqual({
      task: { id: 'td_1', title: 'todo', description: 'todo_1' }
    });
  });

  it('should return a 404 error when id is not macthed', async () => {
    try {
      const res = await api.getTaskById('td_2');
    } catch (err) {
      expect(err.response.status).toBe(404);
    }
  });

  it('should add todo_1 successfully ', async () => {
    const res = await api.addTask('todo_1', 'todo');
    expect(res.status).toBe(200);
  });

  it('should update td_1 successfully ', async () => {
    const res = await api.updateTask('td_1', 'todo_1', 'todo');
    expect(res.status).toBe(200);

    const res2 = await api.toggleTask('td_1', true);
    expect(res2.status).toBe(200);
  });

  it('should toggle td_1 successfully', async () => {
    const res = await api.toggleTask('td_1');
    expect(res.status).toBe(200);
  });

  it('should delete td_1 successfully ', async () => {
    const res = await api.deleteTask('td_1');
    expect(res.status).toBe(200);
  });
});