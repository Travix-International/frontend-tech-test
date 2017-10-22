import axios from 'axios';

const server = "http://localhost:9001/";

export function fetchAllTasks(){
    return {
        type: "FETCH_TASKS",
        payload: axios.get(server + "tasks")
    }
}

export function addNewTasks(title, desc){
    return {
        type: "ADD_TASK",
        payload: axios.post(server + "task/create/" + encodeURIComponent(title) + "/" + encodeURIComponent(desc))
    }
}

export function updateTask(id, title, desc){
    return function(dispatch) {
        dispatch({type: "UPDATE_TASK_PENDING", payload: ""})
        axios.put(server + "task/update/" + id + "/" + encodeURIComponent(title) + "/"  + encodeURIComponent(desc))
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

export function deleteTask(id){
    return function(dispatch) {
        dispatch({type: "DELETE_TASK_PENDING", payload: ""})
        axios.delete(server + "task/delete/" + id)
        .then((response) => {
            dispatch({type: "DELETE_TASK_FULFILLED", payload: id})
        })
        .catch((err) =>{
            dispatch({type: "DELETE_TASK_REJECTED", payload: err})    
        })
    }      
}
