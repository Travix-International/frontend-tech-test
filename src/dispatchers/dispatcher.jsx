import axios from "axios";
import { getToDo, deleteToDo, addToDo, editTodo } from "./../actions/Actions";
axios.defaults.baseURL = "http://localhost:9001/";
export const deleteToDoItem = id => dispatch => {
  axios
    .delete(`task/delete/${id}`)
    .then(() => dispatch(deleteToDo(id)))
    .catch(err => console.log(err));
};

export const getToDoItems = () => dispatch => {
  axios
    .get("tasks")
    .then(response => response.data)
    .then(data => dispatch(getToDo(data.tasks)))
    .catch(err => console.log(err));
};

export const addToDoItem = (title, description) => dispatch => {
  axios
    .post(`task/create/${title}/${description}`)
    .then(res => dispatch(addToDo(res.data.data)))
    .catch(err => console.log(err));
};

export const editToDoItem = (
  id,
  description,
  title = description
) => dispatch => {
  axios
    .put(`task/update/${id}/${title}/${description}`)
    .then(() => dispatch(editTodo(id, description)))
    .catch(err => console.log(err));
};
