import axios from 'axios';
import {
	PENDING,
	FETCH_ALL_SUCCESS,
 	CREATE_SUCCESS,
	UPDATE_SUCCESS,
	DELETE_SUCCESS
} from './actionTypes';


function requestStarted() {
  return {
    type: PENDING
  }
}

function fetchAllSuccess(payload) {
  return {
    type: FETCH_ALL_SUCCESS,
    payload
  }
}

function createSuccess(payload) {
  return {
    type: CREATE_SUCCESS,
  	payload
  }
}

function updateSuccess(payload) {
  return {
    type: UPDATE_SUCCESS,
  	payload
  }
}

function deleteSuccess(payload) {
  return {
    type: DELETE_SUCCESS,
  	payload
  }
}

export function fetchAll(){
	return function (dispatch) {
		const getAllEndPoint = '/tasks';
		dispatch(requestStarted());
		 return axios.get(getAllEndPoint).then(
				response => dispatch(fetchAllSuccess(response.data.tasks)),
				error => console.log('An error occured.', error)
				// dispatch fetchAllError
		 )
	}
}

export function createTask(task) {
	return function (dispatch) {
		const createEndPoint = `/task/create/${task.title}/${task.description}`;
		dispatch(requestStarted());
		axios.post(createEndPoint)
		.then(
			 response => dispatch(createSuccess(task)),
			 error => console.log('An error occured.', error)
			 // dispatch fetchAllError
		)
	}
}

export function updateTask(task) {
	console.log('task', task)
	return function (dispatch) {
		const updateEndPoint = `/task/update/${task.id}/${task.title}/${task.description}`;
		dispatch(requestStarted());
		axios.put(updateEndPoint)
		.then(
			 response => {console.log('here'); dispatch(updateSuccess(task))},
			 error => console.log('An error occured.', error)
			 // dispatch fetchAllError
		)
	}
}

export function deleteTask(id) {
	console.log('id', id)
	return function (dispatch) {
		const deleteEndPoint = `/task/delete/${id}`;
		dispatch(requestStarted());
		axios.delete(deleteEndPoint)
		.then(
			 response => dispatch(deleteSuccess(id)),
			 error => console.log('An error occured.', error)
			 // dispatch fetchAllError
		)
	}
}
