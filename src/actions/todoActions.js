import {
  GET_TASKS,
  GET_TASK,
  DELETE_TASK,
  ADD_TASK,
  UPDATE_TASK
} from "./types";
import axios from "axios";

export const getTasks = () => async dispatch => {
  const res = await axios.get("/tasks");
  dispatch({
    type: GET_TASKS,
    payload: res.data.tasks
  });
};

export const getTask = id => async dispatch => {
  const res = await axios.get(`/task/${id}`);
  dispatch({
    type: GET_TASK,
    payload: res.data.task
  });
};

export const deleteTask = id => async dispatch => {
  await axios.delete(`/task/delete/${id}`);
  dispatch({
    type: DELETE_TASK,
    payload: id
  });
};

export const addTask = task => async dispatch => {
  const url = task.title+'/'+task.description
  const res = await axios.post("/task/create/"+url);
  dispatch({
    type: ADD_TASK,
    payload: res.data
  });
};

export const updateTask = task => async dispatch => {
  const url = task.id+'/'+ task.title+'/'+task.description;
  const res = await axios.put(`/task/update/${url}`);
  console.log(res);
  dispatch({
    type: UPDATE_TASK,
    payload: res.data
  });
};
