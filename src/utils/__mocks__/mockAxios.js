import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const mock = new MockAdapter(axios);

export const task = {
  id: 't_1',
  title: 'todo',
  description: 'todo',
  completed: false
};
export const tasks = [task, Object.assign({}, task, { id: 't_2' })];

mock
  .onGet('/tasks').reply(200, { tasks })
  .onGet('/task/t_1').reply(200, { task });

mock.onPost('/task/create').reply(200, { task });

mock.onPut('/task/toggle/t_1').reply(200, { 
  task: Object.assign({}, task, { completed: true })
});

mock.onPut('/task/update/t_1').reply(200);

mock.onDelete('/task/delete/t_1').reply(200);

mock.onGet('/task/search/something').reply(200, { results: [] });

mock.onAny().reply(404);

export default mock;