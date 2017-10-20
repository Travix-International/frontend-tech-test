import axios from 'axios';

export function fetchAllTasks(){
    return {
        type: "FETCH_TASKS",
        payload: axios.get(`http://localhost:9001/tasks`)
    }
}

export function addNewTasks(title, desc){
    return {
        type: "SAVE_TASKS",
        payload: axios.post(`http://localhost:9001/task/create/` + title + `/` + desc)
    }
}