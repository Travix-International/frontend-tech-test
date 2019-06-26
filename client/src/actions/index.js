import axios from 'axios';
import {
    FETCH_TODOLIST,
    FETCH_TODO,
    GET_ERRORS,
  } from './types';

//Get Todolist
export const fetchTodoList = () => dispatch =>
    axios.get(`/tasks`)
        .then(res =>
            dispatch({
                type: FETCH_TODOLIST,
                payload: res.data.tasks
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )

//Get individual Todo
export const fetchIndividualTodo = id => dispatch =>
    axios.get(`/task/${id}`)
        .then(res =>
            dispatch({
                type: FETCH_TODO,
                payload: res.data.task
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )

// Create Todo
export const createTodo = (title, description) => dispatch =>
    axios.post(`/task/create/${title}/${description}`)
        .then()
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )


// Update Todo
export const updateTodo = (id, title, description) => dispatch =>
    axios.put(`/task/update/${id}/${title}/${description}`)
        .then()
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )

// Delete Todo
export const deleteTodo = id => dispatch =>
    axios.delete(`/task/delete/${id}`)
        .then(res => dispatch(fetchTodoList()))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )

