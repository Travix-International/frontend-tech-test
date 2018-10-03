import { fetchWrapper } from '../common/fetchWrapper';

export const fetchTodo = () => {
    
    return fetchWrapper('http://localhost:9001/tasks')
        .then(result => result.json())
        .then(parseData => fetchSuccess(parseData))
        .catch(error => fetchFail(error))
}

export const fetchStart = ()=>{ return { type: "too_fetch_start" } }
const fetchSuccess = (result) => { debugger; return { type: "todo_fetch_success", payload: result } };
const fetchFail = (error) => { return { type: "todo_fetch_fail", payload: error } };