import axios from 'axios';
import { PENDING, FETCH_ALL_SUCCESS, CREATE_SUCCESS,
  UPDATE_SUCCESS, DELETE_SUCCESS
} from './actionTypes';

export function requestStarted() {
  return {
    type: PENDING
  };
}

export function fetchAllSuccess(payload) {
  return {
    type: FETCH_ALL_SUCCESS,
    payload
  };
}

export function createSuccess(payload) {
  return {
    type: CREATE_SUCCESS,
    payload
  };
}

export function updateSuccess(payload) {
  return {
    type: UPDATE_SUCCESS,
    payload
  };
}

export function deleteSuccess(payload) {
  return {
    type: DELETE_SUCCESS,
    payload
  };
}

export function fetchAll() {
  return function (dispatch) {
    const getAllEndPoint = '/tasks';
    dispatch(requestStarted());
    return axios.get(getAllEndPoint).then(
      response => dispatch(fetchAllSuccess(response.data.tasks)),
      error => console.log('An error occured.', error)
      // TODO: error handling
      // dispatch fetchAllError
    );
  };
}

export function createTask(task) {
  return function (dispatch) {
    const createEndPoint = `/task/create/${task.title}/${task.description}`;
    dispatch(requestStarted());
    axios.post(createEndPoint).then(
      () => dispatch(createSuccess(task)),
      error => console.log('An error occured.', error)
      // TODO: error handling
    );
  };
}

export function updateTask(task) {
  return function (dispatch) {
    const updateEndPoint = `/task/update/${task.id}/${task.title}/${task.description}`;
    dispatch(requestStarted());
    axios.put(updateEndPoint).then(
      () => dispatch(updateSuccess(task)),
      error => console.log('An error occured.', error)
      // TODO: error handing
    );
  };
}

export function deleteTask(id) {
  return function (dispatch) {
    const deleteEndPoint = `/task/delete/${id}`;
    dispatch(requestStarted());
    axios.delete(deleteEndPoint).then(
      () => dispatch(deleteSuccess(id)),
      error => console.log('An error occured.', error)
      // TODO: error handing
    );
  };
}
