import DataLoader from 'dataloader';
import fetch from 'node-fetch';
import { restApi as restApiConfig } from "../../config.json";

const BASE_URL = `http://localhost:${restApiConfig.port}`;

const http = (path, method = "GET", body) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(`${BASE_URL}/${path}`, options)
    .then(res => {
      if(res.status !== 204) {
        return res.json();
      }

      return Promise.resolve();
    });
};

const getTodos = () => http("task"),
      getTodo = (id) => http(`task/${id}`),
      updateTodo = (args) => http("task", "PUT", args),
      createTodo = (args) => http("task", "POST", args),
      deleteTodo = (id) => http(`task/${id}`, "DELETE");

export const todo = () => {
  const cacheMap = new Map();

  const todosLoader = new DataLoader(keys => Promise.all(keys.map(getTodos)), { cacheMap });
  const todoLoader = new DataLoader(keys => Promise.all(keys.map(getTodo)), {
    cacheKeyFn: key => `/task/${key}/`,
    cacheMap,
  });

  todoLoader.loadAll = todosLoader.load.bind(todosLoader, '__all__');
  todoLoader.update = updateTodo;
  todoLoader.create = createTodo;
  todoLoader.delete = deleteTodo;

  return todoLoader;
}
