import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

export const mock = new MockAdapter(axios);

mock
  .onGet('/tasks').reply(200, {
    tasks: [{
      id: 'td_1', title: 'todo', description: 'todo_1'
    }]
  })
  .onGet('/task/td_1').reply(200, {
    task: { id: 'td_1', title: 'todo', description: 'todo_1' }
  });

mock.onPost('/task/create/todo_1/todo').reply(200);

mock.onPut('/task/update/td_1/todo_1/todo/false').reply(200);

mock.onDelete('/task/delete/td_1').reply(200);

mock.onAny().reply(404);

export default mock;