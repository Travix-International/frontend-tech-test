import { SERVER_URL } from '../constants';

const request = (method, url, params) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    });
    const requestParams = {
        method,
        mode: 'cors',
        headers,
    };

    let requestUrl = SERVER_URL + url;
    if (typeof params !== "undefined") {
      requestUrl += params;
    }

    return new Request(requestUrl, requestParams);
};

const executer = async (request) => {
    const response = await fetch(request);
    const data = await response.json();
    const { error } = data;
    if (error) {
        throw error;
    }
    return data;
};

export default {
    getTodos(params) {
      const req = request('GET', '/tasks/');
      return executer(req);
    },
    addTodo(params) {
      const task = params.task;
      const req = request('POST', '/task/create/', task.title + "/" + task.description);
      return executer(req);
    },
    deleteTodo(params) {
      const req = request('DELETE', '/task/delete/', params.id);
      return executer(req);
    },
    updateTodo(params) {
      const task = params.task;
      const req = request('PUT', '/task/update/', task.id + "/" + task.title + "/" + task.description + "/" + task.isComplete);
      return executer(req);
    },
};
