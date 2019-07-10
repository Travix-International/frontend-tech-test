import { ajax } from "rxjs/ajax";
import { pluck } from "rxjs/operators";

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

export default {
  fetchList,
  change,
};
