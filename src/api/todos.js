// API Todos static class
const API_ENDPOINT = `http://localhost:9001`;

export default class ApiTodos {

  // get a list of todos
  static getList() {
    return fetch(`${API_ENDPOINT}/tasks`).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json().then(data => {
        return data.tasks;
      })
    });
  }
  // add/edit a todo
  static addEdit(task) {
    const url = task.todo.id > 0 ? `${API_ENDPOINT}/task/update/${task.todo.id}` : `${API_ENDPOINT}/task/create`
    return fetch(url, {
      method: task.todo.id > 0 ? 'put' : 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task.todo),
    }).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json().then(data => {
        return data.task;
      })
    });
  }

  // delete a todo
  static delete(task) {
    return fetch(`${API_ENDPOINT}/task/delete/${task.todo.id}`, {
      method: 'delete',
    }).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json().then(data => {
        return data.message;
      })
    });
  }
}
