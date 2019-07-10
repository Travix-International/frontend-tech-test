import { ajax } from "rxjs/ajax";
import { pluck } from "rxjs/operators";

const apiUrl = process.env.REACT_APP_API_URL;

const fetchList = () => {
  return ajax({ url: `${apiUrl}/tasks` }).pipe(pluck("response"));
};

export default {
  fetchList,
};
