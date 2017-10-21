import axios from 'axios';

export function fetchAllTasks(){
    return {
        type: "FETCH_TASKS",
        payload: axios.get(`http://localhost:9001/tasks`)
    }
}

export function addNewTasks(title, desc){
    return {
        type: "ADD_TASK",
        payload: axios.post(`http://localhost:9001/task/create/` + title + `/` + desc)
    }
}

export function updateTask(id, title, desc){
    return function(dispatch) {
        dispatch({type: "UPDATE_TASK_PENDING", payload: ""})
        axios.put(`http://localhost:9001/task/update/` + id + `/` + title + `/`  + desc)
        .then((response) => {
            dispatch({type: "UPDATE_TASK_FULFILLED", payload: {
                id: id, 
                title: title,
                desc: desc
            }})
        })
        .catch((err) =>{
            dispatch({type: "UPDATE_TASK_REJECTED", payload: err})    
        })
    }      
}
