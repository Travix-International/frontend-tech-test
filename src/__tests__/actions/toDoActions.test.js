import * as todoActionList  from '../../actions/toDoActions';
import axios from 'axios';
import MockAdapter  from 'axios-mock-adapter';  

//import tasksContainer from '../../server/tasks.json'

const mock = new MockAdapter(axios);
mock.onGet('http://localhost:9001/tasks').reply(function(config) {
    return new Promise(function(resolve, reject) {
         resolve([200, { id: 1, title: 'Javier Montagna', description: 'Testing the actions' }]);
    });
  });

describe('TODO Actions', () => {
    it('Fetch All Tasks', () => {
        expect(todoActionList.fetchAllTasks()).toEqual({
            type: "FETCH_TASKS",
            payload: { id: 1, title: 'Javier Montagna', description: 'Testing the actions' }
        })
    })
})
      