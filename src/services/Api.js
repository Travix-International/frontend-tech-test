const url = 'http://localhost:9002/task';

class Api {
  static getAllTask() {
    return fetch(`${url}s`, { mode: 'cors' })
      .then(response => response.json()).catch(error => error);
  }

  static putTask(params, id) {
    return fetch(`${url}/id=${id}/${params.title}/${params.description}`, { method: 'PUT', mode: 'cors' })
      .then(response => response.json()).catch(error => error);
  }

  static postTask(params) {
    return fetch(`${url}/create/${params.title}/${params.description}`, { method: 'POST', mode: 'cors' })
      .then(response => response.json()).catch(error => error);
  }

  static deleteTask(id) {
    return fetch(`${url}/delete/${id}`, { method: 'DELETE', mode: 'cors' })
      .then(response => response.json()).catch(error => error);
  }
}
export default Api;
