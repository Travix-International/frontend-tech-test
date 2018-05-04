import axios from 'axios';

export const GET_TODO = 'GET_TODO';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';


export const getToDo = toDoList => ({
    type: GET_TODO,
    toDoList,
});

export const addToDo = item => ({
    type: ADD_TODO,
    ...item,
});

export const deleteToDo = id => ({
    type: DELETE_TODO,
    id,
});

export const toggleToDo = id => ({
    type: TOGGLE_TODO,
    id,
});

export const updateToDo = (id, title) => ({
    type: UPDATE_TODO,
    id,
    title,
})

export const getToDoItems = () => dispatch => {
    axios.get('/api/tasks')
        .then(response => response.data)
        .then(data => dispatch(getToDo(data.tasks)))
        .catch(err => console.log(err));
};

export const addToDoItem = (title, description = title) => dispatch => {
    axios.post(`/api/task/create/${title}/${description}`)
        .then(res => dispatch(addToDo(res.data.data)))
        .catch(err => console.log(err));
};

export const deleteToDoItem = id => dispatch => {
    axios.delete(`/api/task/delete/${id}`)
        .then(() => dispatch(deleteToDo(id)))
        .catch(err => console.log(err));
};

export const toggleToDoItem = id => dispatch => {
    axios.put(`api/task/toggle/${id}`)
        .then(() => dispatch(toggleToDo(id)))
        .catch(err => console.log(err));
};

export const updateToDoItem = (id, title, description = title) => dispatch => {
    axios.put(`api/task/update/${id}/${title}/${description}`)
        .then(() => dispatch(updateToDo(id,title)))
        .catch(err => console.log(err));
}
