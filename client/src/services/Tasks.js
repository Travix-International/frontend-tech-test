import request from 'superagent';

export default class Tasks {
  constructor(API_HOST) {
    this.API_HOST = API_HOST || '';
  }

  fetchTasks() {
    return new Promise((resolve, reject) => {
      request
        .get('/api/tasks')
        .then((response) => {
          resolve({ tasks: response.body.taks });
        })
        .catch(() => {
          reject('We are unable to fetch tasks on this moment.');
        });
    });
  }
}
