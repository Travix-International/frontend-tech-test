/* global fetch */

class TaskClient {
  get() {
    return fetch('/tasks')
      .then((response) => {
        return response.json();
      }).catch((ex) => {
        throw new Error('parsing failed', ex);
      });
  }

  put() {

  }

  delete() {

  }

  update() {

  }
}

export {
  TaskClient as default
};
