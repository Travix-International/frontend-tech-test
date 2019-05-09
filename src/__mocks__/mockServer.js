import MockAdapter from 'axios-mock-adapter';
import { requester } from '../utils/api';

const mockApi = new MockAdapter(requester);

export const newTask = { 
  id: 't_abc123def', 
  title: 'todo', 
  description: 'todo', 
  ompleted: false 
};

export const tasks = [
  {
    'id': 't_gvo4747ws',
    'title': 'the first todo',
    'description': 'something to do',
    'completed': false
  },
  {
    'id': 't_o4wz8u91m',
    'title': 'the second todo',
    'description': 'something else to do',
    'completed': false
  },
  {
    'id': 't_lajt1bnt4',
    'title': 'the 3rd todo',
    'description': 'something else to do',
    'completed': true
  }
];

mockApi
  .onGet('/tasks').reply(200, { tasks })
  .onGet('/task/t_gvo4747ws').reply(200, { task: tasks[0] })
  .onGet('/task/search/first').reply(200, { results: [ tasks[0].id ] })
  .onPost('/task/create').reply(201, { 
    task: newTask
  })
  .onPut('/task/toggle/t_o4wz8u91m').reply(204, { 
    task: { ...tasks[1], completed: !tasks[1].completed }
  })
  .onDelete('/task/delete/t_lajt1bnt4').reply(200, { 
    message: 'Updated successfully' 
  })
  .onPut('/task/update/t_lajt1bnt4', {
    title: 'the updated todo',
    description: 'updated'
  })
  .reply(204, { 
    task: { ...tasks[2], title: 'the updated todo', description: 'updated' }
  })
  .onAny().reply(404);

export default mockApi;