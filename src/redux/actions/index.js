import axios from 'axios';

export const GET_TODO = 'GET_TODO';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

let toDoId = 0;

export const getToDo = toDoList => ({
    type: GET_TODO,
    toDoList,
});

export const addToDo = title => ({
    type: ADD_TODO,
    id: toDoId += 1,
    title,
});

export const deleteToDo = id => ({
    type: DELETE_TODO,
    id,
});

export const toggleToDo = id => ({
    type: TOGGLE_TODO,
    id,
});

export const getToDoItems = () => dispatch => {
    axios.get('/api/tasks')
        .then(response => response.data)
        .then(data => dispatch(getToDo(data.tasks)))
        .catch(err => console.log(err));
};

export const addToDoItem = (title, description = title) => dispatch => {
    axios.post(`/api/task/create/${title}/${description}`)
        .then(() => dispatch(addToDo(title, description)))
        .catch(err => console.log(err));
};

export const deleteToDoItem = id => dispatch => {
    axios.delete(`/api/delete/${id}`)
        .then(() => dispatch(deleteToDo(id)))
        .catch(err => console.log(err));
};
