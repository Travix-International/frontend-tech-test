import axios from 'axios';
import tasksContainer from '../tasks.json';

const SERVER_URL = 'http://localhost:9001/task';

describe('server tests', () => {
  it('should get all task', () => {
    return axios
      .get(SERVER_URL)
      .then(response => expect(response.data.tasks).toHaveLength(tasksContainer.tasks.length))
      .catch(error => console.log(error));
  });
  it('should get first 10 tasks', () => {
    return axios
      .get(`${SERVER_URL}?pn=1&tpp=10`)
      .then(response => expect(response.data.tasks).toHaveLength(10))
      .catch(error => console.log(error));
  });

  it('should get filter tasks by title', () => {
    const word = 'lacus';
    const count = tasksContainer.tasks.filter(task => {
      const regexp = new RegExp(word, 'i');
      return regexp.test(task.title);
    }).length;
    return axios
      .get(`${SERVER_URL}?search=lacus`)
      .then(response => expect(response.data.tasks).toHaveLength(count))
      .catch(error => console.log(error));
  });

  it('should get task with id:1', () => {
    return axios
      .get(`${SERVER_URL}/1`)
      .then(response => expect(response.data.task.id).toBe(1))
      .catch(error => console.log(error));
  });

  it('should update task with id:1', () => {
    return axios
      .put(`${SERVER_URL}/1`, { title: 'foo' })
      .then(response => expect(response.data.task.title).toBe('foo'))
      .catch(error => console.log(error));
  });

  it('should create a task with', () => {
    const task = { title: 'hello', description: 'foo' };
    return axios
      .post(`${SERVER_URL}`, task)
      .then(response => expect(response.data.task.title).toEqual(task.title))
      .catch(error => console.log(error));
  });

  it('should delete task with id 1', () => {
    axios
      .delete(`${SERVER_URL}/1`)
      .then(() =>
        axios.get(`${SERVER_URL}/1`).catch(error => expect(error.response.status).toBe(404))
      )
      .catch(error => console.log(error));
  });
});
