export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'

let toDoId = 0;

export const addToDo = text => ({
    type: ADD_TODO,
    id: toDoId++,
    text
});

export const deleteToDo = id => ({
    type: DELETE_TODO,
    id
});

export const toggleToDo = id => ({
    type: TOGGLE_TODO,
    id
});