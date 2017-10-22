import * as todoActionList  from '../../actions/toDoActions';
import axios from 'axios';
import MockAdapter  from 'axios-mock-adapter';  

let mock = new MockAdapter(axios);

mock.onGet('http://localhost:9001/tasks').reply(function(config) {
    return new Promise(function(resolve, reject) {
        resolve([200, { id: 1, title: 'test', description: 'Test scenario' }]);
    })
});

describe('ToDo Reduce', () => {
    it('Has a default state', () => {
        expect(todoActionList.fetchAllTasks()).toEqual({
            type:"FETCH_TASKS",
            payload: Promise.resolve()
        })
    });
})