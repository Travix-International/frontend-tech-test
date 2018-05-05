import axios from 'axios'

import { apiUrl } from './constants'

export const addTodo = ({ title, description }) =>
  axios.post(`${apiUrl}/task/create/${title}/${description}`)

export const deleteTodo = ({ id, page }) =>
  axios.delete(`${apiUrl}/task/delete/${id}/${page}`)

export const editTodo = ({ id, title, description, page }) =>
  axios.put(`${apiUrl}/task/update/${id}/${page}/${title}/${description}`)

export const fetchTodoById = ({ id }) => axios.get(`${apiUrl}/tasks/${id}`)

export const fetchTodoList = ({ page }) => axios.get(`${apiUrl}/tasks/${page}`)
