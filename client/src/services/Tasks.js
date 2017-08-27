import request from 'superagent';

export default class Tasks {
  constructor(API_HOST) {
    this.API_HOST = API_HOST || '';
  }

  fetchTasks() {
    return new Promise((resolve, reject) => {
      request
        .get(this.API_HOST + '/api/tasks')
        .then((response) => {
          resolve({ tasks: response.body.tasks });
        })
        .catch((err) => {
          reject('We are unable to fetch tasks on this moment.');
        });
    });
  }
}
