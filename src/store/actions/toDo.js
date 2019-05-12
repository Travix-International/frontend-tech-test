import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getToDo = toDoList => ({
    type: actionTypes.GET_TODO,
    toDoList
});

export const getToDoItems = () => {
    return dispatch => {
        axios.get('/tasks')
            .then(res => {
                dispatch(getToDo(res.data.tasks));
            })
            .catch(err => console.log(err));
    }
};


export const addToDo = item => ({
    type: actionTypes.ADD_TODO,
    ...item,
});

export const addToDoItem = (title, description = title) => {
    return dispatch => {
        axios.post(`/task/create/${title}/${description}`)
            .then(res => {
                dispatch(addToDo(res.data.data));
            })
            .catch(err => console.log(err));
    }
}

export const deleteToDo = id => ({
    type: actionTypes.DELETE_TODO,
    id,
});

export const deleteToDoItem = id => {
    return dispatch => {
        axios.delete(`/task/delete/${id}`)
            .then(res => {
                dispatch(deleteToDo(id));
            })
            .catch(err => console.log(err));
    }
};

export const toggleToDo = id => ({
    type: actionTypes.TOGGLE_TODO,
    id,
});

export const toggleToDoItem = id => {
    return dispatch => {
        axios.put(`/task/toggle/${id}`)
            .then(() => {
                dispatch(toggleToDo(id));
            })
            .catch(err => console.log(err));
    }
};

export const editToDo = (id, title) => ({
    type: actionTypes.EDIT_TODO,
    id,
    title,
})

export const editToDoItem = (id, title, description = title) => {
    return dispatch => {
        axios.put(`/task/update/${id}/${title}/${description}`)
            .then(() => {
                dispatch(editToDo(id,title));
            })
            .catch(err => console.log(err));
    }
}