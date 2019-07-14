import { ajax } from "rxjs/ajax";
import { pluck, mapTo } from "rxjs/operators";

const apiHost = process.env.REACT_APP_API_HOST;
const apiPath = process.env.REACT_APP_API_PATH;

const apiUrl = apiHost + apiPath;

const fetchList = () => {
  return ajax.get(`${apiUrl}/tasks`).pipe(pluck("response"));
};

const change = task => {
  return ajax
    .put(`${apiUrl}/tasks/${task.id}`, task, {
      "Content-Type": "application/json",
    })
    .pipe(pluck("response"));
};

const remove = task => {
  return ajax.delete(`${apiUrl}/tasks/${task.id}`).pipe(mapTo(task));
};

const create = task => {
  return ajax
    .post(`${apiUrl}/tasks`, task, {
      "Content-Type": "application/json",
    })
    .pipe(pluck("response"));
};

export default {
  fetchList,
  change,
  remove,
  create,
};
