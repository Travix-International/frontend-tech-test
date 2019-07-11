import { ajax } from "rxjs/ajax";
import { pluck, mapTo } from "rxjs/operators";

const apiUrl = process.env.REACT_APP_API_URL;

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

const remove = taskID => {
  return ajax.delete(`${apiUrl}/tasks/${taskID}`).pipe(mapTo(taskID));
};

export default {
  fetchList,
  change,
  remove,
};
