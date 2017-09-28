/* global fetch */

class TaskClient {
  static get() {
    return fetch('/tasks')
      .then((response) => {
        return response.json();
      }).catch((ex) => {
        throw new Error('Parsing failed', ex);
      });
  }

  static post(title, description) {
    return fetch(`/task/create/${title}/${description}`, {
      method: 'POST',
    }).then((response) => {
      return response.json();
    }).catch((ex) => {
      throw new Error('Adding failed', ex);
    });
  }

  static delete(id) {
    return fetch(`/task/delete/${id}`, {
      method: 'DELETE',
    }).catch((ex) => {
      throw new Error('Remove failed', ex);
    });
  }

  static update(id, title, description) {
    return fetch(`/task/update/${id}/${title}/${description}`, {
      method: 'PUT',
    }).catch((ex) => {
      throw new Error('Update failed', ex);
    });
  }
}

export {
  TaskClient as default
};
