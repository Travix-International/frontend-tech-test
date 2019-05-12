import { CREATE_TASK, DELETE_TASK, EDIT_TASK, GET_TASKS_SUCCESS, GET_TASKS_FAILURE,
     DELETE_TASK_SUCCESS, DELETE_TASK_FAILURE, CREATE_TASK_SUCCESS, CREATE_TASK_FAILURE,
    EDIT_TASK_SUCCESS, EDIT_TASK_FAILURE, FILTER_TASKS, SORT_TASKS_BY_TITLE, SORT_TASKS_BY_DESCRIPTION, SORT_TASKS } from '../constants/action-types';


export function createTask (payload) {
    //return { type: CREATE_TASK, payload }
    return (dispatch) => {
        return fetch(`/task/create/${payload.title}/${payload.description}`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((response)=>{
            console.log(response);
            if (!response.status === 201) {
                throw new Error(`error creating new task with title ${payload.title}`);
            } else {
                 return response.json();
            }
        }).then((response)=>{
            console.log(response);
            dispatch(createTaskSuccess(response));
            dispatch(getTasks());
        })
        .catch((error)=>dispatch(createTaskFailure(error)));
    }
};

export function createTaskSuccess (createMessage) {
    console.log(createMessage);
    return { type : CREATE_TASK_SUCCESS, payload: createMessage}
}

export function createTaskFailure (error) {
    console.log(error);
    return { type: CREATE_TASK_FAILURE, payload: error }
}

// export function deleteTask (payload) {
//     return { type: DELETE_TASK, payload }
// };

export const deleteTask = (payload) => {
    return (dispatch) => {
        return fetch(`/task/delete/${payload.id}`, {
            method:'DELETE',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then((response)=>{
                if (!response.status === 200) {
                    throw new Error(`error deleting task with id ${payload.id}`);
                } else {
                     return response.json();
                }
            })
            .then((data)=> {
                dispatch(deleteTaskSuccess(data));
                dispatch(getTasks());
            })
            .catch((error)=>dispatch(deleteTaskFailure(error)))
    };
}

export function deleteTaskSuccess (deleteMessage) {
    console.log(deleteMessage);
    return { type : DELETE_TASK_SUCCESS, payload: deleteMessage}
}

export function deleteTaskFailure (error) {
    console.log(error);
    return { type: DELETE_TASK_FAILURE, payload: error }
}


export function editTask (payload) {
    //return { type: EDIT_TASK, payload }
    return (dispatch) => {
        return fetch(`/task/update/${payload.id}/${payload.title}/${payload.description}`, {
            method:'PUT',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then((response)=>{
                console.log(response);
                if (!response.status === 200) {
                    throw new Error(`error updating task with id ${payload.id}`);
                } else {
                    //console.log(response.json()); 
                    return response.json();
                }
            })
            .then((data)=> {
                console.log(data);
                dispatch(editTaskSuccess(data));
                dispatch(getTasks());
            })
            .catch((error)=>dispatch(editTaskFailure(error)))
    };
};

export function editTaskSuccess (editMessage) {
    console.log(editMessage);
    return { type : EDIT_TASK_SUCCESS, payload: editMessage}
}

export function editTaskFailure (error) {
    console.log(error);
    return { type: EDIT_TASK_FAILURE, payload: error }
}

export const getTasks = () => {
    return (dispatch) => {
        return fetch(`/tasks`)
            .then((response)=>{
                if (!response.status === 200) {
                    throw new Error('error fetching tasks');
                } else {
                     return response;
                }
            })
            .then((response)=>response.json())
            .then((data)=> dispatch(getTasksSuccess(data)))
            .catch((error)=>dispatch(getTasksFailure(error)))
    };
}

export function getTasksSuccess (taskData) {
    console.log(taskData);
    return { type : GET_TASKS_SUCCESS, payload: taskData}
}

export function getTasksFailure (error) {
    console.log(error);
    return { type: GET_TASKS_FAILURE, payload: error }
}

export function filterTasks (query) {
    console.log("Filter query: ", query);
    return { type: FILTER_TASKS, payload: query }
}

export function sortTasks (sort) {
    
    return { type: SORT_TASKS, payload: sort }
}
