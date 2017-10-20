import axios from 'axios';

export function fetchAllTasks(){
    return {
        type: "FETCH_TASKS",
        payload: axios.get(`http://localhost:9001/tasks`)
    }
}